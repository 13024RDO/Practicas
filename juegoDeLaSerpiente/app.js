//Obtener el canvas y contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//Tamaño de cuadricula y celdas
const gridSize = 20;
const tileCount = canvas.width / gridSize;

//Iniciacion de la vibora
let snake = [{x:10,y:10}];
let dx = gridSize;
let dy = 0;

//Posicion inicial de la fruta
let fruit = {x:15, y:15};

//Funcion principal de dibujo y actualizacion del juego
function main(){
    //Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawSnake();

    moveSnake();

    drawFruit();

    if(snake[0].x === fruit.x && snake[0].y === fruit.y){
        eatFruit();
    }
}