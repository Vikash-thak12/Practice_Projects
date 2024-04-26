function createHearts() {
    let i = document.createElement('i');
    document.body.appendChild(i)

    setTimeout(() => {
        document.body.removeChild(i)
    }, 2000);
}

document.addEventListener('mousemove', createHearts)