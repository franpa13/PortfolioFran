
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
    // Obtener referencias a elementos del DOM
    let btn_menu = document.getElementById('btn_menu');
    let nav = document.getElementById('nav__ul');
    let bnClose = document.getElementById("btnClose");
    let menuAbierto = false;
    
 
    // Agregar evento de clic al botón de la hamburguesa
    btn_menu.addEventListener('click', function () {
        // Alternar la visibilidad del menú al hacer clic en el botón
        if (menuAbierto === false) {
            nav.style.display = 'none';
            btn_menu.style.display = "block";
        } else {
            nav.style.display = 'block';
            btn_menu.style.display = "none";
        }

        // Cambiar el estado de menuAbierto
        menuAbierto = !menuAbierto;
    });

    // Agregar evento de clic al botón de cerrar
    bnClose.addEventListener("click", () => {
        nav.style.display = "none";
        btn_menu.style.display = "block";

        // Cambiar el estado de menuAbierto
        menuAbierto = !menuAbierto;
    });
});
