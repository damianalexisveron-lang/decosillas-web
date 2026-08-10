# DecoSillas — nueva web

Esta versión está preparada para subir directamente a GitHub y desplegar en Vercel como sitio estático.

## Estructura

```text
decosillas/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── app.js
    │   ├── products.js
    │   ├── envios.js
    │   └── config.js
    └── img/
        └── (fotos)
```

## Cómo cargar fotos

Las fotos van en:

`assets/img/`

Los nombres deben coincidir con `images` dentro de `assets/js/products.js`.

Ejemplo:

```js
images: ["bali-1.jpg", "bali-2.jpg", "bali-3.jpg"]
```

Entonces subís:

```text
assets/img/bali-1.jpg
assets/img/bali-2.jpg
assets/img/bali-3.jpg
```

No hace falta que todas tengan 3 fotos. La web soporta 1, 2, 3 o más fotos por producto.

## GitHub

1. Entrá a GitHub.
2. Abrí el repositorio actual de DecoSillas.
3. Si querés reemplazar la web completa, hacé una copia/backup del repositorio antes.
4. Subí `index.html`.
5. Subí la carpeta `assets` completa.
6. Reemplazá los archivos que ya existan con el mismo nombre.
7. No borres las fotos viejas todavía: podemos reutilizarlas y renombrarlas progresivamente.

## Vercel

Si Vercel ya está conectado al repositorio, al hacer `push` a la rama principal debería generar un nuevo deploy automáticamente.

No hace falta configurar un servidor ni una base de datos para esta versión.

## WhatsApp

`assets/js/config.js` mantiene el sistema de asesores que ya tenía la web.

Ejemplos:

`https://decosillas-web.vercel.app/?asesor=damian`

`https://decosillas-web.vercel.app/?asesor=leonardo`

El pedido se envía al WhatsApp correspondiente.

## Envíos

Las tarifas están separadas en:

`assets/js/envios.js`

Así se pueden cambiar sin tocar el resto de la web.

Configuración actual:

- Capital Federal: $22.000
- Zona Norte: $22.000
- Merlo / Moreno / Ituzaingó / Morón: $35.000–$40.000
- Ezeiza: $35.000–$45.000
- Esteban Echeverría: $35.000–$45.000
- Resto Zona Sur: $22.000
- La Plata: a cotizar por WhatsApp

Los rangos no se suman como un único valor: se muestran como rango y el vendedor confirma el importe exacto.

## Regla de plástico

Los productos configurados como plástico con `min: 4` tienen compra mínima de 4 unidades.

## Importante

Esta es la estructura inicial. Antes de publicar definitivamente hay que terminar de revisar:
- productos restantes del Excel,
- categorías corregidas,
- precios pendientes,
- fotos,
- tarifas/localidades AMBA,
- combos,
- número/asesor final.
