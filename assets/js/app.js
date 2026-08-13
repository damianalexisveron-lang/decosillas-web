import { products, categories } from "./products.js";
import { buscarTarifa, textoTarifa, importeEnvioFijo } from "./envios.js";
import { whatsapp } from "./config.js";

const $ = (id) => document.getElementById(id);

const money = (n) =>
  n == null
    ? "Consultar"
    : new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
      }).format(n);

let activeCategory = "all";
let searchText = "";

const cart = {};
const galleryState = {};


function categoryLabel(id) {
  return categories.find(c => c.id === id)?.label || id;
}


/* =========================
   CATEGORÍAS
========================= */

function renderCategories() {

  $("categories").innerHTML = categories.map(c => `
    <button
      class="category-button ${activeCategory === c.id ? "active" : ""}"
      data-category="${c.id}">
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


/* =========================
   BUSCADOR
========================= */

function filteredProducts() {

  const q = searchText.trim().toLowerCase();

  return products.filter(p => {

    const categoryOK =
      activeCategory === "all" ||
      p.category === activeCategory;

    const searchOK =
      !q ||
      `${p.name} ${p.description} ${categoryLabel(p.category)}`
        .toLowerCase()
        .includes(q);

    return categoryOK && searchOK;

  });

}


/* =========================
   PRODUCTOS
========================= */

function renderProducts() {

  const list = filteredProducts();

  $("empty").classList.toggle(
    "hidden",
    list.length !== 0
  );

  $("products").innerHTML =
    list.map(productCard).join("");


  document.querySelectorAll("[data-add]").forEach(btn => {

    btn.addEventListener("click", () => {
      addProduct(btn.dataset.add);
    });

  });


  document.querySelectorAll("[data-plus]").forEach(btn => {

    btn.addEventListener("click", () => {
      changeProductQty(btn.dataset.plus, 1);
    });

  });


  document.querySelectorAll("[data-minus]").forEach(btn => {

    btn.addEventListener("click", () => {
      changeProductQty(btn.dataset.minus, -1);
    });

  });


  document.querySelectorAll("[data-gallery-next]").forEach(btn => {

    btn.addEventListener("click", () => {
      nextImage(btn.dataset.galleryNext);
    });

  });


  document.querySelectorAll("[data-gallery-prev]").forEach(btn => {

    btn.addEventListener("click", () => {
      prevImage(btn.dataset.galleryPrev);
    });

  });

}


/* =========================
   PRECIO MOSTRADO
========================= */

function productPriceLabel(p) {

  if (p.price == null) {
    return "Consultar";
  }

  if (p.transferOnly) {

    return `
      ${money(p.price)}
      <small class="transfer-label">
        por transferencia
      </small>
    `;

  }

  return money(p.price);
}


/* =========================
   TARJETA PRODUCTO
========================= */

function productCard(p) {

  const qty =
    cart[p.id] ??
    (p.min || 1);

  const imgs =
    p.images || [];

  const index =
    galleryState[p.id] || 0;

  const image =
    imgs[index];


  return `

    <article class="product-card">

      <div class="product-image">

        ${
          image
            ? `
              <img
                src="imagenes/${image}"
                alt="${p.name}"
                loading="lazy"
                onerror="
                  this.style.display='none';
                  this.nextElementSibling.classList.remove('hidden')
                "
              >
            `
            : ""
        }

        <div class="missing ${image ? "hidden" : ""}">
          📷<br>
          Foto a cargar
        </div>


        <span class="badge">

          ${
            p.min >= 4
              ? "MÍN. 4 UNIDADES"
              : p.category === "combos"
                ? "COMBO"
                : "CATÁLOGO"
          }

        </span>


        ${
          imgs.length > 1
            ? `

              <button
                class="gallery-arrow left"
                data-gallery-prev="${p.id}"
                aria-label="Foto anterior">
                ‹
              </button>

              <button
                class="gallery-arrow right"
                data-gallery-next="${p.id}"
                aria-label="Foto siguiente">
                ›
              </button>

              <div class="gallery-dots">

                ${imgs.map((_, i) => `
                  <span
                    class="gallery-dot ${i === index ? "active" : ""}">
                  </span>
                `).join("")}

              </div>

            `
            : ""
        }

      </div>


      <div class="product-info">

        <div class="product-title">
          ${p.name}
        </div>

        <div class="product-category">
          ${categoryLabel(p.category)}
        </div>

        <div class="product-price">
          ${productPriceLabel(p)}
        </div>

        <div class="product-description">
          ${p.description}
        </div>


        ${
          p.min >= 4
            ? `
              <div class="minimum">
                Compra mínima: ${p.min} unidades
              </div>
            `
            : ""
        }


        <div class="product-actions">

          <div class="qty-control">

            <button data-minus="${p.id}">
              −
            </button>

            <span>
              ${qty}
            </span>

            <button data-plus="${p.id}">
              +
            </button>

          </div>


          <button
            class="add-button"
            data-add="${p.id}">
            Agregar
          </button>

        </div>

      </div>

    </article>

  `;

}


/* =========================
   GALERÍA
========================= */

function nextImage(id) {

  const p =
    products.find(x => x.id === id);

  if (!p?.images?.length) {
    return;
  }

  galleryState[id] =
    ((galleryState[id] || 0) + 1) %
    p.images.length;

  renderProducts();

}


function prevImage(id) {

  const p =
    products.find(x => x.id === id);

  if (!p?.images?.length) {
    return;
  }

  galleryState[id] =
    ((galleryState[id] || 0) - 1 + p.images.length) %
    p.images.length;

  renderProducts();

}


/* =========================
   CARRITO
========================= */

function addProduct(id) {

  const p =
    products.find(x => x.id === id);

  if (!p) {
    return;
  }

  cart[id] =
    Math.max(
      p.min || 1,
      cart[id] || p.min || 1
    );

  updateCart();
  openCart();

}


function changeProductQty(id, delta) {

  const p =
    products.find(x => x.id === id);

  if (!p) {
    return;
  }

  cart[id] =
    Math.max(
      p.min || 1,
      (cart[id] || p.min || 1) + delta
    );

  updateCartCount();
  renderProducts();

}


function cartEntries() {

  return Object.entries(cart)
    .filter(([, qty]) => qty > 0);

}


function subtotal() {

  return cartEntries().reduce(
    (sum, [id, qty]) => {

      const p =
        products.find(x => x.id === id);

      return sum +
        (p?.price || 0) * qty;

    },
    0
  );

}


function updateCartCount() {

  $("cartCount").textContent =
    cartEntries().reduce(
      (sum, [, qty]) => sum + qty,
      0
    );

}


function updateCart() {

  updateCartCount();
  renderCart();

}


/* =========================
   CARRITO VISUAL
========================= */

function renderCart() {

  const entries =
    cartEntries();


  $("cartItems").innerHTML =
    entries.length

      ? entries.map(([id, qty]) => {

          const p =
            products.find(x => x.id === id);

          return `

            <div class="cart-item">

              <div>

                <b>
                  ${p.name}
                </b>

                <small>
                  ${qty} × ${money(p.price)}
                </small>

              </div>


              <div class="cart-item-actions">

                <button
                  data-cart-minus="${id}">
                  −
                </button>

                <b>
                  ${qty}
                </b>

                <button
                  data-cart-plus="${id}">
                  +
                </button>

              </div>

            </div>

          `;

        }).join("")

      : `
        <div class="note">
          Todavía no agregaste productos.
        </div>
      `;


  $("subtotal").textContent =
    money(subtotal());


  document
    .querySelectorAll("[data-cart-minus]")
    .forEach(btn => {

      btn.addEventListener("click", () => {

        changeCartQty(
          btn.dataset.cartMinus,
          -1
        );

      });

    });


  document
    .querySelectorAll("[data-cart-plus]")
    .forEach(btn => {

      btn.addEventListener("click", () => {

        changeCartQty(
          btn.dataset.cartPlus,
          1
        );

      });

    });


  renderCheckoutForm();

}


function changeCartQty(id, delta) {

  const p =
    products.find(x => x.id === id);

  if (!p) {
    return;
  }

  cart[id] =
    Math.max(
      p.min || 1,
      (cart[id] || p.min || 1) + delta
    );

  updateCart();

  renderProducts();

}


/* =========================
   ENTREGA
========================= */

function selectedDelivery() {

  return document
    .querySelector(
      'input[name="delivery"]:checked'
    )
    ?.value || "amba";

}


/* =========================
   FORMULARIO
========================= */

function renderCheckoutForm() {

  if (!cartEntries().length) {

    $("checkoutForm").innerHTML = "";

    return;
  }


  const mode =
    selectedDelivery();


  if (mode === "interior") {

    $("checkoutForm").innerHTML =
      customerForm(true, true) +

      `

        <div class="note">

          🚚 Envíos al interior:
          el costo se cotiza por WhatsApp
          según destino y cantidad de bultos.

        </div>

        <button
          class="send-button"
          id="sendOrder">

          Enviar pedido por WhatsApp

        </button>

      `;

  }

  else if (mode === "retiro") {

    $("checkoutForm").innerHTML =
      customerForm(false, false) +

      `

        <div class="note">

          📍 Retiro en depósito:
          Olivos, Vicente López.

        </div>

        <button
          class="send-button"
          id="sendOrder">

          Enviar pedido por WhatsApp

        </button>

      `;

  }

  else {

    $("checkoutForm").innerHTML =
      customerForm(false, true) +

      `

        <div
          id="shippingResult"
          class="note">

          Escribí tu localidad
          para consultar el envío.

        </div>

        <button
          class="send-button"
          id="sendOrder">

          Enviar pedido por WhatsApp

        </button>

      `;

  }


  document
    .querySelectorAll(
      'input[name="delivery"]'
    )
    .forEach(input => {

      input.addEventListener(
        "change",
        renderCheckoutForm
      );

    });


  $("sendOrder")
    .addEventListener(
      "click",
      sendOrder
    );


  const locality =
    $("localidad");


  if (
    locality &&
    mode === "amba"
  ) {

    locality.addEventListener(
  "change",
  updateShippingPreview
);

locality.addEventListener(
  "input",
  updateShippingPreview
);

}


/* =========================
   DATOS DEL CLIENTE
========================= */

function customerForm(withDni, withLocality) {

  return `

    <div class="form">

      <label>
        Destinatario

        <input
          id="destinatario"
          placeholder="Nombre y apellido">
      </label>


      ${
        withDni
          ? `
            <label>
              DNI

              <input
                id="dni"
                inputmode="numeric"
                placeholder="DNI">
            </label>
          `
          : ""
      }


      <label>
        Teléfono

        <input
          id="telefono"
          inputmode="tel"
          placeholder="11 1234-5678">
      </label>


      <label>
        Dirección

        <input
          id="direccion"
          placeholder="Calle y número">
      </label>


      ${
        withLocality
          ? `
            <label>
              Localidad

              <select id="localidad">

                <option value="">
                  Seleccionar localidad...
                </option>

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

              </select>

            </label>
          `
          : ""
      }


      ${
        withDni
          ? `
            <label>
              Provincia

              <input
                id="provincia"
                placeholder="Provincia">
            </label>


            <label>
              Código Postal

              <input
                id="codigoPostal"
                placeholder="CP">
            </label>
          `
          : ""
      }


      <label>
        Observaciones

        <textarea
          id="observaciones"
          placeholder="Indicaciones para la entrega...">
        </textarea>
      </label>

    </div>

  `;

}


/* =========================
   TARIFA EN PANTALLA
========================= */

function updateShippingPreview() {

  const locality =
    $("localidad")?.value || "";

  const result =
    $("shippingResult");

  if (!result) {
    return;
  }

  if (!locality) {

    result.innerHTML = `
      🚚 <b>Envío:</b>
      Seleccioná una localidad para ver la tarifa.
    `;

    return;
  }

  const zone =
    buscarTarifa(locality);

  if (!zone) {

    result.innerHTML = `
      🚚 <b>Envío:</b>
      A cotizar por WhatsApp
    `;

    return;
  }

  const tariff =
    textoTarifa(zone);

  if (zone.tipo === "rango") {

    result.innerHTML = `
      🚚 <b>Envío ${zone.label}:</b>
      ${tariff}

      <br>

      <small>
        El valor exacto se confirma según el pedido.
      </small>
    `;

    return;
  }

  if (zone.tipo === "fijo") {

    result.innerHTML = `
      🚚 <b>Envío ${zone.label}:</b>
      ${tariff}
    `;

    return;
  }

  result.innerHTML = `
    🚚 <b>Envío:</b>
    A cotizar por WhatsApp
  `;
}

/* =========================
   VALOR DE INPUT
========================= */

function value(id) {

  return (
    document.getElementById(id)
      ?.value
      ?.trim()
    || ""
  );

}


/* =========================
   WHATSAPP
========================= */

function sendOrder() {

  if (!cartEntries().length) {

    alert(
      "Agregá al menos un producto."
    );

    return;
  }


  const delivery =
    selectedDelivery();


  const recipient =
    value("destinatario");


  const phone =
    value("telefono");


  if (!recipient || !phone) {

    alert(
      "Completá destinatario y teléfono."
    );

    return;
  }


  const sub =
    subtotal();


  const locality =
    value("localidad");


  const zone =
    delivery === "amba"
      ? buscarTarifa(locality)
      : null;


  const fixedShipping =
    delivery === "amba"
      ? importeEnvioFijo(zone)
      : null;


  let totalText =
    "A COTIZAR";


  if (fixedShipping != null) {

    totalText =
      money(
        sub + fixedShipping
      );

  }

  else if (
    delivery === "amba" &&
    zone?.tipo === "rango"
  ) {

    totalText =
      `${money(
        sub + zone.desde
      )} - ${money(
        sub + zone.hasta
      )}`;

  }

  else if (
    delivery === "retiro"
  ) {

    totalText =
      money(sub);

  }


  /* =========================
     ARMAR MENSAJE
  ========================= */

  let message =

    "🛒 *NUEVO PEDIDO — DECOSILLAS*\n" +

    "━━━━━━━━━━━━━━━━━━━━\n\n" +

    "*PRODUCTOS*\n";


  for (
    const [id, qty]
    of cartEntries()
  ) {

    const p =
      products.find(
        x => x.id === id
      );


    let productLine =
      p.price == null
        ? "Consultar"
        : money(
            p.price * qty
          );


    if (p.transferOnly) {

      productLine +=
        " — por transferencia";

    }


    message +=

      `• ${qty} × ${p.name} — ${productLine}\n`;

  }


  message +=

    "\n━━━━━━━━━━━━━━━━━━━━\n" +

    `💰 *SUBTOTAL:* ${money(sub)}\n\n` +

    "*🚚 ENTREGA*\n";


  /* AMBA */

  if (delivery === "amba") {

    message +=

      "Modalidad: Buenos Aires / AMBA\n" +

      `Localidad: ${
        locality ||
        "Sin seleccionar"
      }\n` +

      `Envío: ${
        textoTarifa(zone)
      }\n`;

  }


  /* INTERIOR */

  else if (
    delivery === "interior"
  ) {

    message +=

      "Modalidad: Interior del país\n" +

      "Envío: *A COTIZAR*\n" +

      `Localidad: ${
        locality
      }\n` +

      `Provincia: ${
        value("provincia")
      }\n` +

      `Código Postal: ${
        value("codigoPostal")
      }\n` +

      `DNI: ${
        value("dni")
      }\n`;

  }


  /* RETIRO */

  else {

    message +=

      "Modalidad: *RETIRO EN DEPÓSITO*\n" +

      "Ubicación: Olivos, Vicente López\n";

  }


  message +=

    `\n💵 *TOTAL: ${totalText}*\n` +

    "━━━━━━━━━━━━━━━━━━━━\n" +

    "*👤 DATOS DEL CLIENTE*\n" +

    `Nombre: ${
      recipient
    }\n` +

    `Teléfono: ${
      phone
    }\n` +

    `Dirección: ${
      value("direccion")
    }\n`;


  if (
    delivery === "amba"
  ) {

    message +=

      `Localidad: ${
        locality
      }\n`;

  }


  message +=

    `Observaciones: ${
      value("observaciones") ||
      "Sin observaciones"
    }\n`;


  window.open(

    `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,

    "_blank"

  );

}


/* =========================
   ABRIR / CERRAR CARRITO
========================= */

function openCart() {

  $("cartOverlay")
    .classList
    .add("open");

  $("cartOverlay")
    .setAttribute(
      "aria-hidden",
      "false"
    );

  renderCart();

}


function closeCart() {

  $("cartOverlay")
    .classList
    .remove("open");

  $("cartOverlay")
    .setAttribute(
      "aria-hidden",
      "true"
    );

}


/* =========================
   EVENTOS
========================= */

$("openCart")
  .addEventListener(
    "click",
    openCart
  );


$("closeCart")
  .addEventListener(
    "click",
    closeCart
  );


$("cartOverlay")
  .addEventListener(
    "click",
    event => {

      if (
        event.target ===
        $("cartOverlay")
      ) {

        closeCart();

      }

    }
  );


$("search")
  .addEventListener(
    "input",
    event => {

      searchText =
        event.target.value;

      renderProducts();

    }
  );


/* =========================
   INICIO
========================= */

renderCategories();
renderProducts();
updateCartCount();
