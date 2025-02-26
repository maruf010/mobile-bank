// document.getElementById('cashout-money').addEventListener('click', function(event){
//     event.preventDefault();
//     const pin = document.getElementById('cashout-pin').value;
//     const convertedPin = parseInt(pin);

//     const amount = document.getElementById('cashout-amount').value;
//     const convertedAmount = parseFloat(amount);

//     const mainBalance = document.getElementById('main-balance').innerText;
//     const convertedMainBalance = parseFloat(mainBalance);

//     if(convertedPin === 1234){
//         const sub = convertedMainBalance - convertedAmount;
//         document.getElementById('main-balance').innerText = sub;
//     }
//     else{
//         alert('Enter the valid pin')
//     }
// })