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
    images: ["bali-tejida-1.jpg"]
  },
  {
    id: "bali-tapizada",
    name: "Silla Bali Tapizada",
    category: "madera",
    price: 129999,
    min: 1,
    description: "Silla Bali tapizada de Petiribí.",
    images: ["bali-tapizada-1.jpg"]
  },
  {
    id: "palermo",
    name: "Silla Palermo",
    category: "madera",
    price: 139999,
    transferPrice: 139999,
    min: 1,
    description: "Silla Palermo.",
    images: ["palermo-1.jpg"]
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
    images: ["poltrona-apoyabrazos-1.jpg"]
  },
  {
    id: "nordico-x",
    name: "Nórdico X",
    category: "madera",
    price: 170000,
    min: 1,
    description: "Modelo Nórdico X.",
    images: ["nordico-x-1.jpg"]
  },
  {
    id: "nordico-ypf",
    name: "Nórdico YPF",
    category: "madera",
    price: 150000,
    min: 1,
    description: "Modelo Nórdico YPF.",
    images: ["nordico-ypf-1.jpg"]
  },
  {
    id: "moller",
    name: "Moller",
    category: "madera",
    price: 124999,
    transferPrice: 129999,
    min: 1,
    description: "Silla Moller.",
    images: ["moller-1.jpg"]
  },
  {
    id: "moller-tapizado",
    name: "Moller Tapizado",
    category: "madera",
    price: 124999,
    min: 1,
    description: "Moller tapizado de madera Petiribí.",
    images: ["moller-tapizado-1.jpg"]
  },
  {
    id: "silla-recta",
    name: "Silla Recta",
    category: "madera",
    price: 119999,
    min: 1,
    description: "Silla Recta de Petiribí.",
    images: ["silla-recta-1.jpg"]
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
    images: ["banqueta-bali-tejida-1.jpg"]
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
    images: ["rufina-tapizada-1.jpg"]
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
    images: ["silla-lisboa-1.jpg"]
  },
  {
    id: "banqueta-lisboa",
    name: "Banqueta Lisboa",
    category: "yute",
    price: 49999,
    min: 1,
    description: "Banqueta Lisboa.",
    images: ["banqueta-lisboa-1.jpg"]
  },
  {
    id: "silla-praga",
    name: "Silla Praga",
    category: "yute",
    price: 49999,
    min: 1,
    description: "Silla Praga.",
    images: ["silla-praga-1.jpg"]
  },
  {
    id: "banqueta-praga",
    name: "Banqueta Praga",
    category: "yute",
    price: 49999,
    min: 1,
    description: "Banqueta Praga.",
    images: ["banqueta-praga-1.jpg"]
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
    images: ["india-1.jpg"]
  },
  {
    id: "gervasoni-individual-sin-almohadon",
    name: "Gervasoni Individual sin almohadón",
    category: "yute",
    price: 79999,
    min: 1,
    description: "Individual sin almohadón.",
    images: ["gervasoni-individual-sin-almohadon-1.jpg"]
  },
  {
    id: "gervasoni-individual-con-almohadon",
    name: "Gervasoni Individual con almohadón",
    category: "yute",
    price: 105000,
    min: 1,
    description: "Individual con almohadón.",
    images: ["gervasoni-individual-con-almohadon-1.jpg"]
  },
  {
    id: "gervasoni-doble-sin-almohadon",
    name: "Gervasoni Doble sin almohadón",
    category: "yute",
    price: 95000,
    min: 1,
    description: "Doble sin almohadón.",
    images: ["gervasoni-doble-sin-almohadon-1.jpg"]
  },
  {
    id: "gervasoni-doble-con-almohadon",
    name: "Gervasoni Doble con almohadón",
    category: "yute",
    price: 135000,
    min: 1,
    description: "Doble con almohadón.",
    images: ["gervasoni-doble-con-almohadon-1.jpg"]
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
    images: ["hamaca-1.jpg"]
  },
  {
    id: "amsterdam",
    name: "Ámsterdam",
    category: "yute",
    price: 45000,
    min: 1,
    description: "Modelo Ámsterdam.",
    images: ["amsterdam-1.jpg"]
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
    images: ["windsor-1.jpg"]
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
    images: ["baston-1.jpg"]
  },
  {
    id: "sillon-ejecutivo-apoyapies",
    name: "Sillón Ejecutivo con Apoyapiés",
    category: "oficina",
    price: 135000,
    transferPrice: 140000,
    min: 1,
    description: "Sillón ejecutivo con apoyapiés.",
    images: ["sillon-ejecutivo-apoyapies-1.jpg"]
  },
  {
    id: "sillon-ejecutivo-sin-apoyapies",
    name: "Sillón Ejecutivo sin Apoyapiés",
    category: "oficina",
    price: 119999,
    transferPrice: 129999,
    min: 1,
    description: "Sillón ejecutivo sin apoyapiés.",
    images: ["sillon-ejecutivo-sin-apoyapies-1.jpg"]
  },
  {
    id: "mesa-gamer",
    name: "Mesa Gamer",
    category: "oficina",
    price: 125000,
    transferPrice: 130000,
    min: 1,
    description: "Mesa Gamer.",
    images: ["mesa-gamer-1.jpg"]
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
    images: ["combo-gervasoni-2-individuales-mesa-1.jpg"]
  },
  {
    id: "combo-gervasoni-2-individuales-doble-mesa",
    name: "Juego 2 individuales + doble + mesa",
    category: "combos",
    price: 380000,
    min: 1,
    description: "Dos individuales, un doble Gervasoni y mesa.",
    images: ["combo-gervasoni-2-individuales-doble-mesa-1.jpg"]
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
    images: ["combo-redonda-vidrio-tulip-1.jpg"]
  },
  {
    id: "combo-redonda-vidrio-120-tulip",
    name: "Mesa redonda vidrio 1,20 m + 4 sillas Tulip",
    category: "combos",
    price: 270000,
    min: 1,
    description: "Mesa redonda de vidrio y cuatro sillas Tulip.",
    images: ["combo-redonda-vidrio-120-tulip-1.jpg"]
  },
  {
    id: "combo-redonda-blanca-tulip",
    name: "Mesa redonda blanca 1 m + 4 sillas Tulip",
    category: "combos",
    price: 260000,
    min: 1,
    description: "Mesa redonda blanca y cuatro sillas Tulip.",
    images: ["combo-redonda-blanca-tulip-1.jpg"]
  },
  {
    id: "combo-redonda-negra-tulip",
    name: "Mesa redonda negra 1 m + 4 sillas Tulip",
    category: "combos",
    price: 270000,
    min: 1,
    description: "Mesa redonda negra y cuatro sillas Tulip.",
    images: ["combo-redonda-negra-tulip-1.jpg"]
  },
  {
    id: "combo-rectangular-tulip",
    name: "Mesa rectangular 1,20 m + 4 sillas Tulip",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa rectangular y cuatro sillas Tulip.",
    images: ["combo-rectangular-tulip-1.jpg"]
  },
  {
    id: "combo-rectangular-blanca-tulip",
    name: "Mesa rectangular blanca 1,20 m + 4 sillas Tulip",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa rectangular blanca y cuatro sillas Tulip.",
    images: ["combo-rectangular-blanca-tulip-1.jpg"]
  },
  {
    id: "combo-rectangular-negra-tulip",
    name: "Mesa rectangular negra 1,20 m + 4 sillas Tulip",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa rectangular negra y cuatro sillas Tulip.",
    images: ["combo-rectangular-negra-tulip-1.jpg"]
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
    images: ["combo-redonda-vidrio-windsor-1.jpg"]
  },
  {
    id: "combo-redonda-vidrio-120-windsor",
    name: "Mesa redonda vidrio 1,20 m + 4 sillas Windsor",
    category: "combos",
    price: 270000,
    min: 1,
    description: "Mesa redonda de vidrio y cuatro sillas Windsor.",
    images: ["combo-redonda-vidrio-120-windsor-1.jpg"]
  },
  {
    id: "combo-redonda-blanca-windsor",
    name: "Mesa redonda blanca 1 m + 4 sillas Windsor",
    category: "combos",
    price: 260000,
    min: 1,
    description: "Mesa redonda blanca y cuatro sillas Windsor.",
    images: ["combo-redonda-blanca-windsor-1.jpg"]
  },
  {
    id: "combo-redonda-negra-windsor",
    name: "Mesa redonda negra 1 m + 4 sillas Windsor",
    category: "combos",
    price: 270000,
    min: 1,
    description: "Mesa redonda negra y cuatro sillas Windsor.",
    images: ["combo-redonda-negra-windsor-1.jpg"]
  },
  {
    id: "combo-rectangular-windsor",
    name: "Mesa rectangular 1,20 m + 4 sillas Windsor",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa rectangular y cuatro sillas Windsor.",
    images: ["combo-rectangular-windsor-1.jpg"]
  },
  {
    id: "combo-rectangular-blanca-windsor",
    name: "Mesa rectangular blanca 1,20 m + 4 sillas Windsor",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa rectangular blanca y cuatro sillas Windsor.",
    images: ["combo-rectangular-blanca-windsor-1.jpg"]
  },
  {
    id: "combo-rectangular-negra-windsor",
    name: "Mesa rectangular negra 1,20 m + 4 sillas Windsor",
    category: "combos",
    price: 250000,
    min: 1,
    description: "Mesa rectangular negra y cuatro sillas Windsor.",
    images: ["combo-rectangular-negra-windsor-1.jpg"]
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
    images: ["lampara-maria-1.jpg"]
  },
  {
    id: "lampara-diamante",
    name: "Lámpara Diamante",
    category: "lamparas",
    price: 50000,
    min: 1,
    description: "Lámpara Diamante.",
    images: ["lampara-diamante-1.jpg"]
  }

];
