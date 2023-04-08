//Declare memory variables
let operand1 = "";
let operator = undefined;
let operand2 = "";
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
    chooseOperation(operation);
    updateDisplay();
    console.log(operation);
}));

clearButton.addEventListener('click', e =>{
    allClear();
    updateDisplay();
    console.log("All Clear");
});

deleteButton.addEventListener('click', e =>{
    console.log("Delete");
});

equalsButton.addEventListener('click', e =>{
    compute();
    updateDisplay();
    console.log("Equals");
});


//Function declarations
function allClear() {
    operand1 = "";
    operator = undefined;
    operand2 = "";
    displayValue = "";
};

function deleteDigit() {

};

function appendNumber(number) {
    if (number === "." && operand1.includes(".")) return;
    operand1 += number;
};

function chooseOperation(operation) {
    if (operand1 === "") return;
    if (operand2 !== ""){
        compute();
    }
    operator = operation;
    operand2 = operand1;
    operand1 = "";
};

function compute(){
    let computation;
    const a = parseFloat(operand2);
    const b = parseFloat(operand1);
    if (isNaN(a) || isNaN(b)) return;
    switch (operator) {
        case '+':
            computation = a + b;
            break
        case '-':
            computation = a - b
            break
        case '*':
            computation = a * b
            break
        case '÷':
            computation = a / b
            break
        default: return
    };
    operand1 = computation;
    operator = undefined;
    operand2 = "";
}

function updateDisplay() {
    displayText.textContent = operand1;
};