document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const amount = getValueById('add-amount');
    const pin = getValueById('pinNumber');
    const mainBalance = getInnerTextById('main-balance');

    const selectBank = document.getElementById('select-bank').value;
    // console.log(selectBank)

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
                const div = document.createElement('div');
                div.classList.add('bg-green-400','mt-2','rounded-lg')

                div.innerHTML = `
                <h1 class="text-white text-lg ml-4 pt-2">Received Money from ${selectBank}</h1>
                <h3 class="text-white ml-4">Amount: ${amount} $</h3>
                <p class="text-white ml-4">Sender: ${accountNumber}</p>
                <p class="text-white ml-4 pb-2">Total Balance: ${sum} $</p>
                `
                container.appendChild(div);

            }
            else {
                alert('Please enter your Right pin')
            }
        }
        else {
            alert('Account number is Incorrect')
        }

})