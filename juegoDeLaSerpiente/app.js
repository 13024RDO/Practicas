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

    //Dibujar la vibora
    drawSnake();

    //Mover la vibora
    moveSnake();

    //Dibujar la fruta
    drawFruit();

    //Colision con la fruta
    if(snake[0].x === fruit.x && snake[0].y === fruit.y){
        eatFruit();
    }

    //Colision con la pared
    if(snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height)
        {
    gameOver();
    }

//Colision con si mismo 
for(let i=1; i< snake.length; i++){
    if(snake[0].x===snake[i].x && snake[0].y === snake[i].y){
        gameOver();
    }
}

//Llamar a la funcion de nuevo despues de un intervalo
setTimeout(main,100)

}

//Funcion dibijar a la vibora
function drawSnake(){
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'darkgreen';
    snake.forEach(segment =>{
        ctx.fillRect(segment.x*gridSize,segment.y*gridSize,gridSize,gridSize);
        ctx.stokeRect(segment.x*gridSize,segment.y*gridSize,gridSize,gridSize);
    
    });
}


//Funcion para mover a la vibora
function moveSnake(){
    const head = {x:snake[0].x + dx, y:snake[0].y + dy};
    snake.unshift(head);//Agrega nueva cabeza
    if(snake[0].x === fruit.x && snake[0].y === fruit.y){
        //No remover la cola si comio la fruta
    }else{
        snake.pop();//Remover la cola
    }
}


//Funcion para dibujar la fruta
function drawFruit(){
    ctx.fillStyle = 'red';
    ctx.fillRect(fruit.x*gridSize,fruit.y*gridSize,gridSize,gridSize);
}