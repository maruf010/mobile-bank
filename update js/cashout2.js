document.getElementById('cashout-money').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const amount = getValueById('cashout-amount');
    const pinNumber = getValueById('cashout-pin');
    const mainBalance = getInnerTextById('main-balance');
    const selectBank = document.getElementById('select-bank').value;

    if (amount > mainBalance){
        alert('Insuficient Balance')
        return;
    }

        if (accountNumber.length === 11) {
            if (pinNumber === 1234) {
                const sub = mainBalance - amount;
                setInnerTextByIdValue('main-balance', sub);

                const container = document.getElementById('transaction-container');
                const div = document.createElement('div');
                div.classList.add('bg-red-400','mt-2','rounded-lg');

                div.innerHTML = `
                <h1 class="text-white text-lg ml-4 pt-2">Cash Out</h1>
                <h3 class="text-white ml-4">Amount: ${amount} $</h3>
                <p class="text-white ml-4">Sender: ${accountNumber}</p>
                <p class="text-white ml-4 pb-2">Total Balance: ${sub} $</p>
                `
                container.appendChild(div);

            }
            else {
                alert('Invalid Pin');
            }
        }
        else {
            alert('Invalid Number');
        }
})