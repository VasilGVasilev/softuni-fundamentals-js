// function smallestOfThree(n1, n2, n3){
//     if (n1 <= n2 && n1 <= n3) {
//         console.log(n1);
//     } else if (n2 <= n1 && n2 <= n3) {
//         console.log(n2);
//     } else {
//         console.log(n3);
//     }
// }

// or Math.min()

// function smallest(one, two, three){
//     let smallest = Math.min(one, two, three);
//     console.log(smallest);
// }

// smallestOfThree(600,
//     342,
//     123
//     )




// NB every func that does not return a result (may print it, tho), returns result = undefined
// function addAndSubtract(n1, n2, n3){

//     // for hoisting put var = func above func delcaration
//     let sumFirstAndSecond = add(n1, n2);
//     console.log(subtract(sumFirstAndSecond, n3)); 

//     // function declarations
//     function add(a, b) {
//         return a + b;
//     }
//     function subtract(sumFirstAndSecond, third){
//         return sumFirstAndSecond - third;
//     }
// }


// addAndSubtract(23, 6, 10);






// function charInRange(first, second){
//     let temp = 0;
//     let str = [];
//     let f = first.charCodeAt(0);
//     let s = second.charCodeAt(0);
//     if (s < f){
//         temp = f;
//         f = s;
//         s = temp;
//     }
//     let len = s - f;
//     for (let i = 1; i < len; i++){
//         str.push(String.fromCharCode(f+i));
//     }
//     console.log(str.join(' '));
// }

// charInRange('a', 'd');






// function oddAndEven(num){
//     let stringedNum = num.toString();
//     let sumOfOdd = 0;
//     let sumOfEven = 0;
    
//     for (let i = 0; i < stringedNum.length; i++){
//         let numForCheck = Number(stringedNum[i]);
//         if(numForCheck == 0){
//             continue
//         } else if(numForCheck % 2 == 0){
//             even(numForCheck);
//         } else if(numForCheck % 2 != 0){
//             odd(numForCheck);
//         }
//     }
//     function odd(n){
//         sumOfOdd += n;
//     }
//     function even(n){
//         sumOfEven += n;
//     }

//     console.log(`Odd sum = ${sumOfOdd}, Even sum = ${sumOfEven}`);
// }

// oddAndEven(3495892137259234);








// function palindrome(arr){
//     let val = true;
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         let m = arr[i].toString()
//         if (m.length === 2) {
//             console.log('false');
//             continue
//         }
//         for (let j = 0; j < m.length / 2 - 1; j++){
            
//             if (Number(m[j]) !== Number(m[m.length - j - 1])) {
//                 val = false;
//                 console.log('false');
//                 break
//             }
//         }
//         let added = Number(m);
//         if (val) {
//             console.log('true');
//         }
//         val = true;
//     }

// }


// NB 
// instead of: for (let i = 0; i < arr.length; i++)
// do: for(let el of arr)
// palindrome([123,323,421,121]);





// 85/100

// function checkPass(input){
//     let passLen = false;
//     let passMinLen = false;
//     let passIsNonDigitLetter = false;
//     let digitCounter = 0;
//     if (input.length < 6 || input.length > 10) {
//         passLen = true;
//     }
//     for (let k = 0; k < input.length; k++){
//         if (input[k].charCodeAt(0) > 48 && input[k].charCodeAt(0) < 57 ){
//             digitCounter++;
//         }
//     }
//     if (digitCounter < 2){
//         passMinLen = true;
//     }
//     for (i = 0; i < input.length; i++){
//         if (input[i].charCodeAt(0) < 48 || input[i].charCodeAt(0) > 57 && input[i].charCodeAt(0) < 65 || input[i].charCodeAt(0) > 90 && input[i].charCodeAt(0) < 97 || input[i].charCodeAt(0) > 122){
//             passIsNonDigitLetter = true;
//         }

//     }
//     if (passLen === false && passMinLen === false && passIsNonDigitLetter === false){
//         console.log('Password is valid');
//     }

//     if (passLen){
//         console.log("Password must be between 6 and 10 characters");
//     }
//     if (passIsNonDigitLetter){
//         console.log("Password must consist only of letters and digits");
//     }
//     if (passMinLen){
//         console.log("Password must have at least 2 digits");
//     }
    
// }

// checkPass('kklogin3');




// function NNMatrix(num){
//     let arr = [];
//     for(let i = 0; i < num; i++){
//         for (let j = 0; j < num; j++){
//             arr.push(num);
//         }
//         console.log(...arr);
//         arr = [];
//     }
// }


// NNMatrix(7);




// function perfectNumber(num){
//     let arr = [];
//     let sum = 0;
//     for (let i = 1; i < num; i++){
//         if (num % i === 0){
//             arr.push(i);
//         }
//     }
//     for (let j = 0; j < arr.length; j++){
//         sum += arr[j];
//     }
//     if (sum === num){
//         console.log('We have a perfect number!');
//     } else {
//         console.log(`It's not so perfect.`);
//     }
// }


// perfectNumber(6);





// function loadingBar(num){
//     let number = num / 10;
//     let arrOfLoaded = [];
//     // first it is the loaded
//     for (let i = 1; i <= number; i++){
//         arrOfLoaded.push('%');
//     }
//     for (let i = number + 1; i <= 10; i++){
//         arrOfLoaded.push('.');
//     }
//     if (number < 10){
//         console.log(`${num}% [${arrOfLoaded.join('')}]`);
//         console.log(`Still loading...`);
//     } else if ( number === 10){
//         console.log(`100% Complete!`);
//     }
    
// }

// loadingBar(100);




// function fractDiv(num1, num2){
//     let factNum1 = 1;
//     let factNum2 = 1;
//     for (let i = 1; i <= num1; i++){
//         factNum1 *= i;
//     }
//     for (let j = 1; j <= num2; j++){
//         factNum2 *= j;
//     }
//     console.log((factNum1 / factNum2).toFixed(2));
// }

// fractDiv(5, 2);