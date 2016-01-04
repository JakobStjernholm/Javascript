//Skapar en <p> tagg
var element = document.createElement('p');
//Lägger till innehåll i <p> taggen
element.textContent = "Detta är ett stycke!";
//Lägger till klassen gosnalle på <p> taggen
element.setAttribute('class', 'gosnalle');
//Ändrar bakgrundsfärgen "inline"
element.style.backgroundColor = 'green';

//För att koppla elementet till HTML-sidan måste vi hämta ut ett befintligt element och lägga till vårt nya

var existingElement = document.getElementById('ett');
existingElement.appendChild(element);

//Hämta ut många genom nodlista:
var nodlista = document.getElementsByTagName('p');
for (var i = 0; i < nodlista.length; i++) {
    alert(nodlista[i].innerHTML);
}

var lista = document.getElementsByClassName('gosnalle');
alert(lista[0].innerHTML);

//var t = document.querySelectorAll('div>p');

//Remove element:
var elementet = document.getElementById('ett');
//Måste gå till parent och ta bort dess child
elementet.parentElement.removeChild(elementet);

//Remove many elements:
var listElements = document.getElementsByTagName('p');
for (var i = listElements.length; 0 <= i; i--) {
    if (listElements[i] && listElements[i].parentElement) {
        listElements[i].parentElement.removeChild(listElements[i]);
    }
}