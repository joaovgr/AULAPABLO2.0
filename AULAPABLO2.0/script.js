window.onload = function(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");


let x = 0;
let y = 0;
const squareSize = 50;
const speed = 2;

function drawSquare() {

    // limpa canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    //desenhar quadrado

    context.fillStyle = '#FF0000';
    context.fillRect(x, y, squareSize, squareSize);

}

function updatePosition() {

    x += speed;
   
    //se atingir as bordas reseta a posição

    if (x + squareSize > canvas.width) {
        x = 0;
    }

}

function gameLoop() {

    updatePosition();
    drawSquare();
    requestAnimationFrame(gameLoop);

}

// inicia a animação
gameLoop ();

}

