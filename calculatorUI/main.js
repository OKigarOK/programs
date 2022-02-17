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

function correctFontSize() {
    let contentLength = output.textContent.length;
    if (contentLength > 9) {
        output.style.fontSize = '32px'
    } else if (contentLength > 5) {
        output.style.fontSize = '64px'
    } else {
        output.style.fontSize = '96px'
    }
}

function getResult() {
    let str = output.textContent;
    let res = str.split(/[×÷–+]/)
    output.textContent = Calc(currentOperand, Number(res[0]), Number(res[1]));
    correctFontSize();
}

function newOperand() {
    let str = output.textContent;
    if (Number(str[str.length-1]) || (str[str.length-1] === '0')) {
        output.textContent += this.textContent;
    } else {
        output.textContent = str.slice(0,str.length-1) + this.textContent;
    }
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
    correctFontSize();
}

function resetAll() {
    output.textContent = '0';
    correctFontSize();
}

function showMe() {
    if (output.textContent === '0') {
        output.textContent = this.textContent
    } else {
        output.textContent += this.textContent
    }
    correctFontSize();
}

function Calc(action, a, b) {
    console.log(b);
    const isNotValid = ((b == 0) && (action === 'div') ||
        (typeof a !== 'number') || (a !== a) ||
        (typeof b !== 'number') || (b !== b));
    const operations = {
        'sub': a - b,
        'sum': a + b,
        'multi': a * b,
        'div': a / b,
    }
    if (isNotValid) {
        return 'Error';
    } else if (action in operations) {
        return operations[action];
    }
}
