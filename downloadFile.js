function downloadFile() {
    // URL del archivo que deseas descargar
    var archivoURL = "CVCarlosTurrion2024ES.pdf";

    // Crea un elemento <a> invisible
    var link = document.createElement('a');
    link.href = archivoURL;

    // Asigna un nombre al archivo descargado
    link.download = 'CVCarlosTurrion2024ES.pdf';

    // Agrega el enlace al DOM
    document.body.appendChild(link);

    // Simula un clic en el enlace para iniciar la descarga
    link.click();

    // Elimina el enlace del DOM
    document.body.removeChild(link);
}
