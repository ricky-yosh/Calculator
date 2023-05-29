document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("mousedown", () => {
            button.style.backgroundColor = "lightgrey";
        });
        button.addEventListener("mouseup", () => {
            button.style.backgroundColor = "grey";
        });

        let firstNumber = "";
        let operator;
        let secondNumber;
        button.addEventListener("click", () => {
            switch(button.id) {
                case "button-0":
                    firstNumber += 0;
                    break;
                case "button-1":
                    firstNumber += 1;
                    break;
                case "button-2":
                    firstNumber += 2;
                    break;
                case "button-3":
                    firstNumber += 3;
                    break;
                case "button-4":
                    firstNumber += 4;
                    break;
                case "button-5":
                    firstNumber += 5;
                    break;
                case "button-6":
                    firstNumber += 6;
                    break;
                case "button-7":
                    firstNumber += 7;
                    break;
                case "button-8":
                    firstNumber += 8;
                    break;
                case "button-9":
                    firstNumber += 9;
                    break;
                default:
                    firstNumber = "ERROR";
            }
            const firstNumber = document.querySelector("#");
            const operator = document.querySelector("#");
            const secondNumber = document.querySelector("#");
            currentEquation.innerHTML = firstNumber;
        });


    });


});