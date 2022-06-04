// function AddSub(arr){
//     let sumOfOriginal = 0;
//     let sumOfNew = 0;
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         sumOfOriginal+=arr[i];
//         if (arr[i] % 2 === 0){
//             let newEven = arr[i] + i;
//             newArr.push(newEven);
//             sumOfNew += newEven;

//         } else if (arr[i] % 2 !== 0){
//             let newOdd = arr[i] - i;
//             newArr.push(newOdd);
//             sumOfNew += newOdd;
//         }
//     }
//     console.log(newArr);
//     console.log(sumOfOriginal);
//     console.log(sumOfNew);
// }

// AddSub([5, 15, 23, 56, 35])


// function commonEls(arr1, arr2){
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++){
//         for (let j = 0; j < arr1.length; j++){
//             if (arr2[j] === arr1[i]) {
//                 newArr.push(arr2[j]);
//             }
//         }
//     }
//     for (let el of newArr){
//         console.log(el);
//     }
    
// }

// commonEls(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])


// function merArrs(arr1, arr2){
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++){
//         if(i % 2 === 0){
//             let even = Number(arr1[i]) + Number(arr2[i]);
//             newArr.push(even);
//         } else if (i % 2 !== 0){
//             let odd = '';
//             odd += arr1[i] + arr2[i];
//             newArr.push(odd);
//         }
//     }
    
//     console.log(newArr.join(' - '))

    
// }

// merArrs(['5', '15', '23', '56', '35'],
// ['17', '22', '87', '36', '11']
// )




// function rotate(arr, n) {
//     for (let i = 0; i < n; i++){
//         const tempArr = arr.shift()
//         arr.push(tempArr);
//     }
//     console.log(...arr);
// }

// rotate([51, 47, 32, 61, 21], 2)




// function topInt(input){
//     let newArr = [];
    
//     for (let i = 0; i < input.length; i++){
//         let val = true;
//         for (let j = i + 1; j < input.length; j++){
//             if(input[i] > input[j]){
//                 continue
//             } else if (input[i] <= input[j]){
//                 val = false;
//                 break
//             }
//         }
//         if (val) {
//             newArr.push(input[i]);
//         }
//     }
//     console.log(...newArr);
// }

// topInt([1, 4, 3, 2])



// function leftRight(input){
//     let sumLeft = 0;
//     let sumRight = 0;
//     let val = true;
//     for (let i = 0; i < input.length; i++){
        
//         for (let j = i + 1; j < input.length; j++){
//             sumRight += input[j];
//         }
//         if (sumLeft === sumRight){
//             console.log(i);
//             val = false;
//         }
//         sumLeft += input[i];
//         sumRight = 0;
//     }
//     if (val) {
//         console.log(`no`);
//     }
// }

// leftRight([1, 2, 3])





// function pairs(input, n){
//     for (let i = 0; i < input.length; i++){
//         for (let j = i + 1; j < input.length; j++){
//             let result = input[i] + input[j];
//             if (result === n){
//                 console.log(`${input[i]} ${input[j]}`)
//             }

//         }
//     }
// }
// pairs([1, 7, 6, 2, 19, 23], 8)






// use newArr = [input[0]] as a way to populate with first element but each iteration it re-populates it
// function maxSeq(arr){
//     let newArr = [];
//     let counter = 0;
//     let longestSequence = [];
//     leftMostIndex = 0;

//     for (let i = 0; i < arr.length; i++){
//         let firstN = arr[i];
//         newArr = [firstN];
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[j] === arr[i]){
//                  newArr.push(arr[j]);
//                  counter++;
//             } else {
//                 break
//             }
//         }
//         // we store the longest array in a outer block scope based array to continue iterate in `i` for loop
//         if (newArr.length > longestSequence.length) {
//             // also if there is a subsequent longest array
//             // the app takes the preceding one, because new arr is equal == not greater > than longest
//             // so the longestSeq is not updated
//             longestSequence = [];
//             for (let j = 0; j < newArr.length; j++) {
//                 longestSequence.push(newArr[j]);
//             }
//         } 
//     }
//     console.log(longestSequence.join(' '))
// }

// maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3])


// .split divides into a subarrays, removing the '|' and esentially in thi current case replacing it with the ',' in an array
// function dungeonDark(arr){
//     let dungen = arr[0].split('|');
//     let health = 100;
//     let coins = 0;
//     let counterRooms = 0;
//     let allCoins = 0;
//     let alive = true;
//     for (let i = 0; i < dungen.length; i++){
//         let currentRoom = dungen[i].split(' ');
//         let itemOrMonster = currentRoom[0];
//         let num = Number(currentRoom[1]);
//         if (itemOrMonster === 'potion'){
//             health += num;
//             let excess = 0;
//             if (health > 100){
//                 excess = health - 100;
//                 health = 100;
//             }
//             console.log(`You healed for ${num - excess} hp.`)
//             console.log(`Current health: ${health} hp.`)
//         } else if (itemOrMonster === 'chest'){
//             coins += num;
//             console.log(`You found ${num} coins.`);
//         } else {
//             health -= num;
//             if (health > 0){
//                 console.log(`You slayed ${itemOrMonster}.`);
//             } else if (health <= 0) {
//                 console.log(`You died! Killed by ${itemOrMonster}.`)
//                 console.log( `Best room: ${i+1}`);
//                 alive = false;
//                 break
//             }
//         }
        
//     }
//     if (alive){
//         console.log("You've made it!");
//         console.log(`Coins: ${coins}`);
//         console.log(`Health: ${health}`);
//     }
// }
   
//   dungeonDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);



// 40/100 dont know why

// function ladyBug(arr){
//     let field = [];
//     let size = arr[0];
//     let indexes = arr[1].split(' ');


//     // make the fields
//     for (let i = 0; i < size; i++){
//         field.push(0);
//     }

    

//     // set the indexes
//     for (let i = 0; i < field.length; i++){
//         for (let j = 0; j < indexes.length; j++){
//             if(Number(indexes[j]) === i){
//                 field.splice(i, 1, 1)
//             }
//         }
//     }
    

//     // set directions
//     let direction = '';
//     for (let i = 2; i < arr.length; i++){
//         direction = arr[i].split(' ');
    
//         // left or right
//         if (direction[1] === 'right'){
//             // ladybug
//             let ladybugAtWhichIndex = Number(direction[0]);
//             let ladybugLandedIndex = ladybugAtWhichIndex + Number(direction[2]);
//             if (field[ladybugLandedIndex] === 0){
//                 field[ladybugLandedIndex] = 1;
//             } else if (field[ladybugLandedIndex] === 1){
//                 let j = 0;
//                 while(field[ladybugLandedIndex + j] !== 0){
//                     j++;
//                     if (ladybugLandedIndex + j > field.length){
//                         break
//                     }

//                 }
                
//                     field[ladybugLandedIndex + j] = 1;
//             }
//             field[ladybugAtWhichIndex] = 0;
//         } else if (direction[1] === 'left'){
//             let ladybugAtWhichIndex = Number(direction[0]);
//             let ladybugLandedIndex = ladybugAtWhichIndex - Number(direction[2]);
//             if (field[ladybugLandedIndex] === 0){
//                 field[ladybugLandedIndex] = 1;
//             } else if (field[ladybugLandedIndex] === 1){
//                 let j = 0;
//                 while(field[ladybugLandedIndex - j] !== 0){
//                     j++;
//                     if (ladybugLandedIndex - j < 0){
//                         field.pop()
//                         break
//                     }
//                 }
//                     field[ladybugLandedIndex - j] = 1;

                
//             }
//             field[ladybugAtWhichIndex] = 0;
//         }
//     }

//     console.log(field.slice(0, arr[0]).join(' '));
    
// }

// ladyBug([ 5, '3',
// '3 left 2',
// '1 left -2']


// )