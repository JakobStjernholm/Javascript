////Function är alltid inläst innan en enda rad kod exekveras
//function hej() {
//    var hej = "hej";
//}

//hej();//Händer ingenting
//alert(hej);

////Denna raden kanske inte är inläst och kan 
////därmed inte anropas innan
//var variabel = function() {
//    alert('function sparad i en variabel');
//}
//variabel();

//Bästa sättet att skapa metoder på:
function namngiven(inparameter) {
    alert(inparameter);
    return [5,5,34,65,677,2,8];
}


//Function expression finns först när 
//interpreter har funnit funktionen, är alltså inte garanterad
var hej = function() {
    
}
hej(); //Körs först här

//IIFE: Immediately nvoked function expression(iffy) 
//kallas iffy
//är vanligast för event
var fun = (function(parameters) {

})(); //Körs direkt
fun(h);

var fun2 = (function (parameters) {

}()); //Körs direkt