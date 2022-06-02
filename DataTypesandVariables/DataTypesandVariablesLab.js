// NB

// 1
// JS strings are immutable like const so NO:
// let m = "George";
// let m[0] = 'K';

// 2
// template literal => `${variable}`

// 3
// == equal to (no type)
// === equal to with type


// 4
// everyting with a value is true:
// let m;
// if (m) {} // false;

// 5
// undefined means non-existent - a var without a value see hoisting
// null means nothing - an object is still non-existant;
// both have no value


// you have to put var type in '' to check type of in if statement
// because typeof input returns a string sp you have to have string on the right side too

// function dtype(input) {
//     if (typeof input === 'string' || typeof input === 'number') {
//         console.log(typeof input);
//         console.log(input);
//     } else {
//         console.log(typeof input);
//         console.log('Parameter is not suitable for printing');
//     }
// }



// function conc(f, s, d) {
//     console.log(`${f}${d}${s}`);
// }


// ternary operator =>  a === b ? 'equal' : 'not equal'
// function missingChar(missing, c, given) {
//     let replaced = missing.replace('_', c)
//     let output = replaced === given ? 'Matched' : 'Not Matched';
//     console.log(output);
// }

// missingChar('Str_ng', 'o', 'Strong')



// you have to restate the full thing after : in ternanry operator
// function sum(f, s, t) {
//     let sum = f + s + t;
//     sum % 1 === 0 ? sum += ' Integer' : sum += ' Float';
//     console.log(sum);
// }





// sum(9, 100, 1.1)

// function amazing(num){
//     let n = num.toString();
//     let sum = 0;
//     for (let i = 0; i < n.length; i++){
//         sum += Number(n[i]);

//     }
//     let result = sum.toString().includes('9');
//     console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`)
// }


// amazing(1233)


// function gram(band, album, song) {
//     let dur = (album.length * band.length) * song.length / 2
//     let times = dur / 2.5;
//     console.log(`The plate was rotated ${Math.ceil(times)} times.`);
// }

// gram('Black Sabbath', 'Paranoid', 'War Pigs')



// function reading(pages, rate, days) {
//     let result = pages / rate / days;
//     console.log(result);
// }

// reading(212, 20, 2)


// Mat.trunk - removes fractional digits
// function cent(cent) {
//     let y = cent * 100;
//     let d = Math.trunc(y*365.2422);
//     let h = d * 24;
//     let m = h * 60;
//     console.log(`${cent} centuries = ${y} years = ${d} days = ${h} hours = ${m} minutes`)
// }


// var has a function scope
// let has block scope
// each of them can have global scope if declared globally!!!
// null is usually used for object initial definition, such as 'let m = 0;'



// function spec(num) {
//     let sum = 0;
//     let result = '';
//     for (let i = 1; i <= num; i++) {
//         i = i.toString();
//         for (let j = 0; j < i.length; j++) {
//             sum += Number(i[j]);
//         }
//         console.log(result = sum === 5 || sum === 7 || sum === 11 ? `${i} -> True` : `${i} -> False`);
//         sum = 0;
//     }
// }

// spec(19)


// trick is to use template literal as placeholders:
// thus the most inner loop will update first resulting in:
// transition from aaa -> aab


// function tripleLatin(num) {
//     let fletter;
//     let sletter;
//     let tletter;
//     for (let i = 0; i < num; i++){
//         fletter = String.fromCharCode(97+i);
//         for (let i = 0; i < num; i++){
//             sletter = String.fromCharCode(97+i);
//             for (let i = 0; i < num; i++){
//                 tletter = String.fromCharCode(97+i);
//                 console.log(`${fletter}${sletter}${tletter}`)
//             }
//         }
//     }
    
// }

// tripleLatin(3)