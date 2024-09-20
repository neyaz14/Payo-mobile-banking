document.getElementById('add-money-show-form-btn')
    .addEventListener('click', function(){
        document.getElementById('add-money-form').classList.remove('hidden');
        document.getElementById('cashout-form').classList.add('hidden');

})
document.getElementById('cashout-show-form-btn')
    .addEventListener('click', function(){
        document.getElementById('add-money-form').classList.add('hidden');
        document.getElementById('cashout-form').classList.remove('hidden');

})