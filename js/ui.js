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

function addElementClasses(element, index, cellType, X_MAX) {
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
