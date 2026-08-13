/*
  CATÁLOGO DE PRODUCTOS
  Regla: los productos de plástico que correspondan tienen min: 4.
*/

export const categories = [
  { id: "all", label: "Todos" },
  { id: "madera", label: "🪵 Madera" },
  { id: "yute", label: "🧵 Línea Yute / Entrelazadas" },
  { id: "plastico", label: "🪑 Plástico" },
  { id: "metal", label: "⚙️ Metal / Tolix" },
  { id: "oficina", label: "🎮 Oficina / Gamer" },
  { id: "combos", label: "⭐ Combos" },
  { id: "lamparas", label: "💡 Lámparas" }
];

export const products = [

  // =========================
  // PLÁSTICO
  // =========================

  { id:"allegra", name:"Silla Allegra", category:"plastico", price:23000, min:4, description:"Silla plástica. Disponible según colores en stock.", images:["allegra-1.jpg","allegra-2.jpg"] },

  { id:"roma-blanca", name:"Silla Roma Blanca", category:"plastico", price:23000, min:4, description:"Silla plástica.", images:["roma-blanca-1.jpg"] },

  { id:"roma-negra", name:"Silla Roma Negra", category:"plastico", price:23000, min:4, description:"Silla plástica.", images:["roma-negra-1.jpg"] },

  { id:"tulip-x4", name:"Pack Tulip x4", category:"plastico", price:110000, min:1, description:"Pack de 4 sillas.", images:["tulip-1.jpg"] },

  { id:"tulip-x6", name:"Pack Tulip x6", category:"plastico", price:160000, min:1, description:"Pack de 6 sillas.", images:["tulip-1.jpg"] },

  { id:"eames", name:"Eames", category:"plastico", price:105000, min:4, description:"Silla Eames. Precio por transferencia.", images:["eames-1.jpg"], transferOnly:true },

  { id:"milan", name:"Milan", category:"plastico", price:105000, min:4, description:"Silla Milan. Precio por transferencia.", images:["milan-1.jpg"], transferOnly:true },

  { id:"positano", name:"Silla Positano x4", category:"plastico", price:120000, min:1, description:"Pack x4.", images:["positano-1.jpg"] },

  { id:"turin", name:"Silla Turin x4", category:"plastico", price:120000, min:1, description:"Pack x4.", images:["turin-1.jpg"] },

  { id:"sicilia", name:"Silla Sicilia x4", category:"plastico", price:120000, min:1, description:"Pack x4.", images:["sicilia-1.jpg"] },

  { id:"amalfi", name:"Silla Amalfi x4", category:"plastico", price:120000, min:1, description:"Pack x4.", images:["amalfi-1.jpg"] },


  // =========================
  // MADERA
  // =========================

  { id:"bali", name:"Silla Bali", category:"madera", price:90000, min:1, description:"Silla de madera.", images:["bali-1.jpg","bali-2.jpg"] },

  { id:"poltrona", name:"Poltrona", category:"madera", price:150000, min:1, description:"Poltrona.", images:["poltrona-1.jpg"] },

  { id:"nordico", name:"Nórdico", category:"madera", price:170000, min:1, description:"Modelo nórdico.", images:["nordico-1.jpg"] },

  { id:"milan-madera", name:"Milan", category:"madera", price:100000, min:1, description:"Producto clasificado en Madera.", images:["milan-madera-1.jpg"] },

  { id:"banqueta-bali", name:"Banqueta Bali", category:"madera", price:120000, min:1, description:"Producto clasificado en Madera.", images:["banqueta-bali-1.jpg"] },

  { id:"banqueta-tractor", name:"Banqueta Tractor", category:"madera", price:95000, min:1, description:"Producto clasificado en Madera.", images:["banqueta-tractor-1.jpg"] },

  { id:"moler-entrelazado", name:"Moler entrelazado", category:"madera", price:110000, min:1, description:"Producto clasificado en Madera.", images:["moler-entrelazado-1.jpg"] },

  { id:"ypf", name:"YPF", category:"madera", price:160000, min:1, description:"Producto clasificado en Madera.", images:["ypf-1.jpg"] },


  // =========================
  // LÍNEA YUTE / ENTRELAZADAS
  // =========================

  { id:"mallorca", name:"Mallorca", category:"yute", price:50000, min:1, description:"Línea Yute / Entrelazadas.", images:["mallorca-1.jpg"] },

  { id:"mecedora", name:"Mecedora", category:"yute", price:150000, min:1, description:"Línea Yute / Entrelazadas.", images:["mecedora-1.jpg"] },

  { id:"tulum-comun", name:"Tulum común", category:"yute", price:40000, min:1, description:"Silla Tulum.", images:["tulum-comun-1.jpg"] },

  { id:"tulum-entrelazada", name:"Tulum entrelazada", category:"yute", price:45000, min:1, description:"Silla Tulum entrelazada.", images:["tulum-entrelazada-1.jpg"] },

  { id:"banqueta-tulum", name:"Banqueta Tulum", category:"yute", price:45000, min:1, description:"Banqueta Tulum.", images:["banqueta-tulum-1.jpg"] },

  { id:"banqueta-tulum-entrelazada", name:"Banqueta Tulum entrelazada", category:"yute", price:45000, min:1, description:"Banqueta Tulum entrelazada.", images:["banqueta-tulum-entrelazada-1.jpg"] },

  { id:"banqueta-recta", name:"Banqueta recta", category:"yute", price:125000, min:1, description:"Banqueta.", images:["banqueta-recta-1.jpg"] },

  { id:"banqueta-comun", name:"Banqueta común", category:"yute", price:40000, min:1, description:"Banqueta.", images:["banqueta-comun-1.jpg"] },

  { id:"entrelazada", name:"Banqueta entrelazada", category:"yute", price:45000, min:1, description:"Entrelazada.", images:["entrelazada-1.jpg"] },

  { id:"apoyabrazos", name:"Apoyabrazos", category:"yute", price:60000, min:1, description:"Modelo con apoyabrazos.", images:["apoyabrazos-1.jpg"] },

  { id:"gervasoni", name:"Gervasoni entrelazada", category:"yute", price:98000, min:1, description:"Modelo entrelazado.", images:["gervasoni-1.jpg"] },

  { id:"gervasoni-doble", name:"Gervasoni doble", category:"yute", price:100000, min:1, description:"Modelo doble.", images:["gervasoni-doble-1.jpg"] },

  { id:"capri", name:"Capri", category:"yute", price:60000, min:1, description:"Modelo Capri.", images:["capri-1.jpg"] },

  { id:"banqueta-galicia", name:"Banqueta Galicia", category:"yute", price:45000, min:1, description:"Banqueta.", images:["banqueta-galicia-1.jpg"] },

  { id:"bali-entrelazada", name:"Bali entrelazada", category:"yute", price:125000, min:1, description:"Modelo entrelazado.", images:["bali-entrelazada-1.jpg"] },

  { id:"ibiza-tapizado", name:"Ibiza tapizado", category:"yute", price:150000, min:1, description:"Modelo tapizado.", images:["ibiza-tapizado-1.jpg"] },

  { id:"moler-entrelazado-yute", name:"Moler entrelazado", category:"yute", price:110000, min:1, description:"Modelo entrelazado.", images:["moler-1.jpg"] },


  // =========================
  // METAL / TOLIX
  // =========================

  { id:"banqueta-tolix", name:"Banqueta Tolix", category:"metal", price:45000, min:1, description:"Banqueta Tolix.", images:["banqueta-tolix-1.jpg"] },

  { id:"silla-tolix", name:"Silla Tolix", category:"metal", price:37000, min:1, description:"Silla Tolix.", images:["silla-tolix-1.jpg"] },

  { id:"silla-tolix-blanca", name:"Silla Tolix Blanca", category:"metal", price:35000, min:1, description:"Silla Tolix blanca.", images:["silla-tolix-blanca-1.jpg"] },

  { id:"silla-tolix-brillante", name:"Silla Tolix Brillante", category:"metal", price:37000, min:1, description:"Silla Tolix brillante.", images:["silla-tolix-brillante-1.jpg"] },


  // =========================
  // OFICINA / GAMER
  // =========================

  { id:"gamer-roja", name:"Gamer Roja", category:"oficina", price:115000, min:1, description:"Silla gamer. Precio por transferencia.", images:["gamer-roja-1.jpg"], transferOnly:true },

  { id:"gamer-negra", name:"Gamer Negra", category:"oficina", price:125000, min:1, description:"Silla gamer.", images:["gamer-negra-1.jpg"] },

  { id:"silla-escritorio", name:"Silla Escritorio", category:"oficina", price:80000, min:1, description:"Silla de escritorio.", images:["silla-escritorio-1.jpg"] },


  // =========================
  // COMBOS
  // =========================

  { id:"combo-mesa-sillas", name:"Combo mesa + sillas", category:"combos", price:null, min:1, description:"Combos de mesa y sillas. Precio según combinación.", images:["combo-mesa-sillas-1.jpg"] },


  // =========================
  // LÁMPARAS
  // =========================

  { id:"lamparas", name:"Lámparas artesanales", category:"lamparas", price:null, min:1, description:"Consultar modelos y precios.", images:["lamparas-1.jpg"] }

];
