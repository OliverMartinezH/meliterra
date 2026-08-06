---
name: MeliTerra
description: Landing page de servicios de terreno en Melipilla — movimientos de tierra, caminos, agricultura, paisajismo y riego.
colors:
  primary: "#27652f"
  primary-hover: "#1e4f25"
  primary-dark: "#2b8638"
  primary-soft: "#e6efe4"
  cream: "#f7f4ee"
  surface: "#ffffff"
  surface-2: "#efeadf"
  ink: "#1d2a20"
  heading: "#17351f"
  ink-muted: "#5a6a5f"
  border: "#e2ded2"
  earth: "#7c5226"
  ochre: "#b98a3e"
  wa: "#25d366"
  wa-dark: "#1fb457"
  surface-dark: "#0f1712"
  surface-2-dark: "#16211b"
  ink-dark: "#e6ece7"
  heading-dark: "#eef5ef"
  ink-muted-dark: "#a3b3a9"
  border-dark: "#24352a"
  footer: "#12201a"
  footer-ink: "#c7d4cc"
  footer-hover: "#7cc986"
  footer-ink-muted: "#93a79a"
  outline-dark-text: "#5ec46d"
  outline-dark-border: "#3fa84c"
  focus-ring: "rgba(63, 168, 76, .55)"
  wa-shadow: "rgba(0, 0, 0, .28)"
  on-primary: "#ffffff"
typography:
  scale:
    xs: "0.72rem"
    sm: "0.85rem"
    md: "0.9rem"
    base: "1rem"
    md-lg: "1.05rem"
    lead: "1.06rem"
    lead-lg: "1.08rem"
    icon: "1.1rem"
    icon-lg: "1.15rem"
    icon-xl: "1.2rem"
    card-title: "1.35rem"
    float-icon: "1.55rem"
    float-icon-lg: "1.7rem"
    gallery-caption-mobile: "0.82rem"
    lead-sm: "0.95rem"
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "0.01em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.9rem, 3vw, 2.6rem)"
    fontWeight: 700
    letterSpacing: "0.01em"
    textTransform: "uppercase"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    letterSpacing: "0.01em"
    textTransform: "uppercase"
  body:
    fontFamily: "IBM Plex Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    letterSpacing: "0.02em"
rounded:
  xs: "0.25rem"
  sm: "0.5rem"
  control: "0.55rem"
  contact: "0.85rem"
  md: "0.9rem"
  quote: "1rem"
  lg: "1.1rem"
  xl: "1.25rem"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  section: "4.5rem"
  section-mobile: "3.25rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "0.6rem 1.25rem"
    fontWeight: "600"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-outline:
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    borderColor: "{colors.primary}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    borderColor: "{colors.border}"
    padding: "1.5rem"
  input:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.sm}"
    borderColor: "{colors.border}"
    padding: "0.65rem 0.9rem"
  hero-badge:
    backgroundColor: "color-mix(in srgb, {colors.surface} 88%, transparent)"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.1rem"
---

# MeliTerra — Diseño

## Overview

Landing de conversión (modo *Persuade*) para una empresa local de servicios de terreno en Melipilla. Categoría: landing profesional estándar de empresas de maquinaria/movimiento de tierra, ejecutada con alta fidelidad. La tesis es convertir "movimientos de tierra" en confianza y en una cotización de un solo mensaje por WhatsApp. Verde de marca (elección del usuario, vinculante), tierra crema y tinta verde profunda; titulares condensados en mayúsculas (Barlow Condensed) sobre un cuerpo industrial limpio (IBM Plex Sans). Tema claro/oscuro completo, ambos con el mismo lenguaje.

## Colors

- **Verde primario** `#27652f` (claro) / `#2b8638` (oscuro): el color vinculante. Lleva todas las acciones primarias, checks, íconos y acentos de marca.
- **Tierra crema** `#f7f4ee` (fondo claro) y **verde negro** `#0f1712` (fondo oscuro).
- **Superficies**: `#ffffff` / `#efeadf` en claro; `#16211b` / `#1b2921` en oscuro.
- **Tinta**: `#1d2a20` cuerpo, `#17351f` títulos; oscuro `#e6ece7` / `#eef5ef`.
- **Secundario atintado**: `#5a6a5f` (claro) / `#a3b3a9` (oscuro), nunca gris puro.
- **Tierra/ocre** `#7c5226` / `#b98a3e`: acento cálido residual (footer, matices).
- **WhatsApp** `#25d366` (`#1fb457` hover): exclusivo para canales WhatsApp (CTAs, botón flotante, íconos).
- Texto sobre primario siempre `#ffffff` (contraste ≥ 4.5:1 verificado en ambos temas).

