
document.addEventListener('DOMContentLoaded', function () {
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

document.addEventListener('DOMContentLoaded', function () {
    let botonMenu = document.getElementById("btn-abrir");
    let btnCerrar = document.getElementById("btn-close");
    let navBar = document.getElementById("nav__grande__dos");

    // Inicialmente oculto y fuera de la pantalla hacia la izquierda
    navBar.style.display = "none";
    navBar.style.left = "-100%";

    // Agregar un pequeño retraso para permitir que el navegador aplique el cambio inicial
    setTimeout(() => {
        navBar.style.transition = "left 0.3s ease";
    }, 10);

    botonMenu.addEventListener("click", () => {
        // Muestra el menú deslizándolo hacia la derecha
        navBar.style.display = "block";
        navBar.style.left = "0";
        botonMenu.style.display = "none";
    });

    btnCerrar.addEventListener("click", () => {
        // Oculta el menú deslizándolo hacia la izquierda
        navBar.style.left = "-100%";
        botonMenu.style.display = "block";
    });
});


