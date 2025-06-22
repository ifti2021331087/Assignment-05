document.getElementById('donation-tab').addEventListener('click',function(){
    showExceptID();
    document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('donation-tab').classList.add('active');
});

document.getElementById('history-tab').addEventListener('click',function(){
    showExceptID();
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('history-tab').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click',function(){
    showExceptID();
    document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('donation-tab').classList.add('active');
});