## Typography

- **Display/títulos**: Barlow Condensed 700, mayúsculas, `letter-spacing 0.01em`, con `text-wrap: balance` en el H1. Escala: H1 `clamp(2.4–3.6rem)`, H2 `clamp(1.9–2.6rem)`, H3 `1.35rem`.
- **Cuerpo**: IBM Plex Sans 400/500/600, `line-height 1.6`. Leads con `max-width 60ch` y tinta secundaria.
- **Etiquetas/lista menor**: IBM Plex Sans 600, `0.9rem`, `letter-spacing 0.02em`.
- Sin eyebrows/kickers sobre títulos: el título se sostiene solo.

## Layout

- **Contenedor**: Bootstrap `.container` estándar; secciones con `padding 4.5rem` vertical (3.25rem en móvil).
- **Hero dividido** (lg+): panel crema a la izquierda con título, lead, checklist de 5 servicios y CTA WhatsApp; foto a full-bleed a la derecha con badge de ubicación flotante. En móvil el texto va primero, foto después.
- **Franja de cobertura**: lista en flex-wrap centrada bajo el hero (Melipilla + 5 comunas).
- **Servicios**: 1 feature editorial (imagen + cuerpo + CTA) y grilla de 4 tarjetas con imagen.
- **Nosotros**: texto + lista de valores + tarjeta de cita (comilla).
- **Contacto**: lista de canales + formulario → WhatsApp. 
- **Breakpoints**: Bootstrap (lg 992px, sm 576px); `scroll-margin-top 76px` en anclas; sticky header con blur.

## Elevation & Depth

- Sombras suaves con offset y blur: `0 10px 30px rgba(23,40,27,.10)` (card), `0 4px 14px rgba(23,40,27,.08)` (sm). En oscuro, sombras negras más profundas.
- Header sticky con `backdrop-filter: blur(14px)` y `border-bottom` al hacer scroll (efecto específico, no decoración).
- Badge del hero sobre foto con `backdrop-filter: blur(10px)` + `color-mix` 88% superficie.
- Sin sombras duras de cero-blur ni halos de color.

## Shapes

- Radios: inputs/buttons `0.5rem`, badges/tarjetas `0.9rem`, tarjetas de servicio/feature/form `1.1rem`, hero `1.25rem`.
- Íconos de círculo (checklist, contactos, quote-mark): `border-radius: 50%`.
- Sin bordes laterales de color en tarjetas ni callouts.

## Components

- **Botón primario**: verde `#27652f`, texto blanco, hover `#1e4f25`. En oscuro `#2b8638` → `#23702f`.
- **Botón outline**: borde verde, texto verde; en oscuro borde `#3fa84c` y texto `#5ec46d` (contraste).
- **Toggle de tema**: botón circular con ícono sol/luna, `localStorage` + `prefers-color-scheme`, aplicado antes del paint.
- **Tarjetas de servicio**: imagen `230px` + cuerpo + CTA "Cotizar este servicio" (link WhatsApp con mensaje prellenado por servicio); hover eleva 5px.
- **Formulario**: inputs sobre `surface-2`, focus con anillo verde `--bs-focus-ring-color`; submit abre WhatsApp con mensaje armado (nombre, teléfono, servicio, mensaje).
- **WhatsApp flotante**: círculo `#25d366` fijo abajo-derecha con pulso, excluido del motion si `prefers-reduced-motion`.
- **Galería**: imágenes `240px` (170px móvil) con caption en gradiente oscuro y "Imágenes referenciales."

## Do's and Don'ts

- **Do**: el verde de marca en toda acción primaria. Íconos de Bootstrap Icons (un solo trazo). Titulares condensados en mayúsculas. Fotografías reales de terreno. Mensajes WhatsApp prellenados. Alt text descriptivo en español.
- **Do**: mantener contraste ≥ 4.5:1 en texto y botones en ambos temas.
- **Don't**: inventar testimonios, precios, años de trayectoria o "maquinaria propia" no confirmada.
- **Don't**: eyebrows/kickers sobre títulos, gradientes de texto, bordes laterales de color, sombras duras, glass decorativo, mono como disfraz técnico.
- **Don't**: cambiar el verde de marca; es el color vinculante del cliente.
