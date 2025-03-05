const prompt = require('prompt-sync')();

function pow(x, y)
{
    let result = 1;
    for(let i = 1; i <= y; i++){
        result *= x;
        console.log(x + " в " + i + " степені: " + result);
    }
    console.log("Результат виразу " + x + " ^ " + y + " = " + result);
}

let firstNum = Number(prompt("Введіть число, яке будемо зводити до ступеня: "));
let secondNum = Number(prompt("Введіть, до якого ступеня будемо зводити: "));

pow(firstNum, secondNum);