function getInputValue(id){
    const text=document.getElementById(id).value;
    const val=parseFloat(text);
    return val;
};
function getTextValue(id){
    const text=document.getElementById(id).innerText;
    const val=parseFloat(text);
    return val;

};