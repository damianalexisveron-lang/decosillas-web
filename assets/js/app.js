import { products, categories } from "./products.js";
import { buscarTarifa, textoTarifa } from "./envios.js";
import { whatsapp } from "./config.js";

const $ = (id) => document.getElementById(id);
const money = (n) => n == null
  ? "Consultar"
  : new Intl.NumberFormat("es-AR", { style:"currency", currency:"ARS", maximumFractionDigits:0 }).format(n);

let activeCategory = "all";
let searchText = "";
const cart = {};
const galleryState = {};

function categoryLabel(id) {
  return categories.find(c => c.id === id)?.label || id;
}

function renderCategories() {
  $("categories").innerHTML = categories.map(c => `
    <button class="category-button ${activeCategory === c.id ? "active" : ""}" data-category="${c.id}">
      ${c.label}
    </button>
  `).join("");

  document.querySelectorAll("[data-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderCategories();
      renderProducts();
    });
  });
}

function filteredProducts() {
  const q = searchText.trim().toLowerCase();
  return products.filter(p => {
    const categoryOK = activeCategory === "all" || p.category === activeCategory;
    const searchOK = !q || `${p.name} ${p.description} ${categoryLabel(p.category)}`.toLowerCase().includes(q);
    return categoryOK && searchOK;
  });
}

function renderProducts() {
  const list = filteredProducts();
  $("empty").classList.toggle("hidden", list.length !== 0);

  $("products").innerHTML = list.map(productCard).join("");

  document.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => addProduct(btn.dataset.add));
  });
  document.querySelectorAll("[data-plus]").forEach(btn => {
    btn.addEventListener("click", () => changeProductQty(btn.dataset.plus, 1));
  });
  document.querySelectorAll("[data-minus]").forEach(btn => {
    btn.addEventListener("click", () => changeProductQty(btn.dataset.minus, -1));
  });
  document.querySelectorAll("[data-gallery-next]").forEach(btn => {
    btn.addEventListener("click", () => nextImage(btn.dataset.galleryNext));
  });
  document.querySelectorAll("[data-gallery-prev]").forEach(btn => {
    btn.addEventListener("click", () => prevImage(btn.dataset.galleryPrev));
  });
}

