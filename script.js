const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Obtiene la posición actual del scroll
    const firstSection = document.querySelector('.first-section');
    
    // Ajusta la posición del background en función del scroll, dividiendo por 4 para un desplazamiento lento
    firstSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});