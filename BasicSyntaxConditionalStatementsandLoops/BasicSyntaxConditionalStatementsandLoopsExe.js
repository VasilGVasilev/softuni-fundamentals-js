// function age(n) {
//     if (n < 0){
//         console.log('out of bounds');
//     } else if (n <= 2) {
//         console.log('baby');
//     } else if (n <= 13) {
//         console.log('child');
//     } else if (n <= 19) {
//         console.log('teenager');
//     } else if (n <= 65) {
//         console.log('adult');
//     } else if (n > 65) {
//         console.log('elder');
//     }
// }

// function precise(number, precision) {
//     if (precision > 15) {
//         precision = 15;
//     }

//     let resultNumber = parseFloat(number.toFixed(precision));
// parseFloat because .toFixed() returns a string
//     console.log(resultNumber);
//     console.log(typeof resultNumber);
//     // .toFixed reduces to the fixed number to appear after the decimal point
// }

// Start with biggest number as said in the exercise
// function division (n) {
//     if (n % 10 === 0) {
//         console.log('The number is divisible by 10');
//     } else if (n % 7 === 0) {
//         console.log('The number is divisible by 7');
//     } else if (n % 6 === 0) {
//         console.log('The number is divisible by 6');
//     } else if (n % 3 === 0) {
//         console.log('The number is divisible by 3');
//     } else if (n % 2 === 0) {
//         console.log('The number is divisible by 2');
//     } else {
//         console.log('Not divisible');
//     }
// }

// function vacation(number, group, day) {

//     if (day === 'Friday') {
//         if (group === 'Students') {
//             let studentPrice = 8.45;
//             var studentEndPrice = studentPrice*number;
//             if (number >= 30) {
//                 studentEndPrice -= studentEndPrice*0.15;
//             }
// // be mindful of missed ';' => SyntaxError: Unexpected end of input
//             let totalsum = studentEndPrice.toFixed(2);
//             console.log('Total price: ' + totalsum);
//         } else if (group === 'Business') {
//             let bPrice = 10.90;
//             if (number >= 100) {
//                 number -= 10
//             }
//             var bEndPrice = bPrice*number;
//             let totalsum = bEndPrice.toFixed(2);
//             console.log('Total price: ' + totalsum);
//         } else if (group === 'Regular') {
//             rPrice = 15;
//             var rEndPrice = rPrice*number;
//             if (number >= 10 && number <= 20) {
//                 rEndPrice -= rEndPrice*0.05;
//             }
//             let totalsum = rEndPrice.toFixed(2);
//             console.log('Total price: ' + totalsum);
//         }
//     } else if (day === 'Saturday') {
//         if (group === 'Students') {
//             let studentPrice = 9.80;
//             var studentEndPrice = studentPrice*number;
//             if (number >= 30) {
//                 studentEndPrice -= studentEndPrice*0.15;
//             }
//             let totalsum = studentEndPrice.toFixed(2);
//             console.log('Total price: ' + totalsum);
//         } else if (group === 'Business') {
//             let bPrice = 15.60;
//             if (number >= 100) {
//                 number -= 10
//             }
//             var bEndPrice = bPrice*number;
//             let totalsum = bEndPrice.toFixed(2);
//             console.log('Total price: ' + totalsum);
//         } else if (group === 'Regular') {
//             rPrice = 20.00;
//             var rEndPrice = rPrice*number;
//             if (number >= 10 && number <= 20) {
//                 rEndPrice -= rEndPrice*0.05;
//             }
//             let totalsum = rEndPrice.toFixed(2);
//             console.log('Total price: ' + totalsum);
//         }
//     } else if (day === 'Sunday') {
//         if (group === 'Students') {
//             let studentPrice = 10.46;
//             var studentEndPrice = studentPrice*number;
//             if (number >= 30) {
//                 studentEndPrice -= studentEndPrice*0.15;
//             }
//             let totalsum = studentEndPrice.toFixed(2);
//             console.log('Total price: ' + totalsum);
//         } else if (group === 'Business') {
//             let bPrice = 16;
            
