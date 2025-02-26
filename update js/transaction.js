document.getElementById('transaction-card').addEventListener('click', function () {
    toggleHandler('transaction-history','block');
    toggleHandler('addMoney','none');
    toggleHandler('cash-out','none');
    toggleHandler('get-bonus-money','none')
    toggleHandler('transfer-money','none')
})