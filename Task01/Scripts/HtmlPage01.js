document.getElementById('btn').addEventListener('click', calculateSale, false);

function calculateSale() {
    var salary = document.getElementById('salary').innerHTML;
    var interest = document.getElementById('salary').innerHTML;
    var salePrice = document.getElementById('saleprice').value;
    interest = interest / 100;
    salary = salary + (salePrice * 1.09 );

    document.getElementById('endSalary').innerHTML = salary;
}