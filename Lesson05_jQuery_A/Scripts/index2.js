$(document).ready(function() {
    //var element = "Pris: 399 kr"; //Bad
    //var element = "<p>Pris: 399 kr </p>"; //Bad
    //Skapar ett element men lägger inte till det i DOM-trädet
    var element = $("<p>Pris: 399 kr </p>"); //Good
    //.append(),   .prepend(),   .after(),       .before()
    //.appendTo(), .prependTo(), .insertAfter(), .insertBefore();
    $('#paskmat p:first').append(element);
    $('<span>Hej</span>').appendTo($('#paskmat'));
    $('button').remove(); //Tar bort alla knappar
    
});