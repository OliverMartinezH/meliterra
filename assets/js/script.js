/* ============================================================
   MeliTerra — script
   Navbar, reveal, scrollspy y formulario → WhatsApp
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  /* ---------- Navbar scrolled ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Reveal al hacer scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
    setTimeout(function () {
      revealEls.forEach(function (el) {
        if (!el.classList.contains("visible") && el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("visible");
        }
      });
    }, 1200);
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Scrollspy suave ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".navbar-nav .nav-link"));
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute("href")); })
    .filter(Boolean);

  function spy() {
    var pos = window.scrollY + 120;
    var current = null;
    sections.forEach(function (sec) {
      if (pos >= sec.offsetTop) current = sec.getAttribute("id");
    });
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", spy, { passive: true });
  spy();

  /* ---------- Formulario → WhatsApp ---------- */
  var form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nombre = document.getElementById("fNombre").value.trim();
      var telefono = document.getElementById("fTelefono").value.trim();
      var servicio = document.getElementById("fServicio").value;
      var mensaje = document.getElementById("fMensaje").value.trim();
      var hint = form.querySelector(".form-hint");

      if (!nombre || !telefono) {
        hint.textContent = "Ingresa tu nombre y un teléfono para contactarte.";
        return;
      }

      var body = "Hola MeliTerra, quiero cotizar un servicio.%0A%0A"
        + "Nombre: " + encodeURIComponent(nombre) + "%0A"
        + "Teléfono: " + encodeURIComponent(telefono) + "%0A"
        + "Servicio: " + encodeURIComponent(servicio)
        + (mensaje ? "%0AMensaje: " + encodeURIComponent(mensaje) : "");

      window.open("https://wa.me/56998122138?text=" + body, "_blank", "noopener");
      hint.textContent = "Se abrió WhatsApp con tu mensaje. ¡Gracias por escribirnos!";
    });
  }
})();
