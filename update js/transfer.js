document.getElementById('btn-transfer-money').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('sender-account-number').value;
    const pin = getValueById('transfer-pin');
    const amount = getValueById('transfer-amount');
    const mainBalance = getInnerTextById('main-balance');

    if (accountNumber.length === 11) {
        if (pin === 1234) {
            const minus = mainBalance - amount;
            setInnerTextByIdValue('main-balance', minus);

            const container = document.getElementById('transaction-container');
            const div = document.createElement('div');
            div.classList.add('bg-red-400', 'mt-2', 'rounded-lg');

            div.innerHTML = `
                <h1 class="text-white text-lg ml-4 pt-2">Money Transfer </h1>
                <h3 class="text-white ml-4">Transfer Amount: ${amount} $</h3>
                <p class="text-white ml-4">Receiver Account: ${accountNumber}</p>
                <p class="text-white ml-4 pb-2">Total Balance: ${minus} $</p>
                `

            container.appendChild(div);
        }
        else {
            alert('Wrong Pin')
        }
    }
    else {
        alert('account number is not valid')
    }
})