const rect = document.querySelector("#center")

// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference
        // between previously 
        // called and current called timings
        // console.log(now - prev, delay);

        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}
rect.addEventListener("mousemove",
    throttleFunction(() => {
        // console.log("Working")
        let div = document.createElement('div');
        div.classList.add('mydiv')
        document.body.appendChild(div)

        let img = document.createElement('img')
        img.setAttribute('src', )
    }, 200));