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
//Event listeners for numbers and point
numberButtons.forEach( button => button.addEventListener('click', e => {
    let number = e.target.textContent;
    appendNumber(number);
    updateDisplay();

    console.log(number);
}));

//Event listeners for the 4 basic operations buttons
operationButtons.forEach( button => button.addEventListener('click', e => {
    let operation = e.target.textContent;
    chooseOperation(operation);
    //updateDisplay();
    console.log(operation);
}));

//Event listener for the All Clear button
clearButton.addEventListener('click', e =>{
    allClear();
    updateDisplay();
    console.log("All Clear");
});

//Event listener for delete button
deleteButton.addEventListener('click', e =>{
    deleteDigit();
    console.log("Delete");
});

//Event listener for the equals button
equalsButton.addEventListener('click', e =>{
    compute();
    updateDisplay();
    displayValue = "";
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
    operand1 = operand1.slice(0, -1);
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
};

//Function for appending numbers when clicking the numbers or point
function appendNumber(number) {
    if (number === "." && operand1.includes(".")) return;
    if (displayText.textContent === "0" && number === "0") return;
    if (displayText.textContent === "0" && number !== ".") displayValue = "";
    operand1 += number;
    displayValue += number;
};

//Function for choosing which operation to do
function chooseOperation(operation) {
    if (operand1 === "") return;
    if (operand2 !== ""){
        compute();
    }
    operator = operation;
    operand2 = operand1;
    operand1 = "";
    displayValue = "";
};

//Function for computing the result of the calculation
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
    displayValue = computation;
    operator = undefined;
    operand2 = "";
    updateDisplay();
}

//Function for updating the display text
function updateDisplay() {
    displayText.textContent = displayValue;
};