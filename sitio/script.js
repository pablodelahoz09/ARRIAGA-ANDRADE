/* Arriaga Andrade — lo mínimo indispensable.
   Dos cosas, ninguna decorativa:
   1. marcar en el menú de escritorio la sección que se está leyendo;
   2. mantener al día el año del pie.
   No hay animaciones aquí: el único movimiento del sitio está en el CSS. */

(function () {
  "use strict";

  var anio = document.getElementById("pie-anio");
  if (anio) anio.textContent = String(new Date().getFullYear());

  var enlaces = document.querySelectorAll(".nav__lista a[href^='#']");
  if (!enlaces.length || !("IntersectionObserver" in window)) return;

  var porId = {};
  var secciones = [];

  enlaces.forEach(function (enlace) {
    var seccion = document.querySelector(enlace.getAttribute("href"));
    if (!seccion) return;
    porId[seccion.id] = enlace;
    secciones.push(seccion);
  });

  var visibles = new Set();

  function marcar() {
    var actual = null;
    for (var i = 0; i < secciones.length; i++) {
      if (visibles.has(secciones[i].id)) { actual = secciones[i].id; break; }
    }
    for (var id in porId) {
      if (id === actual) porId[id].setAttribute("aria-current", "true");
      else porId[id].removeAttribute("aria-current");
    }
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) visibles.add(entrada.target.id);
      else visibles.delete(entrada.target.id);
    });
    marcar();
  }, { rootMargin: "-25% 0px -60% 0px" });

  secciones.forEach(function (seccion) { observador.observe(seccion); });
})();
