'use strict';

const inputNum = prompt('Enter a number.');

if (inputNum === null){
   alert('You canceled the input.')
} else if ( !inputNum.trim() ) {
    alert('Your input is empty.'); 
} else if ( Number.isNaN(inputNum) ) {
    alert('Your input is empty.');
} else if ( ! Number.isInteger(Number(inputNum))){
    alert('Must be integer.')
}else{
 let count = 0
 for ( let i = 1; i <= inputNum; i++){
    let divResult = inputNum / i;
    if ( Number.isInteger(divResult)){
    count ++;
    }
 }

(count <= 2) ? console.log(`${inputNum} is a prime number`) :console.log(`${inputNum} is NOT a prime number`);
}