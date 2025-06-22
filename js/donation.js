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