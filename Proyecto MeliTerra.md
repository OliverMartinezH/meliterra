# Proyecto MeliTerra

> **Reglas de desarrollo:** Ver [[AGENTS]]
> **Estado actual:** Ver [[progress]]
> **Historial de decisiones:** Ver [[history]]

---

## Visión

Landing page estática para MeliTerra, empresa de servicios agrícolas y movimiento de tierra en Melipilla, Chile. Presencia web profesional con SEO local optimizado.

## Objetivo del producto

Generar leads qualificados a través de WhatsApp para servicios de movimiento de tierra, reparación de caminos, arado, paisajismo y riego tecnificado en la zona de Melipilla y alrededores.

## Actores

| Rol | Qué puede hacer |
|-----|-----------------|
| **Visitante** | Ver servicios, galería, videos, cotizar por WhatsApp |
| **Propietario** | Actualizar contenido, agregar fotos/videos, revisar tráfico |

## Reglas de negocio

* WhatsApp es el canal principal de contacto (botón flotante + formulario)
* Servicios: movimiento de tierra, reparación de caminos privados, arado y preparación de tierras agrícolas, paisajismo y jardinería, riego tecnificado
* Zona de cobertura: Melipilla, María Pinto, Curacaví, Alhué, El Monte, Talagante
* Imágenes y videos reales del trabajo en terreno
* SEO local con geo-localización en "Melipilla"

## Restricciones

* Sin backend ni base de datos (estática)
* Sin autenticación (público)
* Sin formulario de cotización propio (redirige a WhatsApp)
* Contenido solo en español (es_CL)

## Módulos

| Módulo | Archivo | Contenido |
|--------|---------|-----------|
| Landing | `index.html` | Hero, servicios, nosotros, CTA galería, contacto |
| Galería | `galeria.html` | 17 fotos + 6 videos en terreno |
| Assets | `assets/` | CSS, JS, imágenes (WebP+JPG), videos (MP4) |

## Roadmap

1. ~~Landing page con servicios y contacto~~ ✅
2. ~~SEO técnico (schema, meta, sitemap)~~ ✅
3. ~~Galería de fotos optimizadas~~ ✅
4. ~~Sección de videos comprimidos~~ ✅
5. Google Business Profile
6. Blog SEO (artículos de servicio)
7. Backlinks locales (directorio, municipalidad, gremios)
8. Optimización de rendimiento (script.js reflow)
