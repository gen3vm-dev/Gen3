/* =========================================================
   GEN 3 — main.js
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Configuración de contacto ---------- */
  var CONTACT_EMAIL = "gen3vm@gmail.com";
  var WHATSAPP_NUMBER = ""; // Ej.: "5493531234567" (sin +, sin espacios)

  /* ---------- Año del footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Header con estado al hacer scroll ---------- */
  var header = document.querySelector(".site-header");
  var lastScrollState = false;

  function updateHeader() {
    if (!header) return;
    var isScrolled = window.scrollY > 12;
    if (isScrolled !== lastScrollState) {
      header.classList.toggle("is-scrolled", isScrolled);
      lastScrollState = isScrolled;
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* ---------- Menú mobile ---------- */
  var menuToggle = document.getElementById("menuToggle");
  var mobileMenu = document.getElementById("mobileMenu");
  var menuOpen = false;

  function setMenu(open) {
    if (!menuToggle || !mobileMenu) return;
    menuOpen = open;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    mobileMenu.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      setMenu(!menuOpen);
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuOpen) setMenu(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860 && menuOpen) setMenu(false);
    });
  }

  /* ---------- Links de contacto ---------- */
  document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
    var href = link.getAttribute("href") || "";
    if (href.indexOf("gen3vm@gmail.com") !== -1) {
      link.setAttribute("href", "mailto:" + CONTACT_EMAIL);
    }
  });

  var whatsappLinks = document.querySelectorAll("[data-whatsapp]");
  whatsappLinks.forEach(function (link) {
    if (WHATSAPP_NUMBER) {
      link.setAttribute(
        "href",
        "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent("Hola GEN 3, quiero contarles sobre un proyecto.")
      );
      link.hidden = false;
    } else {
      link.hidden = true;
    }
  });

  /* ---------- Formulario de contacto ---------- */
  var form = document.getElementById("contactForm");
  var status = form ? form.querySelector(".form-status") : null;

  function setStatus(message) {
    if (status) status.textContent = message;
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var data = new FormData(form);
      var nombre = String(data.get("nombre") || "").trim();
      var email = String(data.get("email") || "").trim();
      var empresa = String(data.get("empresa") || "").trim();
      var servicio = String(data.get("servicio") || "").trim();
      var mensaje = String(data.get("mensaje") || "").trim();

      if (!nombre || !email || !mensaje) {
        setStatus("Completá nombre, email y mensaje para poder responderte.");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setStatus("Revisá el email: parece que falta algo.");
        return;
      }

      var subject = "Consulta GEN 3 — " + (servicio || "Proyecto") + " — " + nombre;
      var body = [
        "Nombre: " + nombre,
        "Email: " + email,
        "Empresa: " + (empresa || "—"),
        "Servicio: " + (servicio || "—"),
        "",
        mensaje
      ].join("\n");

      setStatus("Abriendo tu cliente de correo con la consulta lista…");
      window.location.href =
        "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealElements = document.querySelectorAll("[data-reveal]");

  if (!reduceMotion && "IntersectionObserver" in window && revealElements.length) {
    document.documentElement.classList.add("reveal-ready");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );

    revealElements.forEach(function (element) {
      observer.observe(element);
    });

    // Fallback: si algo no se observó (o el navegador se comporta raro),
    // mostrarlo después de un tiempo razonable.
    window.setTimeout(function () {
      revealElements.forEach(function (element) {
        if (!element.classList.contains("is-visible")) {
          element.classList.add("is-visible");
        }
      });
    }, 2200);
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("is-visible");
    });
  }

  /* ---------- FAQ: cerrar las otras al abrir una ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });
})();
