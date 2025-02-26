document.getElementById('cash-out').style.display = "none";
// document.getElementById('addMoney').style.display = "none";
document.getElementById('transfer-money').style.display = 'none';
document.getElementById('get-bonus-money').style.display = 'none';
document.getElementById('transaction-history').style.display = 'none';

document.getElementById('add-money-card').addEventListener('click', function () {
    toggleHandler('addMoney', 'block');
    toggleHandler('cash-out', 'none');
    toggleHandler('transfer-money','none');
    toggleHandler('get-bonus-money','none')
    toggleHandler('transaction-history', 'none');
})
document.getElementById('cash-out-card').addEventListener('click', function () {
    toggleHandler('cash-out', 'block');
    toggleHandler('addMoney', 'none');
    toggleHandler('transfer-money','none');
    toggleHandler('get-bonus-money','none')
    toggleHandler('transaction-history', 'none');
})
document.getElementById('get-bonus-card').addEventListener('click',function(){
    toggleHandler('get-bonus-money','block')
    toggleHandler('cash-out', 'none');
    toggleHandler('addMoney', 'none');
    toggleHandler('transfer-money','none')
    toggleHandler('transaction-history', 'none');

})
document.getElementById('transfer-card').addEventListener('click',function(){
    toggleHandler('transfer-money','block')
    toggleHandler('addMoney', 'none');
    toggleHandler('cash-out', 'none');
    toggleHandler('get-bonus-money','none')
    toggleHandler('transaction-history', 'none');

})

function toggleHandler(id, status) {
    document.getElementById(id).style.display = status;
}