function productCard(p) {
  const qty = cart[p.id] ?? (p.min || 1);
  const imgs = p.images || [];
  const index = galleryState[p.id] || 0;
  const image = imgs[index];

  return `
    <article class="product-card">
      <div class="product-image">
        ${image
          ? `<img src="imagenes/${image}" alt="${p.name}" loading="lazy"
               onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden')">`
          : ""
        }
        <div class="missing ${image ? "hidden" : ""}">
          📷<br>Foto a cargar
        </div>

        <span class="badge">${p.min >= 4 ? "MÍN. 4 UNIDADES" : p.category === "combos" ? "COMBO" : "CATÁLOGO"}</span>

        ${imgs.length > 1 ? `
          <button class="gallery-arrow left" data-gallery-prev="${p.id}" aria-label="Foto anterior">‹</button>
          <button class="gallery-arrow right" data-gallery-next="${p.id}" aria-label="Foto siguiente">›</button>
          <div class="gallery-dots">
            ${imgs.map((_, i) => `<span class="gallery-dot ${i === index ? "active" : ""}"></span>`).join("")}
          </div>
        ` : ""}
      </div>

      <div class="product-info">
        <div class="product-title">${p.name}</div>
        <div class="product-category">${categoryLabel(p.category)}</div>
        <div class="product-price">${money(p.price)}</div>
        <div class="product-description">${p.description}</div>
        ${p.min >= 4 ? `<div class="minimum">Compra mínima: ${p.min} unidades</div>` : ""}

        <div class="product-actions">
          <div class="qty-control">
            <button data-minus="${p.id}">−</button>
            <span>${qty}</span>
            <button data-plus="${p.id}">+</button>
          </div>
          <button class="add-button" data-add="${p.id}">Agregar</button>
        </div>
      </div>
    </article>
  `;
}

function nextImage(id) {
  const p = products.find(x => x.id === id);
  if (!p?.images?.length) return;
  galleryState[id] = ((galleryState[id] || 0) + 1) % p.images.length;
  renderProducts();
}

function prevImage(id) {
  const p = products.find(x => x.id === id);
  if (!p?.images?.length) return;
  galleryState[id] = ((galleryState[id] || 0) - 1 + p.images.length) % p.images.length;
  renderProducts();
}

function addProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  cart[id] = Math.max(p.min || 1, cart[id] || p.min || 1);
  updateCart();
  openCart();
}

function changeProductQty(id, delta) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  cart[id] = Math.max(p.min || 1, (cart[id] || p.min || 1) + delta);
  updateCartCount();
  renderProducts();
}

function cartEntries() {
  return Object.entries(cart).filter(([, qty]) => qty > 0);
}

function subtotal() {
  return cartEntries().reduce((sum, [id, qty]) => {
    const p = products.find(x => x.id === id);
    return sum + (p?.price || 0) * qty;
  }, 0);
}

function updateCartCount() {
  $("cartCount").textContent = cartEntries().reduce((sum, [, qty]) => sum + qty, 0);
}

function updateCart() {
  updateCartCount();
  renderCart();
}

function renderCart() {
  const entries = cartEntries();

  $("cartItems").innerHTML = entries.length
    ? entries.map(([id, qty]) => {
        const p = products.find(x => x.id === id);
        return `
          <div class="cart-item">
            <div>
              <b>${p.name}</b>
              <small>${qty} × ${money(p.price)}</small>
            </div>
            <div class="cart-item-actions">
              <button data-cart-minus="${id}">−</button>
              <b>${qty}</b>
              <button data-cart-plus="${id}">+</button>
            </div>
          </div>
        `;
      }).join("")
    : `<div class="note">Todavía no agregaste productos.</div>`;

  $("subtotal").textContent = money(subtotal());

  document.querySelectorAll("[data-cart-minus]").forEach(btn => {
    btn.addEventListener("click", () => changeCartQty(btn.dataset.cartMinus, -1));
  });
  document.querySelectorAll("[data-cart-plus]").forEach(btn => {
    btn.addEventListener("click", () => changeCartQty(btn.dataset.cartPlus, 1));
  });

  renderCheckoutForm();
}

function changeCartQty(id, delta) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  cart[id] = Math.max(p.min || 1, (cart[id] || p.min || 1) + delta);
  updateCart();
  renderProducts();
}

function selectedDelivery() {
  return document.querySelector('input[name="delivery"]:checked')?.value || "amba";
}

function renderCheckoutForm() {
  if (!cartEntries().length) {
    $("checkoutForm").innerHTML = "";
    return;
  }

  const mode = selectedDelivery();

  if (mode === "interior") {
    $("checkoutForm").innerHTML = customerForm(true) + `
      <div class="note">🚚 Envíos al interior: el costo se cotiza por WhatsApp según destino y cantidad de bultos.</div>
      <button class="send-button" id="sendOrder">Enviar pedido por WhatsApp</button>
    `;
  } else if (mode === "retiro") {
    $("checkoutForm").innerHTML = customerForm(false, false) + `
      <div class="note">📍 Retiro en depósito: Olivos, Vicente López.</div>
      <button class="send-button" id="sendOrder">Enviar pedido por WhatsApp</button>
    `;
  } else {
    $("checkoutForm").innerHTML = customerForm(false, true) + `
      <div id="shippingResult" class="note">Seleccioná una localidad para calcular el envío.</div>
      <button class="send-button" id="sendOrder">Enviar pedido por WhatsApp</button>
    `;
  }

  document.querySelectorAll('input[name="delivery"]').forEach(input => {
    input.addEventListener("change", renderCheckoutForm);
  });

  $("sendOrder").addEventListener("click", sendOrder);

  const locality = $("localidad");
  if (locality && mode === "amba") {
    locality.addEventListener("change", updateShippingPreview);
  }
}

function customerForm(withDni, withLocality) {
  return `
    <div class="form">
      <label>Destinatario
        <input id="destinatario" placeholder="Nombre y apellido">
      </label>

      ${withDni ? `<label>DNI
        <input id="dni" inputmode="numeric" placeholder="DNI">
      </label>` : ""}

      <label>Teléfono
        <input id="telefono" inputmode="tel" placeholder="11 1234-5678">
      </label>

      <label>Dirección
        <input id="direccion" placeholder="Calle y número">
      </label>

      ${withLocality ? `
        <label>Localidad
          <select id="localidad">
            <option value="">Seleccionar localidad...</option>
            <option>Ciudad de Buenos Aires</option>
            <option>Olivos</option>
            <option>Vicente López</option>
            <option>Florida</option>
            <option>Munro</option>
            <option>La Lucila</option>
            <option>Martínez</option>
            <option>San Isidro</option>
            <option>San Fernando</option>
            <option>Tigre</option>
            <option>Malvinas Argentinas</option>
            <option>San Martín</option>
            <option>San Miguel</option>
            <option>José C. Paz</option>
            <option>Pilar</option>
            <option>Escobar</option>
            <option>Merlo</option>
            <option>Moreno</option>
            <option>Ituzaingó</option>
            <option>Morón</option>
            <option>Ezeiza</option>
            <option>Esteban Echeverría</option>
            <option>Monte Grande</option>
            <option>Avellaneda</option>
            <option>Lanús</option>
            <option>Quilmes</option>
            <option>Lomas de Zamora</option>
            <option>Almirante Brown</option>
            <option>Florencio Varela</option>
            <option>Berazategui</option>
            <option>La Matanza</option>
            <option>La Plata</option>
            <option>Otra localidad</option>
          </select>
        </label>
      ` : ""}

      ${withDni ? `
        <label>Provincia
          <input id="provincia" placeholder="Provincia">
        </label>
        <label>Código Postal
          <input id="codigoPostal" placeholder="CP">
        </label>
      ` : ""}

      <label>Observaciones
        <textarea id="observaciones" placeholder="Indicaciones para la entrega..."></textarea>
      </label>
    </div>
  `;
}

function updateShippingPreview() {
  const locality = $("localidad")?.value;
  const result = $("shippingResult");
  if (!result) return;

  const zone = buscarTarifa(locality || "");
  result.innerHTML = zone
    ? `🚚 <b>Envío:</b> ${textoTarifa(zone)}${zone.tipo === "rango" ? "<br><small>El valor exacto se confirma según el pedido.</small>" : ""}`
    : `🚚 <b>Envío:</b> A cotizar por WhatsApp`;
}

function value(id) {
  return document.getElementById(id)?.value?.trim() || "";
}

function sendOrder() {
  if (!cartEntries().length) {
    alert("Agregá al menos un producto.");
    return;
  }

  const delivery = selectedDelivery();
  const recipient = value("destinatario");
  const phone = value("telefono");

  if (!recipient || !phone) {
    alert("Completá destinatario y teléfono.");
    return;
  }

  let message = "🛒 *NUEVO PEDIDO — DECOSILLAS*\\n\\n";

  for (const [id, qty] of cartEntries()) {
    const p = products.find(x => x.id === id);
    const line = p.price == null ? "Consultar" : money(p.price * qty);
    message += `• ${qty} × ${p.name} — ${line}\\n`;
  }

  message += `\\n💰 *Subtotal productos:* ${money(subtotal())}\\n`;

  if (delivery === "amba") {
    const locality = value("localidad");
    const zone = buscarTarifa(locality);

    message += `🚚 *Envío AMBA:* ${locality || "sin localidad seleccionada"}\\n`;
    message += `💵 *Tarifa:* ${textoTarifa(zone)}\\n`;
  }

  if (delivery === "interior") {
    message += "🚚 *Envío:* INTERIOR — A COTIZAR\\n";
    message += `🪪 DNI: ${value("dni")}\\n`;
    message += `📍 Localidad: ${value("localidad")}\\n`;
    message += `🏛️ Provincia: ${value("provincia")}\\n`;
    message += `📮 Código Postal: ${value("codigoPostal")}\\n`;
  }

  if (delivery === "retiro") {
    message += "📦 *Modalidad:* RETIRO EN DEPÓSITO — OLIVOS\\n";
  }

  message += `\\n👤 *Destinatario:* ${recipient}\\n`;
  message += `📞 *Teléfono:* ${phone}\\n`;
  message += `🏠 *Dirección:* ${value("direccion")}\\n`;

  if (delivery !== "interior") {
    message += `📍 *Localidad:* ${value("localidad")}\\n`;
  }

  message += `📝 *Observaciones:* ${value("observaciones") || "Sin observaciones"}\\n`;

  window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
}

function openCart() {
  $("cartOverlay").classList.add("open");
  $("cartOverlay").setAttribute("aria-hidden", "false");
  renderCart();
}

function closeCart() {
  $("cartOverlay").classList.remove("open");
  $("cartOverlay").setAttribute("aria-hidden", "true");
}

$("openCart").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
$("cartOverlay").addEventListener("click", event => {
  if (event.target === $("cartOverlay")) closeCart();
});
$("search").addEventListener("input", event => {
  searchText = event.target.value;
  renderProducts();
});

renderCategories();
renderProducts();
updateCartCount();
