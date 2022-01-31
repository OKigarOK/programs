function showVerticalMessage(string) {
    const MAX_STRING_LENGTH = 10;
    const FIRST_LETTER = 'м';
    let row = '';
    if (string[0] === FIRST_LETTER) {
        string = string[0].toUpperCase() + string.slice(1);
    }
    for (let letter of string.slice(0, MAX_STRING_LENGTH)) {
        row += `\n ${letter}`;
    }
    console.log(row);
}

let str = 'марафон';
showVerticalMessage(str);
let str2 = 'приветмедвед';
showVerticalMessage(str2);
