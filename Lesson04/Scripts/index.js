document.getElementById('ett').addEventListener('click', function (e) {
    alert('Diven');
    //e.stopPropagation();//Hindrar framfarten av eventet

    document.getElementById('two').removeEventListener('click', fun,true);//Funkar bara om function är namngiven


    //Om detta eventet tex legat på en knapp
    //kan vi ta bort knappens standardbeteende med följande kod:
    e.preventDefault(); //Förhindrar ett standardbeteende
}, false);  //IsCapturing / fångar på vägen ner


document.getElementById('two').addEventListener('click', fun,true);

function fun() {
    alert('Paragrafen');
}