document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll("section");
  var scrollPosition = window.scrollY || window.pageYOffset;

  function updateURL() {
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        var sectionId = section.getAttribute("id");
        history.pushState(null, null, "#" + sectionId);
      }
    });
  }

  // Manejar el evento de desplazamiento
  window.addEventListener("scroll", function () {
    scrollPosition = window.scrollY || window.pageYOffset;
    updateURL();
  });

  // Manejar el evento de carga de la página
  window.addEventListener("load", function () {
    updateURL();
  });

  // Manejar clics en los enlaces de la navbar
  document.querySelectorAll('.navbar a').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var targetOffset = targetElement.offsetTop;

        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });

        history.pushState(null, null, "#" + targetId);
      }
    });
  });
});
