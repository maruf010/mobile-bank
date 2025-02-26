document.getElementById('btn-bonus').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('receiver-account-number').value;
    const amount = getValueById('bonus-amount');
    const pin = getValueById('bonus-pin');
    const mainBalance = getInnerTextById('main-balance');
    if (accountNumber.length === 11) {
        if (pin === 1234) {
            if(amount >= 1000){
                const bonus = amount + 100;
                const addBonus = mainBalance + bonus;
                setInnerTextByIdValue('main-balance', addBonus);
    
                const container = document.getElementById('transaction-container');
                const div = document.createElement('div');
                div.classList.add('bg-blue-400', 'mt-2', 'rounded-lg');
    
                div.innerHTML = `
                    <h1 class="text-white text-lg ml-4 pt-2">Money Added with Bonus </h1>
                    <h3 class="text-white ml-4">Added Amount: ${amount} $</h3>
                    <h3 class="text-white ml-4">Bonus Amount : 100 $</h3>
                    <p class="text-white ml-4">Receiver Account: ${accountNumber}</p>
                    <p class="text-white ml-4 pb-2">Total Balance: ${addBonus} $</p>
                    `
    
                container.appendChild(div);
            }
            else{
                const addBonus = mainBalance + amount;
                setInnerTextByIdValue('main-balance', addBonus);
    
                const container = document.getElementById('transaction-container');
                const div = document.createElement('div');
                div.classList.add('bg-orange-300', 'mt-2', 'rounded-lg');
    
                div.innerHTML = `
                    <h1 class="text-white text-lg ml-4 pt-2">Money added without bonus </h1>
                    <h3 class="text-white ml-4">Added Amount: ${amount} $</h3>
                    <p class="text-white ml-4">Receiver Account: ${accountNumber}</p>
                    <p class="text-white ml-4 pb-2">Total Balance: ${addBonus} $</p>
                    `
    
                container.appendChild(div);
            }

        }
        else {
            alert('Wrong Pin')
        }
    }
    else {
        alert('Invalid Number')
    }
})