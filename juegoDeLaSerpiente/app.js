const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5, snakeY = 10;

const changFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
};

const initGame = () => { 
    changFoodPosition(); 
    let htmlMarkup = `<div class="food" style="grid-area:${foodY} / ${foodX}"></div>`;
    htmlMarkup += `<div class="head" style="grid-area:${snakeY} / ${snakeX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
};


initGame();
