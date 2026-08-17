# AGENTS.md — Reglas para el agente en MeliTerra

> **Contexto funcional:** Ver [[Proyecto MeliTerra]]
> **Estado actual:** Ver [[progress]]
> **Historial de decisiones:** Ver [[history]]

---

## 1. Contexto del proyecto

MeliTerra es una landing page estática para una empresa de servicios agrícolas en Melipilla, Chile. No hay backend, base de datos ni autenticación. Todo el contenido vive en archivos HTML/CSS/JS estáticos, desplegados en GitHub Pages con dominio personalizado `meliterra.cl`.

## 2. Principios arquitectónicos

* **Simplicity First (KISS):** Sin frameworks complejos. HTML + CSS + JS vanilla + Bootstrap CDN.
* **Performance First:** Imágenes comprimidas, WebP con fallback, `fetchpriority` en LCP.
* **SEO First:** Schema.org, meta tags completos, sitemap, geo-localización en H1/alt/captions.
* **Mobile First:** Responsive con Bootstrap, diseño pensado para móvil primero.

## 3. Stack

* **Runtime:** HTML5 + CSS3 + vanilla JavaScript
* **Framework CSS:** Bootstrap 5.3.3 (CDN)
* **Fonts:** Google Fonts (Manrope + Fraunces)
* **Hosting:** GitHub Pages
* **Domain:** `meliterra.cl` (custom domain)
* **Database:** None (estática)
* **Testing:** Manual (sin framework)
* **Auth:** None (público)

## 4. Reglas obligatorias

* Toda imagen debe tener `alt` con keyword + ubicación ("Melipilla")
* Todo enlace externo debe tener `target="_blank" rel="noopener"`
* Videos comprimidos ≤ 5MB cada uno
* Imágenes: WebP + JPG fallback en `<picture>`
* `fetchpriority="high"` en hero image (LCP)
* Schema.org LocalBusiness en index.html
* Schema.org CollectionPage en galería
* Canonical URL apuntando a `meliterra.cl`

## 5. Testing Guidelines

* Framework: **Ninguno (manual)**
* Verificar: Core Web Vitals en PageSpeed Insights
* Verificar: Schema.org con Google Rich Results Test
* Verificar: Sitemap en Google Search Console
* Verificar: Responsive en Chrome DevTools

## 6. Convenciones de código

* **Idioma:** Todo el contenido en español (es_CL)
* **Archivos:** Nombres descriptivos en inglés, minúsculas, guiones (`arado-campo-01.jpg`)
* **Imágenes:** Resize a 800px width, JPEG quality 78%, WebP quality 78%
* **Videos:** H.264, CRF 28-32, 360p-480p, `faststart` flag
* **CSS:** Custom en `assets/css/styles.css`, variables CSS para colores
* **JS:** Vanilla en `assets/js/script.js`, sin dependencias
* **Nav links:** Usar `#seccion` para intra-page, `pagina.html` para inter-page

## 7. Git

| Setting | Value |
|---------|-------|
| Auto-commit on session end | Yes |
| Pull before commit | Yes |
| Branch | `main` |
| Remote | `origin` → `https://github.com/OliverMartinezH/meliterra.git` |

## 8. Reglas de modificación del proyecto

* Contexto funcional → [[Proyecto MeliTerra]]; estado → [[progress]]; historial de decisiones → [[history]].
* Los archivos de gobernanza solo se actualizan después de la aprobación del usuario.
* No commitear archivos sensibles (.env, keys, tokens).
* No usar `git add .` — siempre archivos específicos.
