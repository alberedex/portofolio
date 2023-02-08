let p = document.getElementById("lenguajes__title_id");
let classs = document.getElementsByClassName("lenguajes__title_div");


Array.from(classs).forEach(element => {
    let elementChild = element.firstElementChild;
    console.log(elementChild);
    console.log(element);
    for (let i = 0; i < 10; i++) {
        let newChild = elementChild.cloneNode(true);
        element.appendChild(newChild);
    }
});

$("#offcanvasNavbar2 a").click(function () {
    $('.offcanvas').offcanvas('hide');
});

let html = $('p,a');
let background = $('body');
let nav = $('nav');
let navOffCanvas = $('nav div.offcanvas');
let selector = $('.form-switch i');

selector.click(onModeDarkLight);

function onModeDarkLight() {
    if(selector.hasClass('fa-regular fa-moon')){
        darkMode();
    } else {
        lightMode();
    }
}

onModeDarkLight();

function darkMode() {
    selector.removeClass();
    selector.addClass('fa-solid fa-sun');

    html.css('filter', 'invert(0%)');
    selector.css('color', 'white');
    background.css('background-color', 'black');
    nav.addClass('bg-black');
    nav.removeClass('bg-white');
    

    navOffCanvas.addClass('bg-black');
    navOffCanvas.removeClass('bg-white');


}

function lightMode() {
    selector.removeClass();

    selector.addClass('fa-regular fa-moon');
    html.css('filter', 'invert(100%)');
    selector.css('color', 'black');
    background.css('background-color', 'white');

    nav.removeClass('bg-black');
    nav.addClass('bg-white');

    navOffCanvas.addClass('bg-white');
    navOffCanvas.removeClass('bg-black');
}