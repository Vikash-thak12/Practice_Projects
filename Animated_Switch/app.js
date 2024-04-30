document.addEventListener("DOMContentLoaded", function() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach( (box) => {
        let spans = [];
        for(let i=0; i<40; i++) {
            let span = document.createElement('span');
            spans.push(span);
            box.appendChild(span)
        }
        box.addEventListener("click", function() {
            box.classList.toggle('active')
        })
    })
})