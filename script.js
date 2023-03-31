let currentNumber = "";
let operator;
let oldNumber;
let displayValue = "";

const numberButtons = document.querySelectorAll('[data-function="number"]');
const calcButtons = document.querySelectorAll('[data-function="calc"]');
const display = document.querySelector('.display');





numberButtons.forEach(button => 
    button.addEventListener('click', e => {
        const num = e.target.textContent;
        currentNumber += num;
        displayValue += num;
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



function updateDisplay(){
    display.textContent = displayValue;
}

