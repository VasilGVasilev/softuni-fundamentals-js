// function burgersBus(arr){
//     let numberOfCities = Number(arr.shift());
//     let cityCounter = 0;
//     let totalProfit = 0;
//     for (let i = 0; i < arr.length; i = i + 3){
//         let city = arr[i];
//         let earned = Number(arr[i+1]);
//         let cost = Number(arr[i+2]);
//         cityCounter = cityCounter + 1;


//         if (cityCounter % 3 === 0){
//             cost = cost + (cost * 0.5);
//         }

//         if (cityCounter % 5 === 0){
//             earned = earned - (earned * 0.1);
//             if (cityCounter % 3 === 0){
//                 cost = Number(arr[i+2]);
//             }
//         } 

//         let profit = earned - cost;
        
//         console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);
//         totalProfit += profit;
//     }
//     console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
// }
    

// burgersBus(['5',
//     'Lille',
//     '2226.00',
//     '1200.60',
//     'Rennes',
//     '6320.60',
//     '5460.20',
//     'Reims',
//     '600.20',
//     '452.32',
//     'Bordeaux',
//     '6925.30',
//     '2650.40',
//     'Montpellier',
//     '680.50',
//     '290.20']
// )


// function spaceTravel(input){
//     let routeToTitan = input[0].split('||')
//     let fuel = Number(input[1]);
//     let ammo = Number(input[2]);
    
//     // to remove Titan for clarity
//     let missionFailed = false;
//     for (let i = 0; i < routeToTitan.length; i++){
//         let eachSection = routeToTitan[i].split(' ');
//         let command = eachSection[0];
//         let commandNum = Number(eachSection[1]);
        
//         if (command === 'Titan'){
//             console.log(`You have reached Titan, all passengers are safe.`);
//             break;
//         } else if (command === 'Travel'){
//             let distance = commandNum;
//             if (fuel >= distance){
//                 fuel = fuel - distance;
//                 console.log(`The spaceship travelled ${distance} light-years.`);
//             } else if (fuel < distance) {
//                 console.log(`Mission failed.`);
//                 break;
//             }
//         } else if (command === 'Enemy'){
//             let enemyPoints = commandNum;
//                 if(ammo >= commandNum){
//                     ammo = ammo - commandNum;
//                     console.log(`An enemy with ${enemyPoints} armour is defeated.`);
//                 } else if (ammo < commandNum) {
//                     let fuelNeeded = commandNum * 2;
//                     if (fuel >= fuelNeeded){
//                         console.log(`An enemy with ${enemyPoints} armour is outmaneuvered.`);
//                     } else if (fuel < fuelNeeded) {
//                         console.log(`Mission failed.`);
//                         break;
//                     }
//                 }
//         } else if (command === 'Repair'){
//             let newFuel = commandNum;
//             let newAmmo = commandNum * 2;
//             fuel += newFuel;
//             ammo += newAmmo;
//             console.log(`Ammunitions added: ${newAmmo}.`);
//             console.log(`Fuel added: ${newFuel}.`);
//         }
//     }
// }

// spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
// '60', 
// '100' ]
// );



// change from shift to [0];
// change from vars to eachSection[0]and[1];

// function phoneBook(input){
//     let phones = input.shift().split(', ');
    
//     for (let i = 0; i < input.length; i++){
        
//         let eachSection = input[i].split(' - ');
 
//         if (eachSection[0] === 'End'){
//             break;
//         } else if (eachSection[0] === 'Add'){
//             if (phones.includes(eachSection[1])){
//                 continue;
//             } else {
//                 phones.push(eachSection[1])
//             }
//         } else if (eachSection[0] === 'Remove'){
//             if (phones.includes(eachSection[1])){
//                 let index = phones.indexOf(eachSection[1]);
//                 phones.splice(index, 1);
//             } else {
//                 continue;
//             }
//         } else if (eachSection[0] === 'Bonus phone'){
//             let newEachSection = eachSection[1].split(':');
//             let oldPhone = newEachSection[0];
//             let newPhone = newEachSection[1];
//             if (phones.includes(oldPhone)){
//                 let ind = phones.indexOf(oldPhone);
//                 phones.splice(ind + 1, 0, newPhone);
//             } else {
//                 continue;
//             }
//         } else if (eachSection[0] === 'Last'){
//             let givenPhone = eachSection[1];
//             if (phones.includes(givenPhone)){
//                 let inde = phones.indexOf(givenPhone);
//                 phones.splice(inde, 1);
//                 phones.push(givenPhone);
//             } else {
//                 continue;
//             }
//         }
        
//     }
//     console.log(phones.join(', '));
// }

// phoneBook(["SamsungA50, MotorolaG5, HuaweiP10",
// "Last - SamsungA50",
// "Add - MotorolaG5",
// "End"]);




// // again
// function spaceTravel(input){
//     let routeToTitan = input[0].split('||')
//     let fuel = Number(input[1]);
//     let ammo = Number(input[2]);
    
//     // to remove Titan for clarity
//     let missionFailed = false;
//     for (let i = 0; i < routeToTitan.length; i++){
//         let eachSection = routeToTitan[i].split(' ');
//         let command = eachSection[0];
//         let commandNum = Number(eachSection[1]);
        
//         if (command === 'Titan'){
//             console.log(`You have reached Titan, all passengers are safe.`);
//             break;
//         } else if (command === 'Travel'){
//             let distance = commandNum;
//             if (fuel >= distance){
//                 fuel = fuel - distance;
//                 console.log(`The spaceship travelled ${distance} light-years.`);
//             } else if (fuel < distance) {
//                 console.log(`Mission failed.`);
//                 break;
//             }
//         } else if (command === 'Enemy'){
//             let enemyPoints = commandNum;
//                 if(ammo >= commandNum){
//                     ammo = ammo - commandNum;
//                     console.log(`An enemy with ${enemyPoints} armour is defeated.`);
//                 } else if (ammo < commandNum) {
//                     let fuelNeeded = commandNum * 2;
//                     if (fuel >= fuelNeeded){
//                         fuel = fuel - fuelNeeded;
//                         console.log(`An enemy with ${enemyPoints} armour is outmaneuvered.`);
//                     } else if (fuel < fuelNeeded) {
//                         console.log(`Mission failed.`);
//                         break;
//                     }
//                 }
//         } else if (command === 'Repair'){
//             let newFuel = commandNum;
//             let newAmmo = commandNum * 2;
//             fuel += newFuel;
//             ammo += newAmmo;
//             console.log(`Ammunitions added: ${newAmmo}.`);
//             console.log(`Fuel added: ${newFuel}.`);
//         }
//     }
// }
// spaceTravel([ 'Travel 10||Titan', 
// '10', 
// '100' ]
// );

