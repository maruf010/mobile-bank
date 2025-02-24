document.getElementById('cash-out').style.display = 'none';

document.getElementById('add-money-card').addEventListener('click',function(){
    document.getElementById('addMoney').style.display = 'block';
    document.getElementById('cash-out').style.display = 'none';
})
document.getElementById('cash-out-card').addEventListener('click',function(){
    document.getElementById('cash-out').style.display = 'block'
    document.getElementById('addMoney').style.display = 'none'
})