function Calc(action, a, b) {
    const isNotValid = (typeof a !== 'number') || (typeof b !== 'number');
    const operations = {
        'sub': a - b,
        'sum': a + b,
        'multi': a * b,
        'div': a / b,
        // 'deg': a ** b,
        // 'rem': a % b,
    }
    if (isNotValid) {
        return 'Error';
    } else if (action in operations) {
        return operations[action];
    }
    return 'unknown operation';
}

const numbers = document.getElementsByClassName('number')
const reset = document.querySelector('.reset')
const output = document.querySelector('.output')
const backspace = document.querySelector('.backspace')
const operands = document.getElementsByClassName('operand')
const result = document.querySelector('.result')
let currentOperand;

reset.addEventListener('click', resetAll)
backspace.addEventListener('click', deleteLastElement)
result.addEventListener('click', getResult)

for (let number of numbers) {
    number.addEventListener('click', showMe)
}

for (let operand of operands) {
    operand.addEventListener('click', newOperand)
}

function getResult() {
    let str = output.textContent;
    let res = str.split(/[×÷–+]/)
    output.textContent = Calc(currentOperand, Number(res[0]), Number(res[1]));
}

function newOperand() {
    // let str = output.textContent;
    // if (Number(str[str.length-1])) {
    //     output.textContent += this.textContent
    // } else {
    //     output.textContent[output.textContent.length-1] = this.textContent;
    // }

    output.textContent += this.textContent

    switch (this.textContent) {
        case '×':
            currentOperand = 'multi'
            return;
        case '÷':
            currentOperand = 'div'
            return;
        case '–':
            currentOperand = 'sub'
            return;
        case '+':
            currentOperand = 'sum'
            return;
        default :
            return;
    }
}

function deleteLastElement() {
    if (output.textContent.length === 1) {
        output.textContent = '0';
    } else {
        console.log('delete');
        let str = output.textContent;
        output.textContent = output.textContent.substring(0, str.length - 1);
        output.textContent = str.substring(0, str.length - 1)
    }
}

function resetAll() {
    output.textContent = '0';
}

function showMe() {
    if (output.textContent === '0') {
        output.textContent = this.textContent
    } else {
        output.textContent += this.textContent
    }
}




