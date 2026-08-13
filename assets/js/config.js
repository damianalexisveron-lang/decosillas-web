/*
  CONFIGURACIÓN GENERAL
  El número es el mismo esquema que tenía la web actual:
  también permite enviar el pedido a distintos vendedores con ?asesor=damian
*/

export const asesores = {
  damian: "5491124909892",
  leonardo: "5491160457748",
  marcela: "5491156405357",
  estefano: "5491157828201",
  magali: "5491162472194"
};

const params = new URLSearchParams(window.location.search);
export const asesorKey = (params.get("asesor") || "damian").toLowerCase();
export const whatsapp = asesores[asesorKey] || asesores.damian;
