let marker = document.querySelector("#marker");
let item = document.querySelectorAll(".box");

function indicator(e) {
    //this is for the movemnet on the y-axis
    marker.style.top = e.offsetTop+'px';
    //this is for the movement on the x-axis
    marker.style.left = e.offsetLeft+'px';
}

item.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        indicator(e.target)
    })
})