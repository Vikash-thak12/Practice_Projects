let text = document.querySelector("#text")
let light = document.querySelector("#light")

document.addEventListener("mousemove", function(event) {
    // This will create the position of the light 
    let MouseX = event.clientX;
    let MouseY = event.clientY;
    light.style.left = MouseX + 'px';
    light.style.top = MouseY + 'px';


    let distanceX = MouseX - text.offsetLeft - text.offsetWidth / 2;
    let distanceY = MouseY - text.offsetTop - text.offsetHeight / 2;


    // This is for the shadow of the text
    let newshadow = '';
    for(var i=0; i<200; i++) {
        let shadowX = -distanceX * (i / 200);
        let shadowY = -distanceY * (i / 200);
        let opacity = 1 - ( i / 150);
        newshadow += (newshadow ? ',' : '') + shadowX + 'px ' + shadowY + 'px 0 rgba(33,33,33,'+opacity+')';
    }
    text.style.textShadow = newshadow;
})