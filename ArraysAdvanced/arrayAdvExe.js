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




// function arrManipul(nums, commands){
    
//     for (let i = 0; i < commands.length; i++){
        
//         let com = commands[i].split(' ');
//         if (com[0] === 'print'){
//             break;
//         }
//         if (com[0] === 'add'){
            
//             let index = Number(com[1]);
//             let added = Number(com[2]);
//             nums.splice(index, 0, added);
//         }
//         if (com[0] === 'addMany'){
//             let index = Number(com[1]);
//             let added = com.splice(2);
//             for (let k = 0; k < added.length; k++){
//                 nums.splice((index + k), 0, Number(added[k]))
//             }
//         }

//         if (com[0] === 'remove'){
//             let index = Number(com[1]);
//             nums.splice(index, 1);
//         }

//         if (com[0] === 'contains'){
//             let element = Number(com[1]);
//             let instance = nums.indexOf(element);
//             console.log(instance);
//         }

//         if (com[0] === 'shift'){
//             let numOfPositions = Number(com[1]);
//             for (p = 0; p < numOfPositions; p++){
//                 let shifted = nums.shift();
//                 nums.push(shifted);
//             }
//         }

//         if (com[0] === 'sumPairs'){
//             let sumedPairs = [];
//             // add a 0 if num.length is odd so that num[s + 1] is not outside of the array thus making it undefined 
//             if (nums.length % 2 !== 0){
//                 nums.push(0);
//             }
//             for (s = 0; s < nums.length; s = s + 2){
//                 let firstNum = nums[s];
//                 let secondNum = nums[s + 1];
//                 let sum = firstNum + secondNum;
//                 sumedPairs.push(sum);
//             }
//             nums = sumedPairs
//         }

        
//     }
   
//     console.log(`[ ${nums.join(', ')} ]`);   
// }

// arrManipul([1, 2, 3, 4, 5],
//     ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
//     );


// 90/100
// function gladiator(arr){
//     let inventory = arr.shift().split(' ');
    
//     for(let i = 0; i < arr.length; i++) {
//         let commandAndEquip = arr[i].split(' ');
//         let command = commandAndEquip.shift();
//         let equipment = commandAndEquip.shift();
//         // switch case better for known element being a string
//         switch(command){
//             case 'Buy':
//                 inventory.push(equipment);
//                 break;
    
//             case 'Trash':
//                 let trash = inventory.includes(equipment);
//                 if(trash){
//                     let indexOfTrash = inventory.indexOf(equipment);
//                     inventory.splice(indexOfTrash, 1);
//                 }
//                 break;
            
//             case 'Repair':
  
//                 let foundEquipment = inventory.includes(equipment);
//                 if(foundEquipment){
//                     let indexOfEquipment = inventory.indexOf(equipment);
//                     inventory.splice(indexOfEquipment, 1);
//                     inventory.push(equipment);
//                 }
                
//                 break;
            
//             case 'Upgrade':
                
//                 let dash = equipment.indexOf('-');
                
//                 // get string before dash SWORD-Silver => SWORD
//                 let equipmentSpliced = equipment.split('');
//                 equipmentSpliced.splice(dash);
//                 equipmentSpliced = equipmentSpliced.join('');

//                 let upgadedEqipment = equipment.split('');
//                 let update = upgadedEqipment.slice(dash + 1);
//                 update = update.join('');
                
//                 let foundEquipmentToUp = inventory.includes(equipmentSpliced);
//                 if (foundEquipmentToUp){
//                     let indexOfEquipmentToUp = inventory.indexOf(equipmentSpliced);
//                     let finalUpdate = equipmentSpliced + ':' + update;
//                     inventory.splice(indexOfEquipmentToUp + 1, 0, finalUpdate);
//                 }
                
//         }
//     }
//     console.log(inventory.join(' '));
// }

// gladiator(['SWORD Shield Spear',
// 'Buy Bag',
// 'Trash Shield',
// 'Repair Spear',
// 'Upgrade SWORD-Steel']
// );





