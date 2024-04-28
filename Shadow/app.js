let text = document.querySelector("#text")
let light = document.querySelector("#light")

document.addEventListener("mousemove", function(event) {
    let MouseX = event.clientX;
    let MouseY = event.clientY;
    light.style.left = MouseX + 'px';
    light.style.top = MouseY + 'px';
})