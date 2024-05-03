document.addEventListener('DOMContentLoaded', function() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        let spans = [];
        for(let i=0; i<200; i++) {
            let span = document.createElement('span');
            spans.push(span);
            box.appendChild(span)
        }
    })
})