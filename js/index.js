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

function getRandomPoint(enemyViewOfMe) {
    while (true) {
        const randomIndex = Math.floor(Math.random() * width * width);
        if (enemyViewOfMe[randomIndex] === UNKNOWN_CELL) {
            return indexToXy(randomIndex, width);
        }
    }
}

function isGameOver(playerField) {
    return !playerField.some(cell => cell === SHIP);
}

document.addEventListener("DOMContentLoaded", () => {
    const myShips = getRandomField(shipCount, width);
    const myViewOfEnemy = Array(width * width).fill(UNKNOWN_CELL);

    const enemyShips = getRandomField(shipCount, width);
    const enemyViewOfMe = Array(width * width).fill(UNKNOWN_CELL);

    renderGameField(myShips, myViewOfEnemy);

    const shootButton = document.querySelector("#shoot-button");
    if (shootButton) {
        shootButton.addEventListener("click", () => {
            if (lastChecked) {
                const x = parseInt(lastChecked.classList[2].split('-')[1]);
                const y = parseInt(lastChecked.classList[3].split('-')[1]);
                shoot(myViewOfEnemy, enemyShips, x, y, width);
                if (isGameOver(enemyShips)) {
                    shootButton.remove();
                    alert('YOU WIN!');
                }

                const point = getRandomPoint(enemyViewOfMe);
                shoot(enemyViewOfMe, myShips, point[0], point[1], width);
                if (isGameOver(enemyShips)) {
                    shootButton.remove();
                    alert('YOU LOSE!');
                }

                renderGameField(myShips, myViewOfEnemy);
            }
        })
    }
});