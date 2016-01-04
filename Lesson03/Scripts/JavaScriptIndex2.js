var element = document.createElement('article');
element.textContent = "Detta är nu en article";

element.setAttribute('class', 'myStyle');

var diven = document.getElementById('ett');
diven.appendChild(element);