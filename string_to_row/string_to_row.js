function showVerticalMessage(string) {
    const MAX_STRING_LENGTH = 10;
    const BIG_FIRST_LETTER = 'м';
    let row = string.startsWith(BIG_FIRST_LETTER) ?
        `\n ${string[0].toUpperCase()}` : `\n ${string[0]}`;
    for (let letter of string.slice(1, MAX_STRING_LENGTH)) {
        row += `\n ${letter}`;
    }
    console.log(row);
}

let str = 'марафон';
showVerticalMessage(str);
let str2 = 'приветмедвед';
showVerticalMessage(str2);
