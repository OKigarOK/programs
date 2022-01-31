function showVerticalMessage(string) {
    const maxStringLength = 10;
    const firstLetter = 'м';
    let row = '';
    if (string.length > maxStringLength) {
        string = string.slice(0, maxStringLength)
    }
    if (string[0] === firstLetter) {
        string = string[0].toUpperCase() + string.slice(1);
    }
    for (let letter of string) {
        row += `\n ${letter} \n`;
    }
    console.log(row);
}

let str = 'марафон';
showVerticalMessage(str);
let str2 = 'приветмедвед';
showVerticalMessage(str2);
