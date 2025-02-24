document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();

    const pin = document.getElementById('pinNumber').value;
    const pinNew = parseInt(pin)

    const addAmount = document.getElementById('add-amount').value;
    const convertedAmount = parseFloat(addAmount);
    
    const mainBalance = document.getElementById('main-balance').innerText;
    const addMainBalance = parseFloat(mainBalance);

    if(addAmount && pin){
        if(pinNew === 1234){
            const sum = convertedAmount + addMainBalance;
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert("Incorrect Pin! Please Type Correct Pin.");
        }
    }
    else{
        alert('Fill-up the all input Please')
    }
})