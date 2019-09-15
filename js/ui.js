let lastChecked = null;

function triggerCell(event) {
    if (!event.target.checked) {
        return;
    }

    if (lastChecked) {
        lastChecked.checked = false;
    }
    lastChecked = event.target;
}

function renderGameField(myShips, myViewOfEnemy) {
    const enemyShipsElement = document.querySelector(".game-container .enemy-ships");
    if (enemyShipsElement) {
        while (enemyShipsElement.hasChildNodes()) {
            enemyShipsElement.removeChild(enemyShipsElement.lastChild);
        }
        fillFields(enemyShipsElement, myViewOfEnemy, width);
    }
    
    const myShipsElement = document.querySelector(".game-container .your-ships");
    if (myShipsElement) {
        while (myShipsElement.hasChildNodes()) {
            myShipsElement.removeChild(myShipsElement.lastChild);
        }
        fillFields(myShipsElement, myShips, width);
    }
}

function addElementClasses(element, index, cellType, X_MAX) {
    element.classList.add("field-cell");
    element.classList.add(`cell-${cellType}`);
    element.classList.add(`x-${Math.floor(index % X_MAX)}`);
    element.classList.add(`y-${Math.floor(index / X_MAX)}`);
}

function getElementBasedOnCell(cell) {
    if (cell === UNKNOWN_CELL) {
        const checkbox = document.createElement("input");
        checkbox.addEventListener("change", triggerCell);
        checkbox.setAttribute("type", "checkbox");
        return checkbox;
    } else if (cell === EMPTY_CELL) {
        const checkbox = document.createElement("input");
        checkbox.disabled = true;
        checkbox.setAttribute("type", "checkbox");
        return checkbox;
    } else if (cell === HIT_CELL) {
        const checkbox = document.createElement("input");
        checkbox.indeterminate = true;
        checkbox.disabled = true;
        checkbox.setAttribute("type", "checkbox");
        return checkbox;
    } else if (cell === NO_SHIP) {
        const checkbox = document.createElement("input");
        checkbox.disabled = true;
        checkbox.setAttribute("type", "checkbox");
        return checkbox;
    } else if (cell === SHIP) {
        const checkbox = document.createElement("input");
        checkbox.disabled = true;
        checkbox.checked = true;
        checkbox.setAttribute("type", "checkbox");
        return checkbox;
    } else if (cell === KILLED_SHIP) {
        const checkbox = document.createElement("input");
        checkbox.disabled = true;
        checkbox.indeterminate = true;
        checkbox.setAttribute("type", "checkbox");
    }
}

function fillFields(targetElement, fieldInfo, X_MAX) {
    fieldInfo.forEach((cell, index) => {
        if (index > 0 && index % X_MAX === 0) {
            targetElement.appendChild(document.createElement("br"))
        }
        const element = getElementBasedOnCell(cell);
        addElementClasses(element, index, cell, X_MAX);
        targetElement.appendChild(element);
    });
}
