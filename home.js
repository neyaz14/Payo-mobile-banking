
// step 1: Event handler add
// step 2: Check Pin
// step 3: Get amount from input
// step 4: Get current Balance
// step 5: Calculate and Update and set updated ballance
// 

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    console.log('clicked');
    const currentBalance = document.getElementById('current-balance').innerText;
    const amountMoney = document.getElementById('amount-add').value;
    const pinNum = document.getElementById('pin-number').value;
    if(pinNum==='1'){
        console.log(currentBalance, amountMoney, pinNum);
        const NewBalance=  Number(currentBalance)+ Number(amountMoney);
        console.log(NewBalance);
        document.getElementById('current-balance').innerText = NewBalance;
    }
    else{
        alert('Failed to add Money , Please try again')
    }

})


// Cash Out money

document.getElementById('btn-cashout-money').addEventListener('click', function(event){
    event.preventDefault();
    console.log('clicked');
    const currentBalance = document.getElementById('current-balance').innerText;
    const cashoutMoney = document.getElementById('cashout-amount').value;
    const pinNum = document.getElementById('pin-number-out').value;
    if(pinNum ==='1' && Number(currentBalance)>Number(cashoutMoney)){
        console.log(currentBalance, cashoutMoney, pinNum);
        const NewBalance=  Number(currentBalance)- Number(cashoutMoney);
        console.log(NewBalance);
        document.getElementById('current-balance').innerText = NewBalance;
    }
    else{
        alert('Failed to Cashout  Money , Please try again')
    }

})