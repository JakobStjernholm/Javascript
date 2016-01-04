//javascript:

var divs = document.getElementsByTagName('div');
//Ett enda dom-pools-dyk:
var divLength = divs.length;
for (var i = 0; divLength > i; i++) {
    divs[i].style.color = "red";
}

$('button.send').on('click', function() {
    $('something').showModalDialog(); //Ett pooldyk
    $('something').addClass('myClass'); //Ett pooldyk
    $('something').style.color = 'blue'; //Ett pooldyk
    //Ligger tre ringar på botten, hämtar en i taget i bassängen.
});

$('button.better').on('click', function () {
    $('something')
        .showModalDialog()
        .addClass('myClass')
        .style.color = 'blue'; //Ett pooldyk
    //Hämtar alla ringar i samma dyk...
});


//var text = $('#ett').text();
//alert(text);

//$('.hej').text('gurka');