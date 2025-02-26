document.getElementById('cashout-money').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const amount = getValueById('cashout-amount');
    const pinNumber = getValueById('cashout-pin');
    const mainBalance = getInnerTextById('main-balance');

    if (amount > mainBalance){
        alert('Insuficient Balance')
        return;
    }

        if (accountNumber.length === 11) {
            if (pinNumber === 1234) {
                const sub = mainBalance - amount;
                setInnerTextByIdValue('main-balance', sub);

                const container = document.getElementById('transaction-container');
                const p = document.createElement('p');
                p.innerText = `
            Cash Out ${amount}$ from this ${accountNumber} Account
            `
                container.appendChild(p);

            }
            else {
                alert('Invalid Pin');
            }
        }
        else {
            alert('Invalid Number');
        }
})