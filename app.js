const form = document.querySelector("form");
const amount = document.querySelector(".amount input");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const rates={
    USD:1,
    INR:74.5
};
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const value = amount.value;
    const fromCurrency = from.value;
    const toCurrency = to.value;
    if(amount.value.trim()===""||isNaN(value)||value<=0){

        msg.innerHTML="Please enter a valid amount";
        return;
    }
    const result=value*rates[toCurrency]/rates[fromCurrency];
    msg.innerHTML=`${value} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
});