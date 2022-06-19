// Presentation NOTES

// .includes() returns true if given value is part of the array
// let arr = [1, 2, 3]
// arr.includes(1) // true
// arr. includes(5) // false


// .indexOf() returns the index where the value in the array is stored
// let arr = ['a', 'b', 'c']
// arr.indexOf('b') // 1
// arr.indexOf('f') // -1



// .slice(start, end) - end (exclsuive): creates a new array, doesnt change the original
// let arr = ['one', 'two', 'three', 'four']'
// let newArr  = arr.slice(1, 3); // ['two', 'three'];



// .splice(start, delete-count) - creates new array adnd modifies original
// let arr = ['one', 'two', 'three', 'four']'
// let newArr  = arr.splice(1, 2); // ['two', 'three'] and arr => ['one', 'four']



// .map(el => el++) - creates a new array by applying a function to every element
// let arr = ['one', 'two', 'three', 'four']
// let lengths = arr.map(el => el.length) // [3,3,5,4]



// .filter() - creates a new array from elements matching #predicate#
// let arr = ['one', 'two', 'three', 'four']
// let longWords = arr.filter(el => el.length > 4) // ['three']
// it could have element, index, array as parameters
// filter(function(element, index) { /* ... */ })
// odd nus solution would include:
// .filter(num, i => i % 2 == 0)
// check for each element 'num' in array whether index 'i' is odd











// function SumFAndL(input){
//     input = input.map(el => Number(el))
//     console.log(input[0] + input.pop());
// }

// SumFAndL(['20', '30', '40'])






// function negativePositive(input){
//     let newArr = [];
//     for (n of input){
//         if (Number(n) < 0) {
//             newArr.unshift(n);
//         } else {
//             newArr.push(n);
//         }
//     }
// or for loop with console.log(newArr.join('\n'));
//     for (s of newArr) {
//         console.log(s);
//     }
// }

// negativePositive(['7', '-2', '8', '9'])










// function firstAndLastKNumber(input){
//     let k = input[0];
//     let firstK = [];
//     let lastK = [];

//     for (let i = 1; i <= k; i++){
//         firstK.push(input[i]);
//     }
//     for (let j = input.length; j >= input.length - k; j--){
//         lastK.unshift(input[j]);
//     }
//     console.log(firstK.join(' '));
//     console.log(lastK.join(' '));
// }

// OR ALternative solution:
// function firstAndLastKNumber(input){
//     let k = input.shift();
//     console.log(input.slice(0, k).join(' '));
//     console.log(input.slice((input.length - k), input.length).join(' '));
// }


// firstAndLastKNumber([3,
//     6, 7, 8, 9]
//    );





// function lastKNumbersSeq(n, k){
//     let arr = [1];
//     for (let i = 0; i < n; i++){
//         let seqK = arr.slice(-3);
//         let sum = 0;
//         for (el of seqK){
//             sum+=el;
//         }
//         arr.push(sum)
//     }
//     console.log(arr.join(' '));
// }
// lastKNumbersSeq(6, 3)






// function oddNums(input){
//     let arr = [];
//     for (let i = 1; i < input.length; i = i + 2){
//         let updatedNum = input[i] * 2
//         arr.unshift(updatedNum);
//     }
//     console.log(arr.join(' '));
// }

// oddNums([3, 0, 10, 4, 7, 3])



// function smallestTwo(input){
//     let firstMin = 100000000;
//     let newArr = [];
//     for (let i = 0; i < input.length; i++){
//         if (input[i] < firstMin){
//             firstMin = input[i];
//         }

//     }
//     let s = input.indexOf(firstMin);
//     let firstN = input.splice(s, 1)

//     let secondMin = 1000000;
//     for (let i = 0; i < input.length; i++){
//         if (input[i] < secondMin){
//             secondMin = input[i];
//         }

//     }
//     console.log(firstN.join(''), secondMin.toString());
// }
// smallestTwo([3, 0, 10, 4, 7, 3]);



// sort() method - The default sort order is ascending, 
// built upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.
// sort((a, b) =>  a-b  )
// function m(){
//     let arr = [1, 14, 2, 'b','a'];
//     arr.sort(((a,b) => a - b))
//     console.log(arr);
// }
// m()



// you can use the .sort() for letters too
// function listOfProducts(input){
//     input.sort();
//     for (const [i, v] of input.entries()) {
//         console.log(`${(i + 1)}.${v}`)
//       }
// }
// listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);




// never convert string into a number with Number()
// use .map(el => number(el))
// remember to convert string into array with split(' ') before using map
// function arrayMani(input){
    
//     let seq = input[0].split(' ').map(el => Number(el));
//     for (let i = 1; i < input.length; i++){
//         let splitted = input[i].split(' ');
//         switch(splitted[0]){
//             case 'Add':
//             seq.push(Number(splitted[1]));
//                 break;
//             case 'Remove':
//             seq = seq.filter(el => el !== Number(splitted[1]));
//                 break;
//             case 'RemoveAt':  
//             seq.splice(Number(splitted[1]), 1);
//                 break;
//             case 'Insert':
//             seq.splice(Number(splitted[2]), 0, Number(splitted[1]));
//                 break;
//         }
//     }
//     console.log(seq.join(' '));
// }

// arrayMani(['4 19 2 53 6 43',
// 'Add 3',
// 'Remove 2',
// 'RemoveAt 1',
// 'Insert 8 3']

// );