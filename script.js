var billAmount=document.querySelector("#bill-amount");
var cashGiven=document.querySelector("#cash-given");
var checkButton=document.querySelector("#check-button");
var message=document.querySelector("#display-error");
var fillNotes=document.querySelectorAll(".fill-notes");
var availableNotes=[2000,500,100,20,10,5,1];
function calculateNotes(toBeReturned){
     
         for( let i=0;i<availableNotes.length;i++){
            let noofnotes=Math.trunc(toBeReturned/availableNotes[i]);
            
            toBeReturned=toBeReturned%availableNotes[i];
            
            fillNotes[i].innerText=noofnotes;
         }
}
checkButton.addEventListener("click",function checkValidCashGiven(){
    
    message.style.display="none";
    if((cashGiven.value)<0 || (billAmount.value)<0){
        message.style.display="block";
        message.innerText="Please enter a valid cash";
    }
    else{
        var input=(cashGiven.value)-(billAmount.value);
        if(input<0){
            
            message.style.display="block";
            message.innerText="You need to give more money";
        }
        else{
            calculateNotes(input);
         
        }
    }

});
