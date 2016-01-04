var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET","json.json",true);
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        var jsonObject = JSON.parse(request.responseText);
        var output = "<ul>";
        for (var i = 0; i < jsonObject.fathers.length; i++) {
            output += "<li>" + jsonObject.fathers[i].id + " : " + jsonObject.fathers[i].name + "</li>";
        }
        output += "</ul>";
        document.getElementById("result").innerHTML = output;
    }
}
request.send();