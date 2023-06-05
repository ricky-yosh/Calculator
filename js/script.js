document.addEventListener("DOMContentLoaded", () => {
    let numberPressed;
    let onFirstNumber = true;
    let onSecondNumber = false;
    let operatorInput;
    let operatorPressed;
    let equalsPressed = false;
    let clearAll = false;
    let deletePressed = false;

    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("mousedown", () => {
            // change color
            button.style.backgroundColor = "lightgrey";

            // get elements
            const firstNumberHTML = document.querySelector("#first-number");
            const operatorHTML = document.querySelector("#operator");
            const secondNumberHTML = document.querySelector("#second-number");
            const currentResult = document.querySelector("#current-result");

            // get number
            numberPressed = onFirstNumber ? firstNumberHTML.innerHTML : secondNumberHTML.innerHTML;
            
            // check which button selected
            switch(button.id) {
                case "button-0":
                    numberPressed += 0;
                    operatorPressed = false;
                    break;
                case "button-1":
                    numberPressed += 1;
                    operatorPressed = false;
                    break;
                case "button-2":
                    numberPressed += 2;
                    operatorPressed = false;
                    break;
                case "button-3":
                    numberPressed += 3;
                    operatorPressed = false;
                    break;
                case "button-4":
                    numberPressed += 4;
                    operatorPressed = false;
                    break;
                case "button-5":
                    numberPressed += 5;
                    operatorPressed = false;
                    break;
                case "button-6":
                    numberPressed += 6;
                    operatorPressed = false;
                    break;
                case "button-7":
                    numberPressed += 7;
                    operatorPressed = false;
                    break;
                case "button-8":
                    numberPressed += 8;
                    operatorPressed = false;
                    break;
                case "button-9":
                    numberPressed += 9;
                    operatorPressed = false;
                    break;
                case "division-button":
                    operatorInput = "÷";
                    operatorPressed = true;
                    onFirstNumber = false;
                    onSecondNumber = true;
                    break;
                case "times-button":
                    operatorInput = "×";
                    operatorPressed = true;
                    onFirstNumber = false;
                    onSecondNumber = true;
                    break;
                case "minus-button":
                    operatorInput = "-";
                    operatorPressed = true;
                    onFirstNumber = false;
                    onSecondNumber = true;
                    break;
                case "add-button":
                    operatorInput = "+";
                    operatorPressed = true;
                    onFirstNumber = false;
                    onSecondNumber = true;
                    break;
                case "equals-button":
                    equalsPressed = true;
                    operatorPressed = false;
                    onFirstNumber = false;
                    onSecondNumber = false;
                    break;
                case "clear-all-button":
                    clearAll = true;
                    onFirstNumber = false;
                    onSecondNumber = false;
                    operatorPressed = false;
                    equalsPressed = false;
                    break;
                case "delete-button":
                    deletePressed = true;
                    clearAll = false;
                    onFirstNumber = false;
                    onSecondNumber = false;
                    operatorPressed = false;
                    equalsPressed = false;
                    break;
                // case "decimal-button":
                //     if (!numberPressed.includes(".")) {
                //         numberPressed += ".";
                //     }
                //     deletePressed = false;
                //     clearAll = false;
                //     operatorPressed = false;
                //     equalsPressed = false;
                //     break;
                default:
                    numberPressed += "ERROR";
            }
                
            // which part of equation to change
            if(onFirstNumber) {
                firstNumberHTML.innerHTML = numberPressed.length < 1 ? "0" : numberPressed.replace(/^0+/, '');
                if(firstNumberHTML.innerHTML == "") {
                    firstNumberHTML.innerHTML = "0";
                }
            } else if(operatorPressed) {
                if (onSecondNumber) {
                    equalsPressed = true;
                }
                operatorHTML.innerHTML = operatorInput;
            } else if(onSecondNumber){
                secondNumberHTML.innerHTML = numberPressed.length < 1 ? "0" : numberPressed.replace(/^0+/, '');
                if(secondNumberHTML.innerHTML == "") {
                    secondNumberHTML.innerHTML = "0";
                }
            } else if(equalsPressed){
                // solve function
                let num1 = firstNumberHTML.innerHTML;
                let num2 = secondNumberHTML.innerHTML == "" ? 0 :secondNumberHTML.innerHTML;
                let operator = operatorHTML.innerHTML == "" ? "+" : operatorHTML.innerHTML;
                let result = chooseOperator(num1, num2, operator);
                resultAsString = result.toString();
                currentResult.innerHTML = resultAsString;
                firstNumberHTML.innerHTML = resultAsString;

                operatorHTML.innerHTML = "";
                secondNumberHTML.innerHTML = "";
                onFirstNumber = true;
                operatorPressed = false;
                onSecondNumber = false;

            } else if(clearAll) {
                firstNumberHTML.innerHTML = "0";
                secondNumberHTML.innerHTML = "";
                operatorHTML.innerHTML = "";
                currentResult.innerHTML = "0";
                onFirstNumber = true;
                onSecondNumber = false;
                operatorPressed = false;
            } else if (deletePressed) {
                let secondNumLen = secondNumberHTML.innerHTML.length;
                let firstNumLen = firstNumberHTML.innerHTML.length;

                if(secondNumLen > 0) {
                    secondNumberHTML.innerHTML = secondNumberHTML.innerHTML.substring(0, secondNumLen - 1);
                } else if(operatorHTML.innerHTML.length > 0) {
                    operatorHTML.innerHTML = "";
                } else if(firstNumLen > 1){
                    firstNumberHTML.innerHTML = firstNumberHTML.innerHTML.substring(0, firstNumLen - 1);
                } else {
                    firstNumberHTML.innerHTML = "0";
                }
            } // else {
            //     // decimal stuff
            //     let equationText = onFirstNumber ? firstNumberHTML.innerHTML : secondNumberHTML.innerHTML;
            //     equationText = numberPressed;
            // }
        });
        button.addEventListener("mouseup", () => {
            button.style.backgroundColor = "grey";
        });
    });
});