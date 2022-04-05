function sumOfNumbers(num) {
    num = String(num);
    if (num.length === 1 ) return Number(num);
    return Number(num[0]) + sumOfNumbers(num.slice(1));
}
console.log(sumOfNumbers(12345678910));
