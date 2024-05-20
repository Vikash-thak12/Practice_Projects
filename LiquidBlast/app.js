let circle = document.querySelector("#circle");
circle.addEventListener("click", function(){
    for(let i=0; i<50; i++) {
        let particles = document.createElement('i');
        particles.classList.add('particles');
        document.body.appendChild(particles)
    }
})