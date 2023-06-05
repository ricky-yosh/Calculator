
let chooseOperator = (a, b, operator) => {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);
    let result;
    switch(operator) {
        case "-":
            result = subtract(num1, num2);
           break;
        case "×":
            result = multiply(num1, num2);
           break;
        case "÷":
            result = divide(num1, num2);
           break;
        default:
            result = add(num1, num2);
    }
    return result;
}

let add = (num1, num2) => {
    let result = num1 + num2;
    return result;
}
let subtract = (num1, num2) => {
    let result = num1 - num2;
    return result;
}
let multiply = (num1, num2) => {
    let result = num1 * num2;
    return result;
}
let divide = (num1, num2) => {
    let result;
    if (!num2) {
        result = "ERROR";
    } else {
        result = num1/num2;
    }
    return result;
}