//             if (number >= 100) {
//                 number -= 10
//             }
//             var bEndPrice = bPrice*number;
//             let totalsum = bEndPrice.toFixed(2);
//             console.log('Total price: ' + totalsum);
//         } else if (group === 'Regular') {
//             rPrice = 22.50;
//             var rEndPrice = rPrice*number;
//             if (number >= 10 && number <= 20) {
//                 rEndPrice -= rEndPrice*0.05;
//             }
//             let totalsum = rEndPrice.toFixed(2);
//             console.log('Total price: ' + totalsum);
//     }
// }
// }
// vacation(100, 'Business', 'Sunday')


// function leapYear(n) {
//     if (n % 4 === 0 && n % 100 !== 0) {
//         console.log('yes');
//     } else if (n % 400 === 0) {
//         console.log('yes');
//     } else {
//         console.log('no');
//     }
// }
// leapYear(2003)



// you make the row of numbers be a string so that they are on the same line
// function printSum(start, end){
//     var numbers = "";
//     var sum = 0;
//     for (let i = start; i <= end; i++) {
//         sum = sum + i;
//         numbers = numbers + i + ' ';
//     }
//     console.log(numbers);
//     console.log('Sum: ' + sum);
// }

// printSum(50, 60)




// first make two ensted for loops
// then a string to add the number of the row you are at => i
// to have the row be long as the number of the row set j <= i
// print and then restart string
// function pyramid(n) {
//     sum = '';
//     for (let i = 1; i <= n; i++){
//         for (let j = 1; j <= i; j++){
//             sum = sum + i + ' ';
//         }
//         console.log(sum);
//         sum = "";
//     }
// }

// pyramid(5);



// console.log(`${}`)
// function multiBy10(n) {
//     for (let i = 1; i <= 10; i++){
//         let product = n * i;
//         console.log(`${n} X ${i} = ${product}`)
//     }
// }

// multiBy10(5);



// remember the -1 in for loop initialisation
// travers array input with index
// function login(input) {
//     var index = 0;
//     var counter = 0;
//     var username;
//     var password = '';
//     let b = false;
//     username = input[index];
//     for (let i = username.length - 1; i >= 0; i--){
//         password = password + username[i];
//     }
//     index++;
//     while (input[index] !== password) {
        
//         index++;
//         counter++;
//         if (counter === 4) {
//             b = true;
//             break
//         }
//         console.log('Incorrect password. Try again.');
//     }
//     if (b){
//         console.log(`User ${username} blocked!`);
//     } else {
//         console.log(`User ${username} logged in.`);
//     }
// }

// login(['sunny','rainy','cloudy','sunny','not sunny'])



// The Math.pow() static method, given two arguments, base and exponent, returns baseexponent.
// function KingD(base, increment) {
//     let counterForLapis = 0;
//     let gold = 0;
//     let marble = 0;
//     let lapis = 0;
//     let stone = 0;
    
//     for (let i = base; i > 0; i -= 2) {
//         counterForLapis++;
//         if (i > 2){
//             let bulk = Math.pow((i - 2), 2);
//             stone += (bulk * increment);
//         if (counterForLapis % 5 !== 0) {
//             let outer = Math.pow(i, 2) - bulk;
//             marble += (outer * increment);
//         } else {
//             let outer = Math.pow(i, 2) - bulk;
//             lapis += (outer*increment);
//         }

//         } else {
//             gold = (Math.pow(i, 2)) * increment;
//             break;
//         }
//     }
//     console.log(`Stone required: ${Math.ceil(stone)}`);
//     console.log(`Marble required: ${Math.ceil(marble)}`);
//     console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
//     console.log(`Gold required: ${Math.ceil(gold)}`);
//     console.log(`Final pyramid height: ${Math.floor(counterForLapis*increment)}`);
// }