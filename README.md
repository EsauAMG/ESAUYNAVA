# Portafolio en Astro

Sitio generado estáticamente con Astro. Conserva la portada, los dos proyectos reales, siete demos y las rutas independientes de restaurante, lavandería e inmobiliaria.

## Desarrollo

- `npm ci`: instalar las versiones del lockfile.
- `npm run dev`: iniciar el servidor de Astro.
- `npm run build`: generar el sitio en `dist/`.
- `npm run preview`: revisar el resultado de producción.

## Organización

- `src/pages/`: portada y rutas de demos en archivos `.astro`.
- `src/layouts/BaseLayout.astro`: estructura HTML, SEO y recursos comunes.
- `src/components/`: cabecera y pie reutilizables.
- `src/data/site.js`: marca provisional Trazo, contacto, precios, proyectos y demos.
- `src/data/properties.js`: catálogo ficticio.
- `src/lib/render.js`: composición del contenido durante la compilación. El contenido llega al navegador como HTML completo, sin esperar a JavaScript.
- `src/lib/cards.js`: vistas de tarjetas compartidas con los filtros interactivos.
- `src/scripts/interactions.js`: menú, filtros, formularios, calculadora y diálogos. No reconstruye las páginas en el navegador.
- `src/styles/global.css`: estilos y colores, incluidas las proporciones corregidas de las capturas.
- `public/assets/`: capturas reales y fotografías ilustrativas locales.

`dist/` es salida generada; edita los archivos de `src/` y vuelve a compilar. Astro no necesita un servidor en producción y puede publicarse en Sites, Cloudflare Pages o cualquier alojamiento estático.

## Configuración pendiente

Marca y precios provisionales. Configura `whatsapp` con un número internacional real y `email` en `src/data/site.js`. Cambiar la configuración requiere recompilar. La cotización descarga un TXT local; no envía ni guarda datos en un servidor. Con correo configurado ofrece abrir la aplicación de correo; para envío directo se necesita un proveedor o backend. Las demos preparan mensajes sin contactar números ficticios ni confirmar pedidos, reservas o visitas.

## Fuentes del contenido

Proyectos verificados el 28 de octubre de 2026: QuadNodeDX (consultoría Odoo, soporte, infraestructura y ciberseguridad) y YomiBook (búsqueda, diario, lecturas y colecciones). Capturas reales, sin datos de cuenta. Sin métricas, tecnologías ni resultados comerciales atribuidos.

Cuatro muestras externas verificadas: Casa Norte completa y esencial, RAI experiencia y menú. Se distinguen de los proyectos comerciales reales y de los sitios oficiales.

Las fotos de las demos son ilustrativas de Unsplash y no representan propiedades o negocios reales. Ver `image-sources.json`. Las fuentes de Google tienen alternativas del sistema.

## SEO y navegación por páginas

Rutas principales: /, /proyectos/, /demos/, /servicios/, /paquetes/, /proceso/, /preguntas-frecuentes/ y /contacto/. Los metadatos y rutas se editan en src/data/pages.js; el contenido reutilizado se selecciona en src/lib/sections.js.

Cada página tiene título y descripción propios, URL canónica, vista previa social, un H1 y enlaces internos. BaseLayout genera WebSite, WebPage/CollectionPage/ContactPage y BreadcrumbList sin datos comerciales inventados. Las demos ficticias y el error 404 usan noindex; la galería de demos sí es indexable. /sitemap.xml y /robots.txt se generan con las rutas y el dominio de astro.config.mjs. Al cambiar de dominio, actualiza site en esa configuración y recompila.

Ejecuta npm run build y npm run check:seo antes de publicar. El comprobador revisa encabezados, metadatos únicos, enlaces locales, recursos, JSON-LD, canonical y sitemap.

Pendiente del propietario: confirmar marca, contacto y precios definitivos; conectar un dominio propio y verificarlo en Google Search Console para enviar el sitemap. No se ha creado una propiedad de Search Console ni enviado el sitemap a una cuenta. El trabajo técnico no garantiza posiciones en buscadores.
