# Proyecto MeliTerra

> **Reglas de desarrollo:** Ver [[AGENTS]]
> **Estado actual:** Ver [[progress]]
> **Historial de decisiones:** Ver [[history]]

---

## Visión

Landing page estática para MeliTerra, empresa de fumigaciones y servicios para el hogar y el terreno en Melipilla, Chile. Presencia web profesional con SEO local optimizado.

## Objetivo del producto

Generar leads calificados para fumigaciones y jardinería (paisajismo, áreas verdes y riego tecnificado) en la zona de Melipilla y alrededores.

## Actores

| Rol | Qué puede hacer |
|-----|-----------------|
| **Visitante** | Ver servicios, galería, cotizar por correo o WhatsApp |
| **Propietario** | Actualizar contenido, agregar fotos, revisar tráfico |

## Reglas de negocio

* Cotización por correo (formulario y CTAs) con botón flotante de WhatsApp
* Servicios: fumigaciones (control de pulgas, garrapatas y arañas en interior y exterior) y jardinería (paisajismo, mantención de áreas verdes y riego tecnificado)
* Zona de cobertura: Melipilla, María Pinto, Curacaví, Alhué, El Monte, Talagante
* Imágenes referenciales del trabajo en terreno
* SEO local con geo-localización en "Melipilla"

## Restricciones

* Sin backend ni base de datos (estática)
* Sin autenticación (público)
* Formulario de contacto que envía la cotización por correo (`mailto:`)
* Contenido solo en español (es_CL)

## Módulos

| Módulo | Archivo | Contenido |
|--------|---------|-----------|
| Landing | `index.html` | Hero, servicios, nosotros, CTA galería, contacto |
| Galería | `galeria.html` | Fotos en terreno |
| Assets | `assets/` | CSS, JS, imágenes (WebP+JPG) |

## Roadmap

1. ~~Landing page con servicios y contacto~~ ✅
2. ~~SEO técnico (schema, meta, sitemap)~~ ✅
3. ~~Galería de fotos optimizadas~~ ✅
4. ~~Sección de videos comprimidos~~ (eliminada el 09/11/2026)
5. Google Business Profile
6. Blog SEO (artículos de servicio)
7. Backlinks locales (directorio, municipalidad, gremios)
8. Optimización de rendimiento (script.js reflow)
