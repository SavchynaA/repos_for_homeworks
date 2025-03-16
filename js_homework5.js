var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };
    
services['Розбити скло'] = "200 грн";


//Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.

services.price = function(){
    let price = 0;
    let sum = 0;
    for(let i in services){
        if (typeof services[i] === 'function') 
            continue;
       price = Number(services[i].split(" ")[0]);
       console.log(`Ціна для ${i} = ${price}`);
       sum += price;
    }
    return sum;
}

console.log("Загальна ціна послуг: " + services.price());
services['Укладка'] = "180 грн";
console.log("Загальна ціна послуг: " + services.price());


//Створити метод maxPrice(), який повертає максимальну ціну.

services.maxPrice = function(){
    let max = 0; 
    for(let i in services){
        if (typeof services[i] === 'function') 
            continue;

        price = Number(services[i].split(" ")[0]);
        if (price > max)
        max = price;
    }
    return max; 
}

services['Cклянка води'] = "10 грн";
services.minPrice = function(){
    let min = Infinity;
    for(let i in services){
        if (typeof services[i] === 'function') 
            continue;

        price = Number(services[i].split(" ")[0]);
        if (price < min)
            min = price;
    }
    return min; 
}

console.log("Найбільша ціна послуги: " + services.maxPrice());
console.log("Найменша ціна послуги: " + services.minPrice());

