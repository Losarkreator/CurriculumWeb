let currentLanguage = 'es';

function changeLanguage(newLanguage) {
  currentLanguage = newLanguage;
  updateContent();
}

function updateContent() {
  // Realiza una solicitud para cargar el archivo JSON
  fetch('translations.json')
    .then(response => response.json())
    .then(translations => {
      // Utiliza las traducciones del archivo JSON para actualizar el contenido
      const translatedText = translations[currentLanguage];

      // Itera sobre las claves del objeto translatedText
      Object.keys(translatedText).forEach(key => {
        // Actualiza el contenido de los elementos con el ID correspondiente
        const element = document.getElementById(key);
        if (element) {
          element.textContent = translatedText[key];
        }
      });
    })
    .catch(error => console.error('Error cargando las traducciones', error));
}

// Inicializa el contenido al cargar la página
document.addEventListener('DOMContentLoaded', updateContent);
