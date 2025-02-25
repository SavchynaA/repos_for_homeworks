
 // В результаті отримаємо number33, оскільки 'number' - рядок. Для рядків + - це конкатенація
 // Наступні значення сприймаються як рядки, з якими проводиться операція конкатенації
let result_1 = 'number' + 3 + 3;
console.log(result_1); 

// В резульатті отримаємо 3, оскільки null - це нічого, залишається 3
let result_2 = null + 3;
console.log(result_2);

// ???
let result_3 = 5 && "qwerty"
console.log(result_3);

//??
let result_4 = +'40' + +'2' + "hillel";
console.log(result_4);


//??
let result_5 = '10' - 5 === 6;
console.log(result_5);


//1
let result_6 = true + false;
console.log(result_6);


//??
let result_7 = '4px' - 3;
console.log(result_7);

//?
let result_8 = '4' - 3
console.log(result_8);


//?
let result_9 = '6' + 3 ** 0;
console.log(result_8);

//?
let result_10 = 12 / '6'
console.log(result_10);


//?
let result_11 = '10' + (5 === 6);
console.log(result_11);


//?
let result_12 = null == ''
console.log(result_12);

//?
let result_13 = 3 ** (9 / 3);
console.log(result_13);


//?
let result_14 = !!'false' == !!'true'
console.log(result_14);


//?
let result_15 = 0 || '0' && 1
console.log(result_15);


//?
let result_16 = (+null == false) < 1;
console.log(result_16);


//?
let result_17 = false && true || true
console.log(result_17);

//?
let result_18 = false && (false || true);
console.log(result_18);

//?
let result_19 = (+null == false) < 1 ** 5;
console.log(result_19);



