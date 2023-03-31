let currentNumber = "";
let operator;
let oldNumber;
let displayValue = "";

const numberButtons = document.querySelectorAll('[data-function="number"]');
const calcButtons = document.querySelectorAll('[data-function="calc"]');
const display = document.querySelector('.display');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals')





numberButtons.forEach(button => 
    button.addEventListener('click', e => {
        const num = e.target.textContent;
        if (display.textContent === "0"){
            displayValue = num;
        }
        else {
            displayValue += num;
        };
        currentNumber += num;
        console.log(num);
        updateDisplay();

}));

calcButtons.forEach(button => 
    button.addEventListener('click', e => {
        const operation = e.target.textContent;   
        console.log(operation);
        operator = operation;
        oldNumber = currentNumber;
        currentNumber = "";
        displayValue = "0";
        updateDisplay();

}));

equalsButton.addEventListener('click', () => {
    calcResult(oldNumber, operator, currentNumber);
})



clearButton.addEventListener('click', () => {
    clearAll();
});


function updateDisplay(){
    display.textContent = displayValue;
};

function calcResult(a, b, c){
    const num1 = parseFloat(a);
    const num2 = parseFloat(c);
    if (b === "+"){
        currentNumber = num1 + num2;
    }
    else if (b === "-"){
        currentNumber = num1 - num2;
    }
    else if (b === "/"){
        currentNumber = num1 / num2;
    }
    else if (b === "*"){
        currentNumber = num1 * num2;
    }
    displayValue = currentNumber;
    updateDisplay();
};





function clearAll(){
    currentNumber = "";
    operator = "";
    oldNumber = "";
    displayValue = 0;
    updateDisplay();
};