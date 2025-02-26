document.getElementById('cash-out').style.display = "none";
document.getElementById('addMoney').style.display = "none";


document.getElementById('add-money-card').addEventListener('click', function () {
    toggleHandler('addMoney', 'block');
    toggleHandler('cash-out', 'none');
    toggleHandler('transaction-history', 'none');
})
document.getElementById('cash-out-card').addEventListener('click', function () {
    toggleHandler('addMoney', 'none');
    toggleHandler('cash-out', 'block');
    toggleHandler('transaction-history', 'none');
})



function toggleHandler(id, status) {
    document.getElementById(id).style.display = status;
}