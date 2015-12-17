//Output:

window.alert("Hej");
document.write("Hallådär");
var result = document.getElementById('ett');
result.innerHTML = 'Goddag';

alert(document.getElementById('ett').innerHTML);
var vikt = document.getElementById('vikt').innerHTML;
var length = document.getElementById('length').innerHTML;
document.getElementById('bmi').innerHTML = calculateBMI(length,vikt);


function calculateBMI(length, vikt) {
    return vikt / (length * length);
}