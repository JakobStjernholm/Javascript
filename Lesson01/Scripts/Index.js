//alert('hejhej');

//Datatyper
var nbr = 12; // datatyp Number
nbr = "hej"; //dynamiskt typat språk
var name = "Jakob"; // String
var myArray = ["Jakob", 15, 8.9, 'hallåååå']; // en array
var myObject = { name: "Jakob", age: 24 }; // ett object, JSON syntax
var noWay; // undefined. den vet inte vad den är

//------------------Tar reda på datatypen-------------------
//alert(typeof 3); //number är denna datatypen/literalen
//alert(typeof 'g'); // string
//alert(typeof ""); // string
//alert(typeof true); // boolean
//alert(typeof [2,3,4,6,"ht"]); // object (!) agerar som en array
//alert(typeof { name: "Jakob", age: 24 }); // object

//var d = new Date();
//alert(d.getDay()); // Nollbaserat, börjar på söndag
//alert(new Date(1991,8,11,13,59)); // månad nollbaserat men dag 1 baserat

var age = "24";
var ageNumber = Number(age);// konvertera till number
var ageNextYear = "Nästa år är jag " + age + 1;
var ageNextYearNumber = "Nästa år är jag " + (ageNumber + 1);
//alert(ageNextYear);
//alert(ageNextYearNumber);

var ageString = String(ageNumber); //konvertera till string

//var age = prompt('Hur gammal är du?')
//if (isNaN(age)) {
//    alert('Not a number')
//}
//else {
//    alert('Du är ' + age + " år gammal")
//}

var age = ""; //Har inte ett värde
var age = ""; //Har inte ett värde
//if (age) { alert('Har ett värde!') }
//else { alert('Har inte ett värde!') }

//True - Alla strängar som inte är tomma, Alla number som inte är 0
//False - "" eller '', siffran 0

//Lösningsförslag med switch på true:
var result = prompt('Skriv en temperatur...');

//if (isNaN(result) || result.trim() === "") {
//    alert('Only numbers are allowed');
//} else {
//    switch (true) {
//    case (result < 0):
//        alert("IS");
//        break;
//    case (result >= 0 && result <= 100):
//        alert("Vatten");
//        break;
//    case (result > 100):
//        alert("Ånga");
//        break;
//    default:
//        alert('Default');
//        break;
//    }
//}

console.log('hej');