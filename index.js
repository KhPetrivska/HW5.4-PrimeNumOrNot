'use strict';

const inputNum = prompt('Enter a number.');

if (inputNum === null){
   alert('You canceled the input.')
} else if ( !inputNum.trim() ) {
    alert('Your input is empty.'); 
} else if ( Number.isNaN(inputNum) ) {
    alert('Your input is empty.');
} else if ( ! Number.isInteger(Number(inputNum)) || inputNum < 0){
    alert('Must be natural number.')
}else{ 
 if (Number(inputNum) === 1){
    console.log(`${inputNum} is NOT a prime number`)
 }else{
 let divResult = null
 for ( let i = 2; i < inputNum; i++){
    if ( inputNum % i === 0 ){
        divResult ++;
        console.log( divResult)
        break;
    }
 }

divResult ? console.log(`${inputNum} is NOT a prime number`) :console.log(`${inputNum} is a prime number`);
}
}

// if (inputNum === null){
//    alert('You canceled the input.')
// } else if ( !inputNum.trim() ) {
//     alert('Your input is empty.'); 
// } else if ( Number.isNaN(inputNum) ) {
//     alert('Your input is empty.');
// } else if ( ! Number.isInteger(Number(inputNum))){
//     alert('Must be integer.')
// }else{
// let count = 0

//  for ( let i = 1; i <= inputNum; i++){
//     const divResult = inputNum / i;

//     if ( Number.isInteger(divResult)){
//     count ++;
//     }
//  }

// count === 2 ? console.log(`${inputNum} is a prime number`) :console.log(`${inputNum} is NOT a prime number`);
// }