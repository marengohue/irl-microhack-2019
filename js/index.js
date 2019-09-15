const UNKNOWN_CELL  = 0;
const EMPTY_CELL    = 1;
const HIT_CELL      = 2;

const sampleFieldInfo = [
    EMPTY_CELL,      EMPTY_CELL,     EMPTY_CELL,     UNKNOWN_CELL, EMPTY_CELL,      EMPTY_CELL,     EMPTY_CELL,     UNKNOWN_CELL,
    EMPTY_CELL,      UNKNOWN_CELL,   UNKNOWN_CELL,   UNKNOWN_CELL, EMPTY_CELL,      EMPTY_CELL,     EMPTY_CELL,     UNKNOWN_CELL,
    UNKNOWN_CELL,    UNKNOWN_CELL,   HIT_CELL,       UNKNOWN_CELL, UNKNOWN_CELL,    UNKNOWN_CELL,   HIT_CELL,       UNKNOWN_CELL,
    EMPTY_CELL,      UNKNOWN_CELL,   UNKNOWN_CELL,   UNKNOWN_CELL, EMPTY_CELL,      EMPTY_CELL,     EMPTY_CELL,     UNKNOWN_CELL,
    EMPTY_CELL,      EMPTY_CELL,     EMPTY_CELL,     UNKNOWN_CELL, EMPTY_CELL,      EMPTY_CELL,     EMPTY_CELL,     UNKNOWN_CELL,
    EMPTY_CELL,      UNKNOWN_CELL,   UNKNOWN_CELL,   UNKNOWN_CELL, EMPTY_CELL,      EMPTY_CELL,     EMPTY_CELL,     UNKNOWN_CELL,
    UNKNOWN_CELL,    UNKNOWN_CELL,   HIT_CELL,       UNKNOWN_CELL, UNKNOWN_CELL,    UNKNOWN_CELL,   HIT_CELL,       UNKNOWN_CELL,
    EMPTY_CELL,      UNKNOWN_CELL,   UNKNOWN_CELL,   UNKNOWN_CELL, EMPTY_CELL,      EMPTY_CELL,     EMPTY_CELL,     UNKNOWN_CELL,
];

const X_MAX = Math.sqrt(sampleFieldInfo.length);

document.addEventListener("DOMContentLoaded", () => {
    const enemyShipsElement = document.querySelector(".game-container .enemy-ships");
    if (enemyShipsElement) {
        fillFields(enemyShipsElement, sampleFieldInfo, X_MAX);
    }
});