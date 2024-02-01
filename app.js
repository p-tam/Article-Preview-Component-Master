
let button = document.querySelector("button");

let secondBtn = document.querySelector("#second-btn");

button.addEventListener('click', toggleShareIconDisplay());
secondBtn.addEventListener('click', toggleShareIconDisplay());

function toggleShareIconDisplay() {
    return function() {
        const icons = document.querySelector(".icon-container");
        icons.classList.toggle("hide");
    };
}