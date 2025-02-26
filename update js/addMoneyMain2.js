document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getValueById('add-amount');
    const pin = getValueById('pinNumber');
    const accountNumber = document.getElementById('account-number').value;
    const mainBalance = getInnerTextById('main-balance');

    if (amount < 0){
        alert('Enter a Positive Amount')
        return;
    }

        if (accountNumber.length === 11) {
            if (pin === 1234) {
                const sum = mainBalance + amount;
                // document.getElementById('main-balance').innerText = sum;
                setInnerTextByIdValue('main-balance', sum);

                const container = document.getElementById('transaction-container');
                const p = document.createElement('p');
                p.innerText = `
            Added ${amount}$ from ${accountNumber} Account
            `
                container.appendChild(p);

            }
            else {
                alert('Please enter your Right pin')
            }
        }
        else {
            alert('Account number is Incorrect')
        }

})