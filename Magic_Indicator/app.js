let marker = document.querySelector("#marker");
let item = document.querySelectorAll(".box");

function indicator(e) {
    marker.style.top = e.offsetTop+'px';
    marker.style.left = e.offsetLeft+'px';
}

item.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        indicator(e.target)
    })
})