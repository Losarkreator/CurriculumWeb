$(document).ready(function () {
    // Manejar clics en los enlaces de la navbar
    $('.navbar a').on('click', function (event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  
      var target = $(this).attr('href'); // Obtener el valor del atributo href del enlace
      $('html, body').animate({ scrollTop: $(target).offset().top }, 100); // Desplazarse suavemente a la sección
  
      // Cambiar la URL sin recargar la página
      history.pushState(null, null, target);
    });
  
    // Manejar eventos de cambio de popstate (navegación hacia atrás/adelante)
    $(window).on('popstate', function () {
      var target = window.location.hash;
      if ($(target).length) {
        $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
      }
    });
  });
  