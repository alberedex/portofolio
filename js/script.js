let p = document.getElementById("lenguajes__title_id");

for (let i = 0; i < 4; i++) {
    let newChild = p.firstChild.cloneNode(false);
    p.appendChild(newChild);
}