
document.addEventListener('DOMContentLoaded', function() {
    const textoProgresivo = document.getElementById('texto-progresivo');
    textoProgresivo.style.animationPlayState = 'paused'; // Pausa la animación inicialmente
  
    setTimeout(() => {
      textoProgresivo.style.animationPlayState = 'running';
    }, 1000);
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const scrollDiv = document.getElementById('scrollDiv');

    // Asigna un evento de desplazamiento al div
    scrollDiv.addEventListener('scroll', function () {
        // Calcula la opacidad en función del desplazamiento vertical
        const opacity = 1 - (scrollDiv.scrollTop / (scrollDiv.scrollHeight - scrollDiv.clientHeight));

        // Establece el nuevo color de fondo con opacidad
        scrollDiv.style.backgroundColor = 'rgba(0, 0, 0, ' + opacity + ')';
    });
});