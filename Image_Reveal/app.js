let container = document.querySelector(".container")
let count = 1000;
for(let i=0; i<count; i++) {
    let box = document.createElement('div');
    box.className = "box";
    container.appendChild(box)
}

let boxes = document.querySelectorAll('.box');
for( let i=0; i<boxes.length; i++) {
    boxes[i].addEventListener("mouseover", (e) => {
        boxes[i].classList.add('active');
    })
}