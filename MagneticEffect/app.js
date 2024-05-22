let cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        let x = e.offsetX;
        let y = e.offsetY;

        let cardwidth = card.clientWidth;
        let cardHeight = card.clientHeight;

        let posX = (x - cardwidth/2);
        let posY = (y - cardHeight/2);

        card.style.transform = `translateX(${posX}px) translateY(${posY}px)`


    })
    card.addEventListener('mouseout', () => {
        card.style.transform = `translateX(0px) translateY(0px)`;
    })
})