var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "Plants.xml");
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        var common = request.responseXML.getElementsByTagName("COMMON");
        var price = request.responseXML.getElementsByTagName("PRICE");
        var output = "<ul>";
        for (var i = 0; i < common.length; i++) {
            output += "<li>Common: " + common[i].firstChild.nodeValue + " </br>Price: " + price[i].firstChild.nodeValue + "</li>";
        }
        output += "</ol>";
        document.getElementById('ett').innerHTML = output;
    }
}
request.send();