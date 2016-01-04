//Output:

//window.alert("Hej");
//document.write("Hallådär");
//var result = document.getElementById('ett');
//result.innerHTML = 'Goddag';


var vikt = document.getElementById('vikt').value;
var length = document.getElementById('length').value;
document.getElementById('bmi').addEventListener('click', calculateBMI, false);

document.getElementById('fatthin').addEventListener('click', fatso, false);

function calculateBMI() {
    var vikt = document.getElementById('vikt').value;
    var length = document.getElementById('length').value;
    alert(vikt / (length * length));
}

function fatso() {
    var vikt = document.getElementById('vikt').value;
    var length = document.getElementById('length').value;
    var result = vikt / (length * length);
    
    switch (true) {
        case result < 20:
            alert('You are thin! Good work');
            break;
        case result >= 20 && result <= 25:
            alert('You are Average! May the force be with you!');
            break;
        case result > 25:
            alert('You are Fat! I am so sorry!');
            break;
        default:
            alert('It seems you don\'t weigh anything, weird...');
            break;
    }
}