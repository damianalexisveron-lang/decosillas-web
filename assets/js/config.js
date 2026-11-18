/* Configuración de asesores de DecoSillas.
   El catálogo usa ?asesor=damian|leonardo|marcela|estefano|franco */
export const asesores = {
  damian: "5491135757756",
  leonardo: "5491160457748",
  marcela: "5491125075328",
  estefano: "5491157828201",
  franco: "5491128444439"
};

const params = new URLSearchParams(window.location.search);
export const asesorKey = (params.get("asesor") || "damian").toLowerCase();
export const whatsapp = asesores[asesorKey] || asesores.damian;
