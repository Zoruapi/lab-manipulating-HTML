
$(function () {
    let $main = $('#jQuery-section');

    //Creates de objectives
    objective1JQuery($main);
    objective4JQuery($main);
    objective5JQuery($main);

    //Events
    $('#alert-button-jQuery').on('click', niceAlert);
    $('#btn-text-alert-jQuery').on('click', textAlert);
    $('#square-jQuery').on('mouseover', randColorJQuery).on('mouseout', orignalColor);
    $('.objective-4-jQuery').on('click', changeTextColor);
    $('#span-button-jQuery').on('click', newSpanName);
    $('#btn-list-jQuery').on('click', listFriends);
})

//============ Creating Objectives ===============

//Creates objective 1
function objective1JQuery(element) {
    let $divObj1 = $('<div ' +
        'class="border border-primary rounded col-12 col-md-6 col-lg-4 mb-3"></div>');
    let $h2Obj1 = $('<h2 ' +
        'class="d-flex justify-content-center mt-2 mb-2"></h2>');
    let $btnObj1 = $('<div ' +
        'class="d-flex justify-content-center mb-3" id="div-button-alert-DOM"></div>');

    $('<h2> Objective 1 </h2>').appendTo($h2Obj1);
    $('<button ' +
        'class="btn btn-primary" ' +
        'id="alert-button-jQuery">Click Me</button>').appendTo($btnObj1);

    $h2Obj1.appendTo($divObj1);
    $btnObj1.appendTo($divObj1);

    $divObj1.appendTo(element);
}

//Creates objective 4
function objective4JQuery(element) {
    let $divObj4 = $('<div ' +
        'class="border border-primary rounded col-12 col-md-6 col-lg-4 mb-3"></div>');
    let $h2Obj4 = $('<div ' +
        'class="d-flex justify-content-center mt-2 mb-2"></div>');
    let $pObj4 = $('<p ' +
        'class="d-flex justify-content-center mt-2 mb-2"></p>');

    $('<h2>Objective 4</h2>').appendTo($h2Obj4);
    $('<p ' +
        'class="objective-4-jQuery">A paragraph with some text</p>').appendTo($pObj4);

    $h2Obj4.appendTo($divObj4);
    $pObj4.appendTo($divObj4);

    $divObj4.appendTo(element);
}

//Creates objective 5
function objective5JQuery(element) {
    let $divObj5 = $('<div ' +
        'class="border border-primary rounded col-12 col-md-6 col-lg-4 mb-3"></div>');
    let $h2Obj5 = $('<div ' +
        'class="d-flex justify-content-center mt-2 mb-2"></div>');
    let $btnObj5 = $('<div ' +
        'class="d-flex justify-content-center mt-2 mb-2" ' +
        'id="div-btn-span-buttom-jQuery"></div>');
    let $spanObj5 = $('<div ' +
        'class="d-flex justify-content-center mt-2 mb-2" ' +
        'id="span-div" ' +
        'style="flex-wrap: wrap"></div>');

    $('<h2>Objective 5</h2>').appendTo($h2Obj5);
    $('<button ' +
        'class="btn btn-primary"' +
        'id="span-button-jQuery">Click Me</button>').appendTo($btnObj5);

    $h2Obj5.appendTo($divObj5);
    $btnObj5.appendTo($divObj5);
    $spanObj5.appendTo($divObj5);

    $divObj5.appendTo(element);
}

//============ Event Functions ===============

//Creates a (nice) alert
function niceAlert() {
    let $alert = $('<div ' +
        'class="alert alert-info"' +
        'role="alert">A (nice) alert saying you' + "'ve " + 'pressed the button</div>');

    $alert.appendTo($('#alert-button-jQuery').parent().parent());
}

//Creates an alert with the text info
function textAlert() {
    let msg = $('#text-input-jQuery').val();
    let $alert = $('<div ' +
        'class="alert alert-info"' +
        'role="alert">' + msg + '</div>');

    $alert.appendTo($('#btn-text-alert-jQuery').parent().parent());
}

//Changes div to a random color
function randColorJQuery() {
    $('#square-jQuery').css('background', randColor());
}

//Changes div to it's original color
function orignalColor() {
    $('#square-jQuery').css('background', 'black');
}

function changeTextColor() {
    $('.objective-4-jQuery').css('color', randColor());
}

function newSpanName() {
    $('<span>Zoruapi</span>').appendTo('#span-div');

}

function listFriends() {
    for (i = 0; i < friends.length; i++) {
        $('<li>' + friends[i] + '</li>').appendTo('#list-jQuery');
    }
}