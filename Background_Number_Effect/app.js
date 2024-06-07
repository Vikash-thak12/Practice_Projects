let numbers = document.querySelector(".numbers");
let numstring = numbers.textContent;
let splitnum = numstring.split("");

numbers.textContent = "";

for (let i = 0; i < splitnum.length; i++) {
    numbers.innerHTML += "<span>" + splitnum[i] + "</span>";
}

let box = document.querySelector(".box");

box.addEventListener("mouseenter", () => {
    numbers.classList.add("no-animation");
});

box.addEventListener("mouseleave", () => {
    numbers.classList.remove("no-animation");
});
