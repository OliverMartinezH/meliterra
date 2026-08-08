---
name: MeliTerra
description: Landing page de servicios de terreno en Melipilla — movimientos de tierra, caminos, agricultura, paisajismo y riego.
colors:
  primary: "#27652f"
  primary-hover: "#1c4a22"
  primary-soft: "#e6efe4"
  accent: "#e8912d"
  accent-dark: "#d67e1c"
  accent-deep: "#b45309"
  secondary: "#8a5a2b"
  bg: "#faf8f4"
  bg-alt: "#f1ede4"
  surface: "#ffffff"
  surface-2: "#f1ede4"
  ink: "#1f2a1f"
  heading: "#17351f"
  ink-muted: "#5a5f52"
  border: "#e5e0d2"
  border-soft: "#c6dcc4"
  earth: "#8a5a2b"
  ochre: "#b98a3e"
  hero-media: "#e3e6dc"
  wa: "#25d366"
  wa-dark: "#1fb457"
  on-accent: "#1f2a1f"
  footer: "#1c2a20"
  footer-ink: "#c7d4cc"
  footer-heading: "#eef5ef"
  footer-sub: "#9db3a5"
  footer-hover: "#7cc986"
  footer-ink-muted: "#93a79a"
  shadow-warm: "rgba(50, 42, 22, .10)"
  shadow-warm-sm: "rgba(50, 42, 22, .08)"
  shadow-neutral: "rgba(0, 0, 0, .06)"
  shadow-neutral-lg: "rgba(0, 0, 0, .10)"
  accent-glow: "rgba(232, 145, 45, .35)"
  accent-glow-lg: "rgba(232, 145, 45, .45)"
  accent-glow-sm: "rgba(232, 145, 45, .30)"
  caption-gradient: "rgba(12, 20, 14, .82)"
  footer-rule: "rgba(255, 255, 255, .12)"
  focus-ring: "rgba(232, 145, 45, .35)"
typography:
  scale:
    xs: "0.72rem"
    sm: "0.82rem"
    md: "0.85rem"
    md-sm: "0.95rem"
    base: "1rem"
    p: "1.05rem"
    lead: "1.06rem"
    lead-lg: "1.08rem"
    icon: "1.1rem"
    check: "1.15rem"
    icon-xl: "1.2rem"
    card-title: "1.3rem"
    brand: "1.35rem"
    float-icon-mobile: "1.55rem"
    float-icon: "1.7rem"
    quote-text: "1.15rem"
    gallery-caption-mobile: "0.82rem"
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.2rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.6rem, 3vw, 2.4rem)"
    fontWeight: 600
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.3rem"
    fontWeight: 700
  body:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    letterSpacing: "0.02em"
rounded:
  focus: "0.25rem"
  sm: "0.5rem"
  control: "0.55rem"
  contact: "0.85rem"
  md: "0.9rem"
  lg: "1rem"
  xl: "1.1rem"
  hero: "1.25rem"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  section: "clamp(4rem, 8vw, 7rem)"
  section-mobile: "3.25rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.75rem"
    fontWeight: "700"
    shadow: "0 6px 20px {colors.accent-glow}"
  button-primary-hover:
    backgroundColor: "{colors.accent-dark}"
    textColor: "{colors.on-accent}"
    shadow: "0 10px 26px {colors.accent-glow-lg}"
  button-outline:
    textColor: "{colors.accent-deep}"
    rounded: "{rounded.pill}"
    borderColor: "{colors.accent-deep}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    borderColor: "{colors.border}"
    padding: "1.25rem 1.5rem 1.5rem"
    shadow: "0 4px 20px {colors.shadow-neutral}"
  input:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.control}"
    borderColor: "{colors.border}"
    padding: "0.65rem 0.9rem"
  hero-badge:
    backgroundColor: "color-mix(in srgb, {colors.surface} 88%, transparent)"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.1rem"
---

# MeliTerra — Diseño

## Overview

Landing de conversión (modo *Persuade*) para una empresa local de servicios de terreno en Melipilla. Categoría: landing profesional estándar de empresas de maquinaria/movimiento de tierra, ejecutada con alta fidelidad. La tesis es convertir "movimientos de tierra" en confianza y en una cotización de un solo mensaje por WhatsApp. Verde de marca (elección del usuario, vinculante) sobre tierra crema cálida; títulos serif editorial (Fraunces) sobre cuerpo limpio y moderno (Manrope); el naranja mostaza es el acento exclusivo de los CTAs de cotización. Tema claro único.

## Colors

- **Verde primario** `#27652f`: el color vinculante. Lleva checks, íconos, badges, enlaces y acentos de marca.
- **Naranja mostaza** `#e8912d`: EXCLUSIVO de CTAs "Cotizar"/"Enviar por WhatsApp" (fondo de botón primario y relleno al hover del outline). Hover `#d67e1c`. Texto sobre naranja siempre `#1f2a1f` (contraste ≥ 4.5:1 verificado).
- **Naranja profundo** `#b45309`: borde y texto del botón outline de las tarjetas en reposo (contraste ≥ 4.5:1 sobre crema), que al hover rellena con el acento.
- **Tierra crema** `#faf8f4` (fondo) y `#f1ede4` (secciones alternas, inputs), blanco `#ffffff` para superficies y tarjetas.
- **Tinta**: `#1f2a1f` cuerpo, `#17351f` títulos, `#5a5f52` secundario (nunca gris puro).
- **Café/tierra** `#8a5a2b` y ocre `#b98a3e`: acento cálido residual (footer, matices).
- **WhatsApp** `#25d366` (`#1fb457` hover): exclusivo para canales WhatsApp (botón flotante, íconos de contacto). El float NO usa el acento naranja: es la marca del canal.
- Footer `#1c2a20` con tinta `#c7d4cc` y acentos `#7cc986`.

