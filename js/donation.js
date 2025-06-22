// main-account
document.getElementById('donateN').addEventListener('click',function(event){
    event.preventDefault();
    const mainBalance=getTextValue('main-account');
    const inputBalance=getInputValue('inputN');
    const showBalance=getTextValue('showN');
    if(isNaN(inputBalance)){
        alert('Invalid Input');
        return;
    }
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
            <p>${inputBalance} is donated for flood relief in Noakhali , Bangladesh.</p>
            <p>${timeString}</p>
        `
        document.getElementById('history-container').appendChild(div);
    }
    else if(mainBalance<=0){
        alert('Your Account Balance Is Not Enough');
    }
    else{
        alert('Invalid Input');
    }


});

document.getElementById('donateF').addEventListener('click',function(event){
    event.preventDefault();
    const mainBalance=getTextValue('main-account');
    const inputBalance=getInputValue('inputF');
    const showBalance=getTextValue('showF');
    if(isNaN(inputBalance)){
        alert('Invalid Input');
        return;
    }
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
            <p>${inputBalance} is donated for flood relief in Feni , Bangladesh.</p>
            <p>${timeString}</p>
        `
        document.getElementById('history-container').appendChild(div);
    }
    else if(mainBalance<=0){
        alert('Your Account Balance Is Not Enough');
    }
    else{
        alert('Invalid Input');
    }
});

document.getElementById('donateQ').addEventListener('click',function(event){
    event.preventDefault();
    const mainBalance=getTextValue('main-account');
    const inputBalance=getInputValue('inputQ');
    const showBalance=getTextValue('showQ');
    if(isNaN(inputBalance)){
        alert('Invalid Input');
        return;
    }
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
            <p>${inputBalance} is donated for the injured in the quota movement.</p>
            <p>${timeString}</p>
        `
        document.getElementById('history-container').appendChild(div);
    }
    else if(mainBalance<=0){
        alert('Your Account Balance Is Not Enough');
    }
    else{
        alert('Invalid Input');
    }
});