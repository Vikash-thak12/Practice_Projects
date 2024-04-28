let text = document.querySelector("#text")
let light = document.querySelector("#light")

document.addEventListener("mousemove", function(event) {
    let MouseX = event.clientX;
    let MouseY = event.clientY;
    light.style.left = MouseX + 'px';
    light.style.top = MouseY + 'px';


    let distanceX = MouseX - text.offsetLeft - text.offsetWidth / 2;
    let distanceY = MouseY - text.offsetTop - text.offsetHeight / 2;
})