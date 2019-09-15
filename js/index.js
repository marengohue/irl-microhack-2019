const shipCount = 24;
const width = 10;

function getRandomField(shipCount, width) {
    const array = Array(width * width).fill(NO_SHIP);
    while (shipCount !== 0) {
        const randomIndex = Math.floor(Math.random() * width * width);
        if (array[randomIndex] === NO_SHIP) {
            array[randomIndex] = SHIP;
            shipCount--;
        }
    }
    return array;
}

document.addEventListener("DOMContentLoaded", () => {
    const myShips = getRandomField(shipCount, width);
    const myViewOfEnemy = Array(width * width).fill(UNKNOWN_CELL);

    const enemyShips = getRandomField(shipCount, width);
    const enemyViewOfMe = Array(width * width).fill(UNKNOWN_CELL);

    const enemyShipsElement = document.querySelector(".game-container .enemy-ships");
    if (enemyShipsElement) {
        fillFields(enemyShipsElement, myViewOfEnemy, width);
    }
    
    const myShipsElement = document.querySelector(".game-container .your-ships");
    if (myShipsElement) {
        fillFields(myShipsElement, myShips, width);
    }

});