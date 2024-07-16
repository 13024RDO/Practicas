const playBoard = document.querySelector(".play-board");

let foodX, foodY;

const changFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
};

const initGame = () => {
    changFoodPosition();  // Llama a la función para cambiar la posición de la comida
    let htmlMarkup = `<div class="food" style="grid-area:${foodY} / ${foodX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
};

initGame();
