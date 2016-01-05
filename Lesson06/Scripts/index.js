$(function () {
    $('#search').keyup(function () {
        var searchField = $('#search').val();
        var myExp = new RegExp(searchField, "i");
        $.getJSON('wt_data.json', function (data) {
            var output = "<ul class='searchresults'>";

            $.each(data, function (key, val) {
                if ((val.name.search(myExp) !== -1) || (val.about.search(myExp) !== -1)) {
                    output += "<li>";
                    output += "<p>";
                    output += "<strong>" + val.name + "</strong>";
                    output += "<br><img alt='" + val.name + "' class='img-rounded img' src='\Images/" + val.url_image + "'><br>";
                    output += val.master_degree;

                    output += "</p>";
                    output += "</li>";
                }

            });
            output += "</ul>";
            $('#update').html(output);
            $(".img").error(function () {
                $(this).attr('src', '\Images/suddigt-full.PNG');
            });
        });
    });
});