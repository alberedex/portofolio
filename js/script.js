let p = document.getElementById("lenguajes__title_id");
let classs = document.getElementsByClassName("lenguajes__title_div");
console.log(classs);
Array.from(classs).forEach(element => {
    let elementChild = element.firstElementChild;
    console.log(elementChild);
    console.log(element);
    for (let i = 0; i < 10; i++) {
        let newChild = elementChild.cloneNode(true);
        element.appendChild(newChild);
    }
});