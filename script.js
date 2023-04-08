//Declare memory variables
let operand1 = "";
let operator = undefined;
let operand2;
let displayValue = "";


//Declare buttons variables
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-function]');
const clearButton = document.querySelector('[data-allClear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');

//Declare display text variable
const displayText = document.querySelector('.display');


//Add event listeners to all buttons
numberButtons.forEach( button => button.addEventListener('click', e => {
    let number = e.target.textContent;
    appendNumber(number);
    updateDisplay();
    console.log(number);
}));

operationButtons.forEach( button => button.addEventListener('click', e => {
    let operation = e.target.textContent;
    console.log(operation);
}));

clearButton.addEventListener('click', e =>{
    console.log("All Clear");
});

deleteButton.addEventListener('click', e =>{
    console.log("Delete");
});

equalsButton.addEventListener('click', e =>{
    console.log("Equals");
});


//Function declarations
function allClear() {
    let operand1 = "";
    let operator = undefined;
    let operand2 = "";
    let displayValue = "";
};

function deleteDigit() {

};

function appendNumber(number) {
    if (number === "." && operand1.includes(".")) return;
    operand1 += number;
};

function chooseOperation(operator) {

};

function updateDisplay() {
    displayText.textContent = operand1;
};