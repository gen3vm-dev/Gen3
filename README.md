# GEN 3 — Facilitadores Tecnológicos

Landing page de **GEN 3**, empresa de servicios tecnológicos. Automatizaciones, páginas web, sistemas a medida, IA aplicada e integraciones.

Sitio estático (HTML + CSS + JavaScript, sin build) publicado con GitHub Pages.

## Estructura

```
.
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/
│       ├── mark.svg
│       └── favicon.svg
├── robots.txt
├── sitemap.xml
└── README.md
```

## Ver en local

Abrir `index.html` en el navegador. Para probar el formulario y las rutas relativas con un servidor:

```powershell
cd "C:\Users\jmachado\Desktop\Automatizacion procesos\WebGen3"
python -m http.server 8000
```

Luego abrir `http://localhost:8000`.

## Editar el contacto

El sitio usa:

- Email: `gen3vm@gmail.com`
- WhatsApp: vacío (el link se oculta hasta configurarlo)

Para cambiarlo:

1. En `index.html`, reemplazar `gen3vm@gmail.com` por el email nuevo.
2. En `assets/js/main.js`, cambiar `CONTACT_EMAIL` y, si corresponde, `WHATSAPP_NUMBER` (formato `5493531234567`, sin `+` ni espacios).

El formulario no usa backend: arma un `mailto:` con los datos y abre el cliente de correo del visitante.

## Publicación

El sitio está pensado para GitHub Pages desde la rama `main`, carpeta raíz.

URL: `https://gen3vm-dev.github.io/Gen3/`

## Notas de contenido

- Tono: directo, profesional, sin promesas infladas.
- Servicios destacados: automatizaciones, páginas web, sistemas a medida, IA aplicada, integraciones y acompañamiento.
- El “combo que más sale” es Web + Automatización + CRM.
- Los tres socios se presentan por rol (estrategia, ingeniería, producto), sin nombres ni fotos.
