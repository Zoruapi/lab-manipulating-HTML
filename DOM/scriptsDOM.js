let friends = ['Pedro', 'Jessi', 'Bidaux', 'Morellas', 'Demel', 'Koi', 'Alex', 'Kryvin', 'Xana', 'Nitblit'];

document.addEventListener('DOMContentLoaded', function () {
    //Creates the containers
    let main = document.getElementById('DOM-section');

    main.appendChild(objective1());
    main.appendChild(objective4());
    main.appendChild(objective5());

})

//================ Creating the elemetns of the objectives===============

//Completes the objective 1
function objective1() {
    let objective1Div = newElementClass('div',
        'border border-primary rounded col-12 col-md-6 col-lg-4 mb-3');
    let h2Objective1Div = newElementClass('div',
        'd-flex justify-content-center mt-2 mb-2');
    let h2Objective1 = newElementText('h2', 'Objective 1');
    let btnDiv = newElementClass('div',
        'd-flex justify-content-center mb-3');
    let btn = newElementClassText('button', 'btn btn-primary', 'Click Me');

    btnDiv.id = 'div-button-alert-DOM';
    btn.id = 'alert-button-DOM';

    //Appends the button
    btnDiv.appendChild(btn);

    h2Objective1Div.appendChild(h2Objective1);
    objective1Div.appendChild(h2Objective1Div);
    objective1Div.appendChild(btnDiv);


    return objective1Div;
}

function objective4() {
    let objective4Div = newElementClass('div',
        'border border-primary rounded col-12 col-md-6 col-lg-4 mb-3');
    let h2Objective4Div = newElementClass('div',
        'd-flex justify-content-center mt-2 mb-2');
    let h2Objective4 = newElementText('h2', 'Objective 4');
    let objective4PDiv = newElementClass('div',
        'd-flex justify-content-center mt-2 mb-2');
    let objective4P = newElementClassText('p', 'objective-4-P-DOM', 'A paragraph with some text');

    h2Objective4Div.appendChild(h2Objective4);
    objective4PDiv.appendChild(objective4P);

    objective4Div.appendChild(h2Objective4Div);
    objective4Div.appendChild(objective4PDiv);


    return objective4Div;
}

function objective5() {
    let objective5Div = newElementClass('div',
        'border border-primary rounded col-12 col-md-6 col-lg-4 mb-3');
    let h2Objective5Div = newElementClass('div',
        'd-flex justify-content-center mt-2 mb-2');
    let h2Objective5 = newElementText('h2', 'Objective 5');
    let btnDiv = newElementClass('div',
        'd-flex justify-content-center mt-2 mb-2');
    let btn = newElementClassText('button', 'btn btn-primary', 'Click Me');
    let divSpan = newElementClass('div',
        'd-flex justify-content-center mt-2 mb-2');

    btnDiv.id = 'div-btn-span-button-DOM';
    btn.id = 'btn-span-button-DOM';
    divSpan.id = 'span-button-DOM';
    divSpan.style.flexWrap = 'wrap';

    //Appends the button
    btnDiv.appendChild(btn);
    h2Objective5Div.appendChild(h2Objective5);

    objective5Div.appendChild(h2Objective5Div);
    objective5Div.appendChild(btnDiv);
    objective5Div.appendChild(divSpan);

    return objective5Div;
}

//=============== Event listeners ====================

document.addEventListener('click', function (event) {
    const element = event.target;

    if (element.id == 'alert-button-DOM') {
        newAlert(element.parentNode.parentNode);
    } else if (element.id == 'btn-text-alert-DOM') {
        newAlertText(element.parentNode.parentNode);
    } else if (element.className == 'objective-4-P-DOM') {
        element.style.color = randColor();
    } else if (element.id == 'btn-span-button-DOM') {
        newNameSpan();
    } else if (element.id == 'btn-list-DOM') {
        listOfFriends();
    }
})

document.addEventListener('mouseover', function (event) {
    const element = event.target;
    if (element.id == 'squareDOM') {
        element.style.background = randColor();
    }
})

document.addEventListener('mouseout', function (event) {
    const element = event.target;
    if (element.id == 'squareDOM') {
        element.style.background = 'black';
    }
})

//=============== Event Functions =====================

//Adds an alert when the button is clicked
function newAlert(element) {
    let alert = newElementClassText('div', 'alert alert-info',
        "A (nice) alert saying you've pressed the button");

    alert.role = 'alert';

    element.appendChild(alert);
}

//Adds an alert with the message of a text input
function newAlertText(element) {
    let msg = document.getElementById('textInputDOM').value;
    let alert = newElementClassText('div', 'alert alert-info', msg);
    console.log(msg);
    alert.role = 'alert';

    element.appendChild(alert);
}

function newNameSpan() {
    let element = document.getElementById('span-button-DOM');
    let span = newElementClassText('span', 'span-DOM', 'Zoruapi');

    element.appendChild(span);
}

function listOfFriends() {
    let list = document.getElementById('list-DOM');
    let element;
    for (i = 0; i < friends.length; i++) {
        element = newElementText('li', friends[i]);
        list.appendChild(element);
    }
}

//=============== Utility Functions ==================

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

function randColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let rbgValue = "#" + randomColor;
    return rbgValue;
}