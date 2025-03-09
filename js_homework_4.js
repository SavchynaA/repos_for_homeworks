const prompt = require('prompt-sync')();

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function calculatePercents(partOfCount, generalCount){
    return (partOfCount/generalCount) * 100;
}

let evenNums = 0; //парні
let oddNums = 0; //непарні
let randFrom = 100;
let randTo = 1000;

function checkProbabilityTheory(count){
    let randChar;
    for(let i = 1; i <= count; i++){
        randChar = getRandom(randFrom, randTo);
        if(randChar % 2 === 0)
            evenNums++;
        else 
            oddNums++;
    }

    var evenPercentage = Math.round(calculatePercents(evenNums, count));
    var oddPercentage = Math.round(calculatePercents(oddNums, count));

    console.log("Кількість згенерованих чисел: " + count);
    console.log("Кількість парних чисел: " + evenNums);
    console.log("Кількість непарних чисел: " + oddNums);
    console.log("Відсоток парних до непарних: " + evenPercentage + "% / " + oddPercentage + "%"); 
}

let countFromUser = prompt("Введіть, скільки разів буде генеруватись випалкове число: ")
checkProbabilityTheory(countFromUser);
