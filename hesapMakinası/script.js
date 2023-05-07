const display =document.querySelector('.calculator-input');
const keys =document.querySelector('.calculator-keys');

let displayValue='0';


updateDisplay();
function updateDisplay(){
    display.value=displayValue;

}
keys.addEventListener('click',function(e){
    const element =e.target;
    if (!element.matches('button')) return;

    if(element.classList.contains('operator')){
        console.log('operator',element.value);
        return;
    }
    if(element.classList.contains('decimal')){
        console.log('decimal',element.value);
        return;
    }
    if(element.classList.contains('clear')){
        console.log('clear',element.value);
        return;
    }

   // console.log('number',element.value);

   inputNumber(element.value);
   updateDisplay();
});
function inputNumber(num){
    displayValue =num;
}