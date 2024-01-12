
document.addEventListener('DOMContentLoaded', function() {
    const textoProgresivo = document.getElementById('texto-progresivo');
    textoProgresivo.style.animationPlayState = 'paused'; // Pausa la animación inicialmente
  
    setTimeout(() => {
      textoProgresivo.style.animationPlayState = 'running';
    }, 1000);
  });
  
