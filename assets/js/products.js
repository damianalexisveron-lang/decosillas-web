
/*
  DECOSILLAS - CATALOGO COMPLETO
  price = efectivo
  transferPrice = transferencia
  outOfStock = sin stock
*/

export const categories = [
  { id: "all", label: "Todos" },
  { id: "madera", label: "🪵 Madera Petiribí" },
  { id: "yute", label: "🧵 Línea Yute / Entrelazadas" },
  { id: "plastico", label: "🪑 Plástico" },
  { id: "oficina", label: "🎮 Oficina / Gamer" },
  { id: "metal", label: "⚙️ Metal / Tolix" },
  { id: "combos", label: "⭐ Combos" },
  { id: "lamparas", label: "💡 Lámparas" }
];

export const products = [

  // ==================================
  // MADERA PETIRIBI
  // ==================================

  {
    id: "bali",
    name: "Silla Bali",
    category: "madera",
    price: 119999,
    min: 1,
    description: "Silla de madera Petiribí.",
    images: ["bali-1.jpg", "bali-2.jpg"]
  },
  {
    id: "bali-tejida",
    name: "Silla Bali Tejida",
    category: "madera",
    price: 129999,
    min: 1,
    description: "Silla Bali tejida.",
    images: []
  },
  {
    id: "bali-tapizada",
    name: "Silla Bali Tapizada",
    category: "madera",
    price: 129999,
    min: 1,
    description: "Silla Bali tapizada de Petiribí.",
    images: []
  },
  {
    id: "palermo",
    name: "Silla Palermo",
    category: "madera",
    price: 139999,
    transferPrice: 139999,
    min: 1,
    description: "Silla Palermo.",
    images: []
  },
  {
    id: "poltrona",
    name: "Poltrona",
    category: "madera",
    price: 150000,
    min: 1,
    description: "Poltrona de Petiribí.",
    images: ["poltrona-1.jpg"]
  },
  {
    id: "poltrona-apoyabrazos",
    name: "Poltrona con Apoyabrazos",
    category: "madera",
    price: 169999,
    min: 1,
    description: "Poltrona de Petiribí con apoyabrazos.",
    images: []
  },
  {
    id: "nordico-x",
    name: "Nórdico X",
    category: "madera",
    price: 170000,
    min: 1,
    description: "Modelo Nórdico X.",
    images: []
  },
  {
    id: "nordico-ypf",
    name: "Nórdico YPF",
    category: "madera",
    price: 150000,
    min: 1,
    description: "Modelo Nórdico YPF.",
    images: []
  },
  {
    id: "moller",
    name: "Moller",
    category: "madera",
    price: 124999,
    transferPrice: 129999,
    min: 1,
    description: "Silla Moller.",
    images: []
  },
  {
    id: "moller-tapizado",
    name: "Moller Tapizado",
    category: "madera",
    price: 124999,
    min: 1,
    description: "Moller tapizado de madera Petiribí.",
    images: []
  },
  {
    id: "silla-recta",
    name: "Silla Recta",
    category: "madera",
    price: 119999,
    min: 1,
    description: "Silla Recta de Petiribí.",
    images: []
  },
  {
    id: "banqueta-recta",
    name: "Banqueta Recta",
    category: "madera",
    price: 125000,
    min: 1,
    description: "Banqueta Recta.",
    images: ["banqueta-recta-1.jpg"]
  },
  {
    id: "banqueta-bali",
    name: "Banqueta Bali",
    category: "madera",
    price: 135000,
    min: 1,
    description: "Banqueta Bali.",
    images: ["banqueta-bali-1.jpg"]
  },
  {
    id: "banqueta-bali-tejida",
    name: "Banqueta Bali Tejida",
    category: "madera",
    price: 145000,
    min: 1,
    description: "Banqueta Bali tejida.",
    images: []
  },
  {
    id: "banqueta-tractor",
    name: "Banqueta Tractor",
    category: "madera",
    price: 95000,
    transferPrice: 99999,
    min: 1,
    description: "Banqueta Tractor.",
    images: ["banqueta-tractor-1.jpg"]
  },
  {
    id: "rufina-tapizada",
    name: "Rufina Tapizada",
    category: "madera",
    price: 139999,
    min: 1,
    description: "Rufina tapizada.",
    images: []
  },
  {
    id: "ibiza-tapizada",
    name: "Ibiza Tapizada",
    category: "madera",
    price: 139999,
    min: 1,
    description: "Ibiza tapizada.",
    images: ["ibiza-tapizado-1.jpg"]
  },

  // ==================================
  // LINEA YUTE / ENTRELAZADAS
  // ==================================

  {
    id: "tulum-comun",
    name: "Silla Tulum Común",
    category: "yute",
    price: 45000,
    min: 1,
    description: "Silla Tulum común.",
    images: ["tulum-comun-1.jpg"]
  },
  {
    id: "tulum-entrelazada",
    name: "Silla Tulum Entrelazada",
    category: "yute",
    price: 49999,
    min: 1,
    description: "Silla Tulum entrelazada.",
    images: ["tulum-entrelazada-1.jpg"]
  },
  {
    id: "banqueta-tulum",
    name: "Banqueta Tulum Común",
    category: "yute",
    price: 45000,
    min: 1,
    description: "Banqueta Tulum común.",
    images: ["banqueta-tulum-1.jpg"]
  },
  {
    id: "banqueta-tulum-entrelazada",
    name: "Banqueta Tulum Entrelazada",
    category: "yute",
    price: 49999,
    min: 1,
    description: "Banqueta Tulum entrelazada.",
    images: ["banqueta-tulum-entrelazada-1.jpg"]
  },
  {
    id: "silla-lisboa",
    name: "Silla Lisboa",
    category: "yute",
    price: 49999,
    min: 1,
    description: "Silla Lisboa.",
    images: []
  },
  {
    id: "banqueta-lisboa",
    name: "Banqueta Lisboa",
    category: "yute",
    price: 49999,
    min: 1,
    description: "Banqueta Lisboa.",
    images: []
  },
  {
    id: "silla-praga",
    name: "Silla Praga",
    category: "yute",
    price: 49999,
    min: 1,
    description: "Silla Praga.",
    images: []
  },
  {
    id: "banqueta-praga",
    name: "Banqueta Praga",
    category: "yute",
    price: 49999,
    min: 1,
    description: "Banqueta Praga.",
    images: []
  },
  {
    id: "capri",
    name: "Capri",
    category: "yute",
    price: 60000,
    min: 1,
    description: "Modelo Capri.",
    images: ["capri-1.jpg"]
  },
  {
    id: "india",
    name: "India",
    category: "yute",
    price: 70000,
    min: 1,
    description: "Modelo India.",
    images: []
  },
  {
    id: "gervasoni-individual-sin-almohadon",
    name: "Gervasoni Individual sin almohadón",
    category: "yute",
    price: 79999,
    min: 1,
    description: "Individual sin almohadón.",
    images: []
  },
  {
    id: "gervasoni-individual-con-almohadon",
    name: "Gervasoni Individual con almohadón",
    category: "yute",
    price: 105000,
    min: 1,
    description: "Individual con almohadón.",
    images: []
  },
  {
    id: "gervasoni-doble-sin-almohadon",
    name: "Gervasoni Doble sin almohadón",
    category: "yute",
    price: 95000,
    min: 1,
    description: "Doble sin almohadón.",
    images: []
  },
  {
    id: "gervasoni-doble-con-almohadon",
    name: "Gervasoni Doble con almohadón",
    category: "yute",
    price: 135000,
    min: 1,
    description: "Doble con almohadón.",
    images: []
  },
  {
    id: "apoyabrazos",
    name: "Apoyabrazos",
    category: "yute",
    price: 60000,
    min: 1,
    description: "Modelo con apoyabrazos.",
    images: ["apoyabrazos-1.jpg"]
  },
  {
    id: "hamaca",
    name: "Hamaca Completa",
    category: "yute",
    price: 179999,
    min: 1,
    description: "Hamaca completa.",
    images: []
  },
  {
    id: "amsterdam",
    name: "Ámsterdam",
    category: "yute",
    price: 45000,
    min: 1,
    description: "Modelo Ámsterdam.",
    images: []
  },
  {
    id: "mecedora",
    name: "Mecedora",
    category: "yute",
    price: 160000,
    min: 1,
    description: "Mecedora.",
    images: ["mecedora-1.jpg"]
  },

  // ==================================
  // PLASTICO
  // ==================================

  {
    id: "allegra",
    name: "Silla Allegra",
    category: "plastico",
    price: 23000,
    min: 4,
    description: "Silla plástica.",
    images: ["allegra-1.jpg", "allegra-2.jpg"]
  },
  {
    id: "roma-blanca",
    name: "Silla Roma Blanca",
    category: "plastico",
    price: 23000,
    min: 4,
    description: "Silla plástica.",
    images: ["roma-blanca-1.jpg"]
  },
  {
    id: "roma-negra",
    name: "Silla Roma Negra",
    category: "plastico",
    price: 23000,
    min: 4,
    description: "Silla plástica.",
    images: ["roma-negra-1.jpg"]
  },
  {
    id: "tulip",
    name: "Silla Tulip",
    category: "plastico",
    price: 119999,
    transferPrice: 124999,
    min: 4,
    description: "Silla Tulip.",
    images: ["tulip-1.jpg"]
  },
  {
    id: "windsor",
    name: "Silla Windsor",
    category: "plastico",
    price: 119999,
    transferPrice: 124999,
    min: 4,
    description: "Silla Windsor.",
    images: []
  },
  {
    id: "eames",
    name: "Silla Eames",
    category: "plastico",
    price: 119999,
    transferPrice: 124999,
    min: 4,
    description: "Silla Eames.",
    images: ["eames-1.jpg"]
  },
  {
    id: "milan",
    name: "Silla Milán",
    category: "plastico",
    price: 119999,
    transferPrice: 124999,
    min: 4,
    description: "Silla Milán.",
    images: ["milan-1.jpg"]
  },
  {
    id: "positano",
    name: "Silla Positano",
    category: "plastico",
    price: 120000,
    min: 4,
    description: "Silla Positano.",
    images: ["positano-1.jpg"]
  },

  // ==================================
  // OFICINA / GAMER
  // ==================================

  {
    id: "gamer-roja",
    name: "Gamer Roja",
    category: "oficina",
    price: 119999,
    transferPrice: 130000,
    min: 1,
    description: "Silla gamer.",
    images: ["gamer-roja-1.jpg"]
  },
  {
    id: "gamer-negra",
    name: "Gamer Negra",
    category: "oficina",
    price: 120000,
    transferPrice: 130000,
    min: 1,
    description: "Silla gamer.",
    images: ["gamer-negra-1.jpg"]
  },
  {
    id: "baston",
    name: "Silla Bastón",
    category: "oficina",
    price: 110000,
    transferPrice: 115000,
    min: 1,
    description: "Silla Bastón.",
    images: []
  },
  {
    id: "sillon-ejecutivo-apoyapies",
    name: "Sillón Ejecutivo con Apoyapiés",
    category: "oficina",
    price: 135000,
    transferPrice: 140000,
    min: 1,
    description: "Sillón ejecutivo con apoyapiés.",
    images: []
  },
  {
    id: "sillon-ejecutivo-sin-apoyapies",
    name: "Sillón Ejecutivo sin Apoyapiés",
    category: "oficina",
    price: 119999,
    transferPrice: 129999,
    min: 1,
    description: "Sillón ejecutivo sin apoyapiés.",
    images: []
  },
  {
    id: "mesa-gamer",
    name: "Mesa Gamer",
    category: "oficina",
    price: 125000,
    transferPrice: 130000,
    min: 1,
    description: "Mesa Gamer.",
    images: []
  },

  // ==================================
  // METAL / TOLIX - SIN STOCK
  // ==================================

  {
    id: "silla-tolix",
    name: "Silla Tolix",
    category: "metal",
    price: 37000,
    min: 1,
    outOfStock: true,
    description: "Sin stock.",
    images: ["silla-tolix-1.jpg"]
  },
  {
    id: "silla-tolix-blanca",
    name: "Silla Tolix Blanca",
    category: "metal",
    price: 37000,
    min: 1,
    outOfStock: true,
    description: "Sin stock.",
    images: ["silla-tolix-blanca-1.jpg"]
  },
  {
    id: "banqueta-tolix",
    name: "Banqueta Tolix Blanca",
    category: "metal",
    price: 49999,
    min: 1,
    outOfStock: true,
    description: "Sin stock.",
    images: ["banqueta-tolix-1.jpg"]
  },

  // ==================================
  // COMBOS GERVASONI
  // ==================================

  {
    id: "combo-gervasoni-2-individuales-mesa",
    name: "Juego 2 individuales + mesa",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Dos individuales Gervasoni y mesa.",
    images: []
  },
  {
    id: "combo-gervasoni-2-individuales-doble-mesa",
    name: "Juego 2 individuales + doble + mesa",
    category: "combos",
    price: 380000,
    min: 1,
    description: "Dos individuales, un doble Gervasoni y mesa.",
    images: []
  },

  // ==================================
  // COMBOS CON TULIP
  // ==================================

  {
    id: "combo-redonda-vidrio-tulip",
    name: "Mesa redonda vidrio 1 m + 4 sillas Tulip",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa redonda de vidrio y cuatro sillas Tulip.",
    images: []
  },
  {
    id: "combo-redonda-vidrio-120-tulip",
    name: "Mesa redonda vidrio 1,20 m + 4 sillas Tulip",
    category: "combos",
    price: 270000,
    min: 1,
    description: "Mesa redonda de vidrio y cuatro sillas Tulip.",
    images: []
  },
  {
    id: "combo-redonda-blanca-tulip",
    name: "Mesa redonda blanca 1 m + 4 sillas Tulip",
    category: "combos",
    price: 260000,
    min: 1,
    description: "Mesa redonda blanca y cuatro sillas Tulip.",
    images: []
  },
  {
    id: "combo-redonda-negra-tulip",
    name: "Mesa redonda negra 1 m + 4 sillas Tulip",
    category: "combos",
    price: 270000,
    min: 1,
    description: "Mesa redonda negra y cuatro sillas Tulip.",
    images: []
  },
  {
    id: "combo-rectangular-tulip",
    name: "Mesa rectangular 1,20 m + 4 sillas Tulip",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa rectangular y cuatro sillas Tulip.",
    images: []
  },
  {
    id: "combo-rectangular-blanca-tulip",
    name: "Mesa rectangular blanca 1,20 m + 4 sillas Tulip",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa rectangular blanca y cuatro sillas Tulip.",
    images: []
  },
  {
    id: "combo-rectangular-negra-tulip",
    name: "Mesa rectangular negra 1,20 m + 4 sillas Tulip",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa rectangular negra y cuatro sillas Tulip.",
    images: []
  },

  // ==================================
  // COMBOS CON WINDSOR
  // ==================================

  {
    id: "combo-redonda-vidrio-windsor",
    name: "Mesa redonda vidrio 1 m + 4 sillas Windsor",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa redonda de vidrio y cuatro sillas Windsor.",
    images: []
  },
  {
    id: "combo-redonda-vidrio-120-windsor",
    name: "Mesa redonda vidrio 1,20 m + 4 sillas Windsor",
    category: "combos",
    price: 270000,
    min: 1,
    description: "Mesa redonda de vidrio y cuatro sillas Windsor.",
    images: []
  },
  {
    id: "combo-redonda-blanca-windsor",
    name: "Mesa redonda blanca 1 m + 4 sillas Windsor",
    category: "combos",
    price: 260000,
    min: 1,
    description: "Mesa redonda blanca y cuatro sillas Windsor.",
    images: []
  },
  {
    id: "combo-redonda-negra-windsor",
    name: "Mesa redonda negra 1 m + 4 sillas Windsor",
    category: "combos",
    price: 270000,
    min: 1,
    description: "Mesa redonda negra y cuatro sillas Windsor.",
    images: []
  },
  {
    id: "combo-rectangular-windsor",
    name: "Mesa rectangular 1,20 m + 4 sillas Windsor",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa rectangular y cuatro sillas Windsor.",
    images: []
  },
  {
    id: "combo-rectangular-blanca-windsor",
    name: "Mesa rectangular blanca 1,20 m + 4 sillas Windsor",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa rectangular blanca y cuatro sillas Windsor.",
    images: []
  },
  {
    id: "combo-rectangular-negra-windsor",
    name: "Mesa rectangular negra 1,20 m + 4 sillas Windsor",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa rectangular negra y cuatro sillas Windsor.",
    images: []
  },

  // ==================================
  // LAMPARAS
  // ==================================

  {
    id: "lampara-maria",
    name: "Lámpara María",
    category: "lamparas",
    price: 60000,
    min: 1,
    description: "Lámpara María.",
    images: []
  },
  {
    id: "lampara-diamante",
    name: "Lámpara Diamante",
    category: "lamparas",
    price: 50000,
    min: 1,
    description: "Lámpara Diamante.",
    images: []
  }

];