## Typography

- **Display/títulos**: Fraunces 700 (títulos 600), sin mayúsculas forzadas ni letter-spacing. H1 `clamp(2.2–3.5rem)` con `text-wrap: balance`, H2 `clamp(1.6–2.4rem)`, H3 `1.3rem`.
- **Cuerpo**: Manrope 400/500/600/700/800, `line-height 1.6`. Leads con `max-width 60ch` y tinta secundaria. Párrafos `1.05rem`.
- **Etiquetas/lista menor**: Manrope 600, `0.9rem`, `letter-spacing 0.02em`.
- Sin eyebrows/kickers sobre títulos: el título se sostiene solo.

## Layout

- **Contenedor**: Bootstrap `.container` estándar; secciones con `padding-block: clamp(4rem, 8vw, 7rem)` (3.25rem en móvil).
- **Hero dividido** (lg+): panel crema a la izquierda con título, lead, checklist de 5 servicios con checks verdes y CTA WhatsApp naranja; foto a full-bleed a la derecha con badge de ubicación flotante. En móvil el texto va primero, foto después. Sin overlay sobre la foto: el texto no va sobre la imagen.
- **Franja de cobertura**: lista en flex-wrap centrada bajo el hero (Melipilla + 5 comunas).
- **Servicios**: 1 feature editorial (imagen + cuerpo + CTA outline naranja) y grilla de 4 cards con imagen `aspect-ratio 4/3`.
- **Nosotros**: texto + lista de valores + tarjeta de cita (comilla).
- **Contacto**: lista de canales + formulario → WhatsApp.
- **Breakpoints**: Bootstrap (lg 992px, sm 576px); `scroll-margin-top 76px` en anclas; sticky header con blur. Ritmo alterno de fondos entre `#faf8f4` y `#f1ede4` al hacer scroll.

## Elevation & Depth

- Sombras suaves: `0 4px 20px rgba(0,0,0,.06)` (card), `0 10px 30px rgba(50,42,22,.10)` (elevación/hover). En hover de cards `0 10px 30px rgba(0,0,0,.10)`.
- CTAs naranja con glow propio: `0 6px 20px rgba(232,145,45,.35)` y sombra mayor al hover.
- Header sticky con `backdrop-filter: blur(14px)` y `border-bottom` al hacer scroll (efecto específico, no decoración).
- Badge del hero sobre foto con `backdrop-filter: blur(10px)` + `color-mix` 88% superficie.
- Sin sombras duras de cero-blur ni halos de color.

## Shapes

- Radios: inputs/buttons `0.5–0.55rem`, badges/tarjetas `0.9rem`, cards de servicio/feature/form `1–1.1rem`, hero `1.25rem`.
- Botones CTA en **pill** (`999px`).
- Íconos de círculo (checklist, contactos, quote-mark): `border-radius: 50%`.
- Sin bordes laterales de color en tarjetas ni callouts.

## Components

- **Botón primario (CTA)**: naranja `#e8912d`, texto `#1f2a1f` 700, pill, hover `#d67e1c` con elevación `-2px` y glow mayor.
- **Botón outline**: borde y texto naranja, pill, hover relleno naranja con texto oscuro.
- **Botón link**: verde subrayado (para acciones secundarias de navegación, no cotización).
- **Tarjetas de servicio**: imagen `aspect-ratio 4/3` + cuerpo + CTA outline; hover eleva 4px con sombra mayor.
- **Formulario**: inputs sobre `#f1ede4`, focus con anillo `rgba(232,145,45,.35)`; submit abre WhatsApp con mensaje armado.
- **WhatsApp flotante**: círculo `#25d366` fijo abajo-derecha con pulso, excluido del motion si `prefers-reduced-motion`. Conserva el verde del canal.
- **Galería**: imágenes `aspect-ratio 4/3` con caption en gradiente oscuro y "Imágenes referenciales."
- **Imágenes**: todas con `filter: saturate(1.05) contrast(1.02)`.

## Do's and Don'ts

- **Do**: el verde de marca en checks, íconos y acentos. El naranja mostaza SOLO en CTAs de cotización. Íconos de Bootstrap Icons (un solo trazo). Títulos serif Fraunces. Fotografías reales de terreno. Mensajes WhatsApp prellenados. Alt text descriptivo en español.
- **Do**: mantener contraste ≥ 4.5:1 en texto y botones (naranja siempre con texto oscuro).
- **Don't**: inventar testimonios, precios, años de trayectoria o "maquinaria propia" no confirmada.
- **Don't**: eyebrows/kickers sobre títulos, gradientes de texto, bordes laterales de color, sombras duras, glass decorativo, mono como disfraz técnico.
- **Don't**: usar el naranja fuera de CTAs de cotización, ni el verde WhatsApp fuera de canales WhatsApp.
- **Don't**: volver a mayúsculas condensadas en los títulos ni reintroducir un tema oscuro.
