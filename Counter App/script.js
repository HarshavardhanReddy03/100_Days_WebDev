var counterElement =document.getElementById("disp");
var incrementButton =document.getElementById("add");
var decrementButton = document.getElementById("sub");
var resetButton = document.getElementById("reset")

var counterValue = 0;

function updateCounter() {
    counterElement.value = counterValue;
}

incrementButton.addEventListener("click", function() {
    counterValue++;
    updateCounter();
});

decrementButton.addEventListener("click",function(){
    counterValue--;
    updateCounter();
});

resetButton.addEventListener("click",function()
{
    counterValue = 0;
    updateCounter();
});