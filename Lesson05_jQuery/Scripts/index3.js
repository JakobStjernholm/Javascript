//Reguljära uttryck
var text = "En rolig Star Wars text som vi skriver här, inte Sagan om ringen, Star Wars!!";
var reg = new RegExp('rolig');
//alert(reg.test(text)); // Finns rolig i text? Returnerar true eller false.


//This and that
var text2 = "that is some";
var thisThat = new RegExp(/th(is|at)/i);
// Växlar till reguljära uttryck
// i betyder case sensitive
// g betyder global, dvs hitta så många som möjligt
// m betyder multiline och letar på flera rader

//Fler reguljära uttryck
// ^ betyder måste starta med
// $ betyder måste avslutas med

//            /(lisa)*/ matchar även lisalisa, lisalisalisa
//            /lisa*/ ger lis, lisa, lisaa, lisaaa osv... noll-till många av 'a'
//            /lisa+/ ger lisa, lisaa, lisaaa osv... en-till många förekomster av 'a'
//            /lisa?/ ger lisa, lisa
//            /lisa{2,3}/ ger lisaa, lisaaa ... två eller tre förekomster av 'a'

//alert(thisThat.test(text2));
// String RegExp metoder:
//alert("hej du glade".search(/glade/)); //hittades på pos 7

alert('hej du glade'.match('hej'));
alert('hej du glade'.replace(/[aeiouåäö]/g,"*"));