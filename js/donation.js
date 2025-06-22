// main-account
document.getElementById('donateN').addEventListener('click',function(event){
    event.preventDefault();
    const mainBalance=getTextValue('main-account');
    const inputBalance=getInputValue('inputN');
    const showBalance=getTextValue('showN');

    if(inputBalance>0 && inputBalance<=mainBalance){
        
        const newBalance=showBalance+inputBalance;
        const newMainBalance=mainBalance-inputBalance;
        document.getElementById('showN').innerText=newBalance;
        document.getElementById('main-account').innerText=newMainBalance;

        const div=document.createElement('div');
        div.classList.add('history');
        const now = new Date();
        const timeString = now.toLocaleString();
        div.innerHTML=`
            <p>${inputBalance} BDT is donated for flood relief in Noakhali , Bangladesh.</p>
            <p>${timeString}</p>
        `
        document.getElementById('history-container').appendChild(div);
    }


});

document.getElementById('donateF').addEventListener('click',function(event){
    event.preventDefault();
    const mainBalance=getTextValue('main-account');
    const inputBalance=getInputValue('inputF');
    const showBalance=getTextValue('showF');

    if(inputBalance>0 && inputBalance<=mainBalance){
        
        const newBalance=showBalance+inputBalance;
        const newMainBalance=mainBalance-inputBalance;
        document.getElementById('showF').innerText=newBalance;
        document.getElementById('main-account').innerText=newMainBalance;

        const div=document.createElement('div');
        div.classList.add('history');
        const now = new Date();
        const timeString = now.toLocaleString();
        div.innerHTML=`
            <p>${inputBalance} BDT is donated for flood relief in Feni , Bangladesh.</p>
            <p>${timeString}</p>
        `
        document.getElementById('history-container').appendChild(div);
    }
    
});

document.getElementById('donateQ').addEventListener('click',function(event){
    event.preventDefault();
    const mainBalance=getTextValue('main-account');
    const inputBalance=getInputValue('inputQ');
    const showBalance=getTextValue('showQ');

    if(inputBalance>0 && inputBalance<=mainBalance){
        
        const newBalance=showBalance+inputBalance;
        const newMainBalance=mainBalance-inputBalance;
        document.getElementById('showQ').innerText=newBalance;
        document.getElementById('main-account').innerText=newMainBalance;

        const div=document.createElement('div');
        div.classList.add('history');
        const now = new Date();
        const timeString = now.toLocaleString();
        div.innerHTML=`
            <p>${inputBalance} BDT is donated for the injured in the quota movement.</p>
            <p>${timeString}</p>
        `
        document.getElementById('history-container').appendChild(div);
    }
    
});





function showRewardCard(id) {
            const amount = document.getElementById(id).value;
            const mainBalance=getTextValue('main-account');
            if (!amount || amount <= 0 || amount>mainBalance || isNaN(amount)) {
                alert('Please enter a valid donation amount.');
                return;
            }

            document.getElementById('amount').textContent = amount;
            document.getElementById('reward-card').classList.add('show');
            document.getElementById('overlay').classList.add('show');
        }

        function closeRewardCard(id) {
            document.getElementById('reward-card').classList.remove('show');
            document.getElementById('overlay').classList.remove('show');
            document.getElementById(id).value = '';
        }
