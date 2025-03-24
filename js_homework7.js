//paranoia
var user = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var re = /^([\w]+)(\.[\w]+)*@(gmail\.com|yahoo\.com)$/;
var validatedEmails = user.filter(checkerOfEMail);

console.log(validatedEmails);
//console.log(user);

function checkerOfEMail(arr) {
    return re.test(arr.email);
}

// Without a, with 6 or more symbols

 var allWords = ["Wonderful", "Happiness", "Time", "Task", "Apple", "Joyful", "Anastasia", "QA", "QW", "Testing"];
 
 var regExp = /^[^aA]{6,}$/;

 var filteredWords = allWords.filter(checkerOfWords);

 function checkerOfWords(word) {
    return regExp.test(word);
 }

 console.log(allWords);
 console.log(filteredWords);
 

