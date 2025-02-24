document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addAmount = document.getElementById('add-amount').value;
    const convertedAmount = parseFloat(addAmount);
    const pin = document.getElementById('pinNumber').value;
    const pinNew = parseInt(pin)
    
    const mainBalance = document.getElementById('main-balance').innerText;
    const addMainBalance = parseFloat(mainBalance);

    if(pinNew === 1234){
        const sum = convertedAmount + addMainBalance;
        document.getElementById('main-balance').innerText = sum;
    }
    else{
        console.log("Wrong Pin");
    }
})