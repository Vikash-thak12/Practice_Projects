let prevMouseX = null;
let prevMouseY = null;

function heart(event) {
    if(prevMouseX !== null && prevMouseY !== null) {
        let deltaX = event.pageX - prevMouseX;
        let deltaY = event.pageY - prevMouseY;

        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if(distance >= 100) {
            createHearts(event.pageX, event.pageY)
            prevMouseX = event.pageX;
            prevMouseY = event.pageY;
        }
    }
}


function createHearts(x,y) {
    let i = document.createElement('i');
    document.body.appendChild(i)

    i.style.top = (event.pageY) +  'px';
    i.style.left = (event.pageX) + 'px';

    setTimeout(() => {
        document.body.removeChild(i)
    }, 2000);
}

document.addEventListener('mousemove', createHearts)