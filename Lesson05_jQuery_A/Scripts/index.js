$(document).ready(function () {
    ////Ett element
    //var text = $('h1').text(); // Hämtar texten
    //$('p').text("på julafton äter man samma sak som på påsken..");
    ////Ändra i många element:
    //var lista = $('li');
    ////lista.text("Star Wars");

    ////2 pooldykningar
    ////$('#julmat li').text('jul');

    ////$('#julmat li:odd').text("udda jul-mat");
    //$('#julmat li').odd.text("udda jul-mat");//Färre pooldykningar, snabbare kod

    $('#paskmat li'); // Frestande men två pooldyk...
    $('#paskmat').find('li');//Sköter allt när vi ändå är på plats 1 dyk
    $('li').first().next(); // Element 2 genom att ta ett steg framåt
    $('li').last().prev(); // Näst sista elementet
    $('li').first().parent(); //Gå till föräldern dvs <ul>-elementet
    $('#julmat').children('li'); //Gå till alla direkta barn som är <li>
    $('#julmat').find('li'); // hittar alla li i #julmat
});