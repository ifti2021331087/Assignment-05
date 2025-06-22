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
    if(inputBalance>0 && inputBalance<=mainBalance){
        
        const newBalance=showBalance+inputBalance;
        const newMainBalance=mainBalance-inputBalance;
        document.getElementById('showF').innerText=newBalance;
        document.getElementById('main-account').innerText=newMainBalance;
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
    if(inputBalance>0 && inputBalance<=mainBalance){
        
        const newBalance=showBalance+inputBalance;
        const newMainBalance=mainBalance-inputBalance;
        document.getElementById('showQ').innerText=newBalance;
        document.getElementById('main-account').innerText=newMainBalance;
    }
    else if(mainBalance<=0){
        alert('Your Account Balance Is Not Enough');
    }
    else{
        alert('Invalid Input');
    }
});