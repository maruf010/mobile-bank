// alert("Welcome to Mobile Bank !")
document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const accountPassword = document.getElementById('account-password').value;
    const pinInt = parseInt(accountPassword);
    if(accountNumber.length === 11){
        if(pinInt === 1234){
            window.location.href= "./main.html"
        }
        else{
            alert('wrong Pin')
        }
    }
    else{
        alert('Incorrect Number')
    }
})