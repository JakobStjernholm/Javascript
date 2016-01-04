var salary = document.getElementById("salary").innerHTML;
var taxes = document.getElementById("taxes").innerHTML;
var church = document.getElementById("church").innerHTML;
document.getElementById("money").innerHTML = getSalary(salary, taxes, church);




function getSalary(salary,taxes,church) {
    if (church == 'Ja') {
        return salary * 0.69;
    } else {
        return salary * 0.7;
    }
}


var savings = document.getElementById("savings").innerHTML;
var years = document.getElementById("years").innerHTML;
var interest = document.getElementById("interest").innerHTML;
document.getElementById("moneyYouSaved").innerHTML = calculateInterest(savings, years, interest);


function calculateInterest(savings, years, interest) {
    
    var months;

    for (var i = 0; i < years; i++) {
        months = months + 12;
    }
    for (var o = 0; o < months; o++) {
        savings = savings * 1.04;
    }
    return savings;
}