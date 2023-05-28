document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("mousedown", () => {
            button.style.backgroundColor = "lightgrey";
        });
        button.addEventListener("mouseup", () => {
            button.style.backgroundColor = "grey";
        });
        button.addEventListener("click", () => {
            const currentEquation = document.querySelector("#current-equation");
            currentEquation.innerHTML = 12;
        });
    });


});