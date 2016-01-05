$(function() {
    $('button').on('click', function() {
        //Körs när knappen tryckts
        var price = $('<p>39.90 kr/kg</p>');
        $(this).after(price);
        this.remove();
        //Hämta <ul>-elementet
        //$(this).parent().parent().append(price);

        //Hämtar alla föräldrar och farföräldrar osv som är desert
        //$(this).parents('.desert').append(price);
        $(this).closest('.dinner').append(price); //Bästa sättet att hämta ut, hämtar ur ett element
    });
});