const friends = ['Pedro', 'Jessi', 'Bidaux', 'Morellas', 'Demel', 'Koi', 'Alex', 'Kryvin', 'Xana', 'Nitblit'];

//Generates a random color
function randColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let rbgValue = "#" + randomColor;
    return rbgValue;
}

//========== DOM Utilities =============

//Creates a new element given the type
function newElement(newElementType) {
    let element = document.createElement(newElementType);

    return element;
}

//Creates a new element given the type and the class
function newElementClass(newElementType, newElementClass) {
    let element = document.createElement(newElementType);

    element.className = newElementClass;

    return element;
}

//Creates a new element given the type, the class and the text
function newElementClassText(newElementType, newElementClass, newElementText) {
    let element = document.createElement(newElementType);
    let elementText = document.createTextNode(newElementText);

    element.className = newElementClass;

    element.appendChild(elementText);

    return element;
}

function newElementText(newElementType, newElementText) {
    let element = document.createElement(newElementType);
    let elementText = document.createTextNode(newElementText);

    element.appendChild(elementText);

    return element;
}

