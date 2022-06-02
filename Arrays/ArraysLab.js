// function sumOfFAndL(input) {
//     let first = input[0];
//     let last = input[input.length - 1];
//     let result = first + last;
//     console.log(result);
// }

// sumOfFAndL([20, 30, 40])

// function Days(input) {
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     switch (input) {
//         case 1:
//           console.log(days[0]);
//           break;
//         case 2:
//           console.log(days[1]);
//           break;
//         case 3:
//           console.log(days[2]);
//           break;
//         case 4:
//           console.log(days[3]);
//           break;
//         case 5:
//           console.log(days[4]);
//           break;
//         case 6:
//           console.log(days[5]);
//           break;
//         case 7:
//           console.log(days[6]);
//           break;
//         default:
//           console.log(`Invalid day!`);
//       }
// }

// Days(11);


// function rArrays(n, arr){
//     let newArr = [];
//     for (let i = 0; i < n; i++){
//         newArr.push(arr[i]);
//     }
//     newArr.toString();
//     let revArr = [];
//     for (let i = newArr.length - 1; i >= 0; i--) {
//         revArr += newArr[i] + ' '
//     }
//     console.log(revArr)
// }

// rArrays(3, [1, 2, 3, 4, 5])



// function reverse(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {
//         swapEls(arr, i, arr.length - 1 - i)
//     }
//     console.log(arr.join(' '));
//     function swapEls(arr, i, j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
// }

// reverse(['a', 'b', 'c', 'd', 'e'])

// for (let i of arr) - a very handy loop for arrays since they have indexes
// function sumEven(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Number(arr[i])
//     }
//     let sum = 0;
//     for (let i of arr){
//         if (i % 2 == 0){
//             sum+=i;
//         } else {
//             continue
//         }
//     }
//     console.log(sum);
// }

// sumEven(['3','5','7','9'])



// function EvenorOdd(arr) {
//     let sumE = 0;
//     let sumO = 0;
//     for (let i of arr){
//         if (i % 2 === 0){
//             sumE+=i;
//         } else if (i % 2 !== 0){
//             sumO+=i;
//         }
//     }
//     console.log((sumE - sumO));
// }

// EvenorOdd([1,2,3,4,5,6])



// function ident(arr1, arr2) {
//     let sum = 0;
//     let notEqual = true;
//     let k;
//     for (let i = 0; i < arr1.length; i++){
//         arr1[i] = Number(arr1[i]);
//     }
//     for (let j = 0; j < arr1.length; j++){
//         arr2[j] = Number(arr2[j]);
//     }
//     for (k = 0; k < arr1.length; k++){
//         if(arr1[k] !== arr2[k]) {
//             console.log(`Arrays are not identical. Found difference at ${k} index`);
//             notEqual = false;
//             break;
//         } else if (arr1[k] === arr2[k]){
//             sum += arr1[k];
//         }

//     }
//     if (notEqual){
//         console.log(`Arrays are identical. Sum: ${sum}`);
//     }
    
// }

// ident(['1'], ['10'])





// function cond(input){
//     while(input.length !== 1 ){
//         let conden = [];
//         for(let i = 0; i < input.length - 1; i++){
//             let firstN = input[i];
//             let secondN = input[i + 1];
//             let resultN = firstN + secondN;
            
//             conden.push(resultN);
//         }
//         input = [...conden];

//     }
//     console.log(input[0])
// }

// cond([5,0,4,1,2])