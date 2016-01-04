var hej = 0; //läggs i det globala scoopet
function name() {
    var hej = 7; // Lokala scoop är skyddat här inne
    heja = 7 + 21000; //Globala scoopet pga stavfel
    alert(heja);
}

name();
alert(hej);