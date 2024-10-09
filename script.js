const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; 
    const firstSection = document.querySelector('body');
    
    // Solo aplica el efecto si el ancho es mayor o igual a 1000px
    if (window.innerWidth >= 50) {
        // Ajusta este valor para modificar la velocidad del efecto parallax
        firstSection.style.backgroundPositionY = `${-scrollPosition * 0.1}px`;
    } else {
        // Restablece la posición de fondo en pantallas pequeñas
        firstSection.style.backgroundPositionY = 'top';
    }
});