// function computerProgram(input){

    
//     let sumPreTax = 0;
//     let special = false;
//     let regular = false;
//     for (let i = 0; i < input.length; i++){
//         if (input[i] === 'special') {
//             special = true;
//             break;
//         }
//         if (input[i] === 'regular'){
//             regular = true;
//             break;
//         }
//         if (input[i] < 0){
//             console.log('Invalid price!');
//             continue;
//         }
//         sumPreTax += Number(input[i]);
//     }
//     if (sumPreTax <= 0){
//         console.log('Invalid order!');
//     } else {
//         let tax = sumPreTax * 0.2
//         console.log(`Congratulations you've just bought a new computer!`);
//         console.log(`Price without taxes: ${sumPreTax.toFixed(2)}$`);
//         console.log(`Taxes: ${tax.toFixed(2)}$`);
//         console.log(`-----------`);
//         if(regular){
//             let total = sumPreTax + tax;
//             console.log(`Total price: ${total.toFixed(2)}$`);
//         } else if (special){
//             let afterTax = sumPreTax + tax;
//             let final = afterTax - (afterTax * 0.1);
//             console.log(`Total price: ${final.toFixed(2)}$`);
//         }
        

//     }
// }

// computerProgram(([

// '1050',

// '200',

// '450',

// '2',

// '18.50',

// '16.86',

// 'special'

// ]));





// function treasureHunt(input){
//     let inventory = input.shift();
//     let inventoryArr = inventory.split('|');
//     for (let i = 0; i < input.length; i++){
//         if(input[i] === 'Yohoho!'){
//             break;
//         }
//         let inputArr = input[i].split(' ');
//         switch(inputArr[0]){
//             case 'Loot':
                
//                 for (let l = 1; l < inputArr.length; l++){
//                     let checkForItem = inventoryArr.includes(inputArr[l]);
//                     if(checkForItem){
//                         continue;
//                     } else{
//                         inventoryArr.unshift(inputArr[l]);
//                     }
//                 }
//                 break;
//             case 'Drop':
//                 if (inputArr[1] >= inventoryArr.length){
//                     break;
//                 } else {
//                     let index = inputArr[1];
//                     let dropped = inventoryArr.splice(index, 1).toString();
//                     inventoryArr.push(dropped);
//                 }
//                 break;
//             case 'Steal':
                
//                     let count = inputArr[1];
//                     let stolen = [];
//                     for (let s = 0; s < count; s++){
//                         stolen.unshift(inventoryArr.pop())
//                     }
                    
//                     // remove undefined if inventory count is lower than the stolen
//                     stolen = stolen.filter(function( element ) {
//                         return element !== undefined;
//                      });
                    
//                     console.log(`${stolen.join(', ')}`);
                     
//                 break;
//         }
//     }
//     let len = inventoryArr.join('');
    
//     if (len <= 0){
//         console.log('"Failed treasure hunt."');
//     } else{
//         let sum = len.length / inventoryArr.length
//         console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits. `);
//     }
    
// }

// treasureHunt((['Diamonds|Silver|Shotgun|Gold',
//     'Loot Silver Medals Coal',
//     'Drop -1',
//     'Drop 1',
//     'Steal 6',
//     'Yohoho!']));






// function numbers(input){
//     let arr = input.split(' ');
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum+=Number(arr[i]);
//     }
//     let average = sum / arr.length;
//     let newArr = [];
//     for (let j = 0; j < arr.length; j++){
//         if (Number(arr[j]) > average){
//             newArr.push(Number(arr[j]));
//         }
//     }
//     newArr.sort((a,b) => b - a);
//     if (newArr.length > 0){
//         newArr.splice(5);
//         console.log(newArr.join(' '));
//     } else {
//         console.log('No');
//     }
    
// }
// my mistake was making it <= 1 thinking that I am looking at a single
// value array when ['1'], but in fact I check newArr which is empty
// due to no pushes being performed since (1 !> 1)






// other 2 exes after computer receipt 

// function lift(arr){
//     let numberOfP = arr.shift();
//     let wagons = arr.shift();
//     numberOfP = Number(numberOfP);
    
//     wagons = wagons.split(' ').map(el => Number(el));
//     let noMorePeople = false;

//     for (let i = 0; i < wagons.length; i++){
//         let count = 0;
//         for (let j = 0; j < (4 - wagons[i]); j++){
//             numberOfP-=1;
//             count+=1;
//             if (numberOfP === 0){
//                 break;
//                 noMorePeople = true;
//             }
//         }
//         wagons[i] += count;
//         if (numberOfP === 0){
//             break;
//         }
//     }
    
//     // check for empty slots
//     let emptySlot = false;
//     for (let c = 0; c < wagons.length; c++){
//         if (wagons[c] < 4){
//             emptySlot = true;
//             break;
//         }
//     }
//     if (numberOfP === 0){
//         if(emptySlot){
//             console.log(`The lift has empty spots!`);
//             console.log(wagons.join(' '));
//         } else if(emptySlot === false){
//             console.log(wagons.join(' '));
//         }
//     } else if (numberOfP > 0){
//         console.log(`There isn't enough space! ${numberOfP} people in a queue!`);
//         console.log(wagons.join(' '));
//     }
    

// }

// lift(['20',
//     '0 2 0'
// ])





// function blackFlag(arr){
//     let days = Number(arr.shift());
//     let dailyPlunder = Number(arr.shift());
//     let expected = Number(arr.shift());
//     let finalSum = 0;

//     for (let i = 1; i <= days; i++){
//         finalSum += dailyPlunder;
//         if (i % 3 === 0){
//             finalSum = finalSum + (dailyPlunder * 0.5);
//         }
//         if (i % 5 === 0){
//             finalSum = finalSum - (finalSum * 0.3);
//         }
//     }
//     if (finalSum >= expected){
//         console.log(`Ahoy! ${finalSum.toFixed(2)} plunder gained.`);
//     } else {
//         let percentage = (finalSum / expected).toFixed(4);
//         percentage *= 100;
//         console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
//     }
// }

// blackFlag(["1",
// "20",
// "380"]

// )






// function manOfWar(arr){
//     let pirateString = arr.shift();
//     let warshipString = arr.shift();

//     let pirateShip = pirateString.split('>').map((el)=>Number(el));
//     let warship = warshipString.split('>').map((el)=>Number(el));

//     const maxCap = Number(arr.shift());

//     for (let i = 0; i < arr.length; i++){
//         let wholeCommand = arr[i].split(' ');
//         let command = wholeCommand.shift();
//         if(command === 'Retire'){
//             break;
//         }
//         switch (command){
//             case 'Fire':
//                 if (warship.length > wholeCommand[0]){
//                     let CurrentealthOfSection = warship.splice(wholeCommand[0], );
//                     let newHealth = 
//                     warship = warship.splice(index, 1, )
//                 } else {
//                     continue;
//                 }
//                 break;
//             case 'Defend':
//                 // todo
//                 break;
//             case 'Repair':
//                 // todo
//                 break;
//             case 'Status':
//                 // todo
//                 break;
//         }
        
//     }
//     console.log(pirateShip);
// }

// manOfWar(["12>13>11>20>66",
// "12>22>33>44>55>32>18",
// "70",
// "Fire 2 11",
// "Fire 8 100",
// "Defend 3 6 11",
// "Defend 0 3 5",
// "Repair 1 33",
// "Status",
// "Retire"])
