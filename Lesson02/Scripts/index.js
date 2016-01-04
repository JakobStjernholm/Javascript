//bubbling Capturing exempel

//hämtar ut diven
var diven = document.getElementById('one');
//Lägger till event på elementet
//e är en identifierare för event-objektet
diven.addEventListener('click',function(e) {
    alert('Jag är diven');
    e.stopPropagation(); //får inte fortsätta mer
}, true);

var stycket = document.getElementById('two');
stycket.addEventListener('click', paragraphFunction, false);

function paragraphFunction() {
    alert('Paragraph');
}