let box = document.querySelector(".box");
function moveNext() {
    let item = document.querySelectorAll('.item');
    box.appendChild(item[0])
}

function movePrev() {
    let item = document.querySelectorAll('.item');
    box.prepend(item.length - 1)
}

window.addEventListener("wheel", function(event) {
    if(event.deltaY > 0) {
        moveNext();
    } else {
        movePrev();
    }
})