const tipCalc  = () => {
let bill = document.querySelector('#bill').value;
let tipPercent = document.querySelector('#Tip-Percent').value;
let tipAmount = document.querySelector('#Tip-Amount');
let totalAmount = document.querySelector('#Total-Amount');
let button = document.querySelector('#button');

let tip = (bill * tipPercent) / 100;
tipAmount.value = tip;

totalAmount.value = parseInt(bill) + parseInt(tip);

button.addEventListener("click", tipCalc);
}




window.onload = tipCalc();
