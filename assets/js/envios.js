export const envioAMBA = {
  capital: {
    label: "Capital Federal",
    localidades: ["Ciudad de Buenos Aires", "CABA", "Capital Federal"],
    tipo: "fijo",
    desde: 22000,
    hasta: 22000
  },

  zonaNorte: {
    label: "Zona Norte",
    localidades: [
      "Vicente López", "Olivos", "Florida", "Munro", "La Lucila",
      "Martínez", "San Isidro", "San Fernando", "Tigre",
      "Malvinas Argentinas", "San Martín", "San Miguel",
      "José C. Paz", "Pilar", "Escobar"
    ],
    tipo: "fijo",
    desde: 22000,
    hasta: 22000
  },

  oeste: {
    label: "Merlo / Moreno / Ituzaingó / Morón",
    localidades: ["Merlo", "Moreno", "Ituzaingó", "Morón"],
    tipo: "rango",
    desde: 35000,
    hasta: 40000
  },

  ezeiza: {
    label: "Ezeiza",
    localidades: ["Ezeiza"],
    tipo: "rango",
    desde: 35000,
    hasta: 45000
  },

  estebanEcheverria: {
    label: "Esteban Echeverría",
    localidades: ["Esteban Echeverría", "Monte Grande"],
    tipo: "rango",
    desde: 35000,
    hasta: 45000
  },

  quilmes: {
    label: "Quilmes",
    localidades: ["Quilmes"],
    tipo: "fijo",
    desde: 25000,
    hasta: 25000
  },

  berazategui: {
    label: "Berazategui",
    localidades: ["Berazategui"],
    tipo: "fijo",
    desde: 30000,
    hasta: 30000
  },

  zonaSur: {
    label: "Resto Zona Sur",
    localidades: [
      "Avellaneda", "Lanús", "Lomas de Zamora",
      "Almirante Brown", "Florencio Varela",
      "Ensenada", "La Matanza"
    ],
    tipo: "fijo",
    desde: 22000,
    hasta: 22000
  },

  laPlata: {
    label: "La Plata",
    localidades: ["La Plata"],
    tipo: "cotizar"
  }
};

export function buscarTarifa(localidad) {
  const buscada = (localidad || "").trim().toLowerCase();

  for (const zona of Object.values(envioAMBA)) {
    if (
      zona.localidades.some(
        localidadZona => localidadZona.toLowerCase() === buscada
      )
    ) {
      return zona;
    }
  }

  return null;
}

export function textoTarifa(zona) {
  if (!zona || zona.tipo === "cotizar") {
    return "A cotizar por WhatsApp";
  }

  if (zona.tipo === "fijo") {
    return `$${zona.desde.toLocaleString("es-AR")}`;
  }

  return `$${zona.desde.toLocaleString("es-AR")} - $${zona.hasta.toLocaleString("es-AR")}`;
}

export function importeEnvioFijo(zona) {
  if (zona?.tipo === "fijo") {
    return zona.desde;
  }

  return null;
}
