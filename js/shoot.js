/*
Field 4x4.
2 matrix (arrays) = playerField & enemyField.

Every arr looks like:
[0, 0, 0, 0,
 0, 0, 0, 0,
 0, 0, 0, 0,
 0, 0, 0, 0]

U need to convert x,y values into arrays index FIRST.
*/
const NO_SHIP = 0;
const SHIP = 1;
const KILLED_SHIP = 2;

function shoot(playerField, enemyField, x, y) {
    const index = xyToIndex(x, y, 4); 

    if (enemyField[index] === NO_SHIP) {
        playerField[index] = EMPTY_CELL;
        return false;
    } else if (enemyField[index] === SHIP) {
        playerField[index] = HIT_CELL;
        enemyField[index] = KILLED_SHIP;
        return true;
    }
}