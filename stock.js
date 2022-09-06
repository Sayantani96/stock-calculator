var btnCheck=document.querySelector('#result-btn');
var initialPrice=document.querySelector('#initial-price');
var numberOfStocks=document.querySelector('#number-of-stocks');
var currentPrice=document.querySelector('#current-price');
var statement=document.querySelector('#statement');

btnCheck.addEventListener('click',function displayStatement(){
        var result=[];
        if(currentPrice.value=='' && initialPrice.value==''){
            statement.innerText='No pain no gain and no gain no pain'
        }
        if(currentPrice.value-initialPrice.value>0){
            result=calculateProfit(currentPrice.value,initialPrice.value,numberOfStocks.value);
            statement.innerText=`Hey, the profit is ${result[0]} and the percent is ${result[1]}%`
        }
        if(initialPrice.value-currentPrice.value>0){
            // console.log("Loss");
            result=calculateLoss(initialPrice.value,currentPrice.value,numberOfStocks.value);
            statement.innerText=`Hey, the loss is ${result[0]} and the percent is ${result[1]}%`
        }
        console.log("clicked");
})

function calculateProfit(current,initial,number){
    // console.log(current);
    var profit=current*number-initial*number;
    var profitpercent=(profit/initial)*100;
    return [profit,profitpercent];
}
function calculateLoss(initial,current,number){
    var loss=initial*number-current*number;
    var losspercent=(loss/initial)*100;
    return [loss,losspercent];
}