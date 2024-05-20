const button = document.getElementById('escurridizo');

button.addEventListener('mouseover', () => {
    // Obtener el tamaño del botón y de la ventana
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Generar nuevas coordenadas aleatorias asegurándose de que el botón permanezca dentro de la ventana
    const newLeft = Math.random() * (windowWidth - buttonWidth);
    const newTop = Math.random() * (windowHeight - buttonHeight);
    
    // Aplicar las nuevas coordenadas al botón
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
});
