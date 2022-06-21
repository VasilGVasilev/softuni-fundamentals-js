// function train(input){
//     let wagons = input[0];
//     let newWagons = wagons.split(' ').map((el)=>Number(el));

//     const maxcap = Number(input[1]);
//     for (let i = 2; i < input.length; i++){
//         let splitted = input[i].split(' ');
        
//         if (splitted[0] === 'Add'){
//             newWagons.push(splitted[1])
//         } else if (splitted[0] !== 'Add'){
//             let passengersToAdd = Number(splitted[0]);
           
            
//             for (let j = 0; j < newWagons.length; j++){
                
//                 if ((passengersToAdd + newWagons[j]) > maxcap){
//                     continue;
//                 } else if (passengersToAdd + newWagons[j] === maxcap){
//                     passengersToAdd = (passengersToAdd + newWagons[j]) - maxcap;
//                     newWagons[j] = maxcap;
//                 } else if ((passengersToAdd + newWagons[j]) < maxcap) {
//                     newWagons[j] += passengersToAdd;
//                     passengersToAdd = 0;
//                     break
//                 }
                
//             }
            
//         }
//     }
//     console.log(newWagons.join(' '));
// }

// train(['0 0 0 10 2 4',
// '10',
// 'Add 10',
// '10',
// '10',
// '10',
// '8',
// '6']

// );

// primitives are value types
// arrays and objects are reference types

// let a = 5;
// let b = a;
// a = 10;
// console.log(b);
// >> 5
// a HAS ONE MEMORY SLOT, b HAS ANOTHER MEMORY SLOT

// BUT 

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1.pop()
// console.log(arr2);
// >> [1, 2]
// arr1 HAS ONE MEMORY SLOT, arr2 HAS THE SAME MEMORY SLOT

// So to copy an array better:
// let arr1 = [1, 2, 3]
// let arr2 = arr1.slice(0);
// arr1.pop();
// console.log(arr2);
// >> [1, 2, 3]
// because slice() make a copy of the original array

// splice(start, howmany, addEls)

// compare alphabetically
// let arr = ['aa', 'b', 'ccc'];
// let sortedArray = arr.sort((a,b)=>a.localeCompare(b))
// console.log(sortedArray);



// trick is to make a new empty array that cannot include any of the values in the input array
// function distinctArr(input){
//     let newArr = [];
//     for (let i = 0; i < input.length; i++){
//         if (!newArr.includes(input[i])){
//             newArr.push(input[i])
//         }
//     }
//     console.log(newArr.join(' '));
// }

// distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);




// tricky thing is to if else the length of the input array for (going /not going) === (1/2)
// function houseParty(arr){
//     let guestList = [];
//     for (let i = 0; i < arr.length; i++){
//         let splitted = arr[i].split(' ');
        
//         if (splitted.length === 3){
//             if (guestList.includes(splitted[0])){
//                 console.log(`${splitted[0]} is already in the list!`);
//             } else {
//                 guestList.push(splitted[0]);
//             }
//         } else {
//             if (!guestList.includes(splitted[0])){
//                 console.log(`${splitted[0]} is not in the list!`);
//             } else {
//                 let indexOfRemoved = guestList.indexOf(splitted[0]);
//                 guestList.splice(indexOfRemoved, 1);
//             }
//         }
//     }
//     for (let el of guestList){
//         console.log(el);
//     }
// }

// houseParty(['Tom is going!',
// 'Annie is going!',
// 'Tom is going!',
// 'Garry is going!',
// 'Jerry is going!']

// );


// function sorting(input){
//     let newArr = [];
//     input.sort((a,b) => b - a);
//     if (input.length % 2 === 0){
//         for (i = 0; i < input.length / 2; i++){
//             newArr.push(input[i]);
//             newArr.push(input[(input.length - 1) - i]);
//         }
//         // to catch arrays with odd number lengths
//     } else {
//         for (i = 0; i < (input.length - 1) / 2; i++){
//             newArr.push(input[i]);
//             newArr.push(input[(input.length - 1) - i]);
//         }
//         newArr.push(input[(input.length - 1) / 2]);
//     }
    
    
//     console.log(newArr.join(' '));
// }

// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18]);






// trick is that || in .sort() makes the function PRIMARILY sort by the first criteria, and then by the second
// .sort(a,b => criteriaFrist || criteriaSecond)
// function sortByCri(input){
//     let newArr = [];
//     for (let i = 0; i < input.length; i++){
        
//         newArr = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
//     }
//     for (let el of newArr){
//         console.log(el);
//     }
// }

// sortByCri(['test', 'Deny', 'omen', 'Default']);




// 80/100
// function bombNumbers(arr, bomb){
//     let sum = 0;
//     // deconstructing for best practice
//     let [detonator, power] = bomb;

//     while (arr.includes(detonator)){
//         let bombPlace = arr.indexOf(detonator);
//         let rightSideStart = bombPlace - power;
//         arr.splice((bombPlace + 1), (power));
//         arr.splice(rightSideStart, power + 1);
//     }
//     for (let el of arr){
//         sum+=el;
//     }
//     console.log(sum);
// }

// bombNumbers([1, 7, 7, 1, 2, 3],
//     [7, 1] 
//     )



// function searchForN(arr, numbers){
//     let [taken, deleted, searched] = numbers;
//     let newArr = [];
//     let occurance = 0;
//     for (let i = 0; i < taken; i++){
//         newArr.push(arr[i]);
//     }
//     newArr.splice(0, deleted);
//     console.log(searched);
    
//     for (let el of newArr){
//         if (el === searched){
//             occurance++;
//         }
//     }
//     console.log(`Number ${searched} occurs ${occurance} times.`);
// }
// searchForN([7, 1, 5, 8, 2, 7],
//     [3, 1, 5]
//     )