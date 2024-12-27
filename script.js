function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color; 
}
function getHexColor() {
    const letters = '0123456789ABCDEF'; 
    let color = '#'; 
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; 
    }
    return color;
}
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
}
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('white').addEventListener('click', function() {
        changeBackgroundColor('white');
    });
    document.getElementById('red').addEventListener('click', function() {
        changeBackgroundColor('red');
    });
    document.getElementById('green').addEventListener('click', function() {
        changeBackgroundColor('green'); 
    });
    document.getElementById('yellow').addEventListener('click', function() {
        changeBackgroundColor('yellow'); 
    });
    document.getElementById('blue').addEventListener('click', function() {
        changeBackgroundColor('blue');
    });
    document.getElementById('brown').addEventListener('click', function() {
        changeBackgroundColor('brown');
    });
    document.getElementById('orange').addEventListener('click', function() {
        changeBackgroundColor('orange');
    });
    document.getElementById('pink').addEventListener('click', function() {
        changeBackgroundColor('pink'); 
    });
    document.getElementById('gray').addEventListener('click', function() {
        changeBackgroundColor('gray'); 
    });
    document.getElementById('hex').addEventListener('click', function() {
        const hexColor = getHexColor(); 
        changeBackgroundColor(hexColor); 
    });
    document.getElementById('random').addEventListener('click', function() {
        const randomColor = getRandomColor();
        changeBackgroundColor(randomColor); 
    });
});