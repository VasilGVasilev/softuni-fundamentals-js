// by just setting each if as the grade being max 3.50, max 4.50, it leaves room for the algo to find on its own by chaining where 5.00 will fit
// function formatGrade(grade){
//     if (grade < 3.00){
//         console.log(`Fail (2)`);
//     } else if (grade < 3.50){
//         console.log(`Poor (${grade.toFixed(2)})`);
//     } else if (grade < 4.50){
//         console.log(`Good (${grade.toFixed(2)})`);
//     } else if (grade < 5.50){
//         console.log(`Very good (${grade.toFixed(2)})`);
//     } else if (grade >= 5.50){
//         console.log(`Excellent (${grade.toFixed(2)})`);
//     }
// }

// formatGrade(4.23);




// function mathPower(num, power){
//     let sum = 1;
//     for (let i = 1; i <= power; i++){
//         sum*=num
//     }
//     console.log(sum);
// }

// mathPower(2, 8);





// return keyword immediately stops the function's execution!
// function repeatString(s, n){
//     let newS = '';
//     for (let i = 0; i < n; i++){
//         newS += s;
//     }
//     return newS;
// }
// returned value can ben addigned to a var/used in expression/passed to another function

// const max = repeatString('abc', 3);
// console.log(max);






// function orders(product, q){
//     let price = 0;
//     switch(product) {
//         case 'coffee':
//             price = 1.50 * q;
//             console.log(price.toFixed(2));
//             break;
//         case 'water':
//             price = 1.00 * q;
//             console.log(price.toFixed(2));
//             break;
//         case 'coke':
//             price = 1.40 * q;
//             console.log(price.toFixed(2));
//             break;
//         case 'snacks':
//             price = 2.00 * q;
//             console.log(price.toFixed(2));
//             break;
//       }
// }

// orders('water', 5);




// usually arrow functions are attached to a var like function expression

// function simpleCalc(n1, n2, operator){
//     let sum = 0;
//     switch(operator){
//         case 'multiply': sum = n1 * n2; console.log(sum); break;
//         case 'divide': sum = n1 / n2; console.log(sum); break;
//         case 'add': sum = n1 + n2; console.log(sum); break;
//         case 'subtract': sum = n1 - n2; console.log(sum); break;
//     }
    
    
// }

// simpleCalc(2, 2, 'divide');


// simpleCalc();




// function signCheck(n1, n2, n3){
//     if (n1 < 0 && n2 < 0 && n3 > 0){
//         console.log('Positive');
//     } else if (n1 > 0 && n2 < 0 && n3 < 0){
//         console.log('Positive');
//     } else if (n1 > 0 && n2 > 0 && n3 > 0){
//         console.log('Positive');
//     } else if (n1 < 0 && n2 < 0 && n3 < 0){
//         console.log('Negative');
//     } else if (n1 < 0 || n2 < 0 || n3 < 0){
//         console.log('Negative');
//     } 
// }

// signCheck(-6, -12, -14);