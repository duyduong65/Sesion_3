let move = 10;
function clickup() {

    let element = document.getElementById('nobita');
    element.style.top = parseInt(element.style.top) - move + 'px';
}

function clickdown() {
    let elment = document.getElementById('nobita');
    elment.style.top = parseInt(elment.style.top) + move + 'px';
}

function clickleft() {
    let elment = document.getElementById('nobita');
    elment.style.left = parseInt(elment.style.left) - move + 'px';
}

function clickright() {
    let elment = document.getElementById('nobita');
    elment.style.left = parseInt(elment.style.left) + move + 'px';
}

function moveSelection(evt) {
    switch (evt.which) {
        case 37 :
            clickleft();
            break;
        case  38 :
            clickup();
            break;
        case  39:
            clickright()
            break;
        case  40:
            clickdown();
            break;
    }
}

function doReady() {
    window.addEventListener("keydown", moveSelection)
}

onload = doReady();