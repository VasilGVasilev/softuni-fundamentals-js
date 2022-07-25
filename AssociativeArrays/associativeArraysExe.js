// 80/100 for input[0] instead of input.shift()
// function wordsTracker(input){
//     let wordTracker = {};
//     let relevantWords = input.shift().split(' ')
//     // populate Object
//     for(let key of relevantWords){
//         wordTracker[key] = 0;
//     }

//     // update Object
//     for (let el of input){
//         if (relevantWords.includes(el)){
//             let counter = wordTracker[el];
//             counter++;
//             wordTracker[el] = counter;
//         } 
//     }
    
//     // sort Object by values but make an array of keys
//     let sortedKeys = Object.keys(wordTracker).sort((a,b) => {
//         return wordTracker[b] - wordTracker[a]
//     })

//     for(let keys of sortedKeys){
//         console.log(`${keys} - ${wordTracker[keys]}`);
//     }
    
// }


// alternative

// function wordsTracker(data){
//     let result = new Map();

//     let words = data.shift().split(' ');
//     for (let word of words){
//         result.set(word, 0)
//     }

//     for (let word of data){
//         if(result.has(word)){
//             let oldValue = result.get(word);
//             result.set(word, oldValue + 1);
//         }
//     }
//     // instead of for...in -> obj.entries()
//     // console.table for a better visual of Maps with key:value but with indexes too

//     // result.entries() is: [ [ 'is', 1 ], [ 'the', 3 ] ]
//     let sortedResult = Array.from(result.entries()).sort(([keyA, valueA], [keyB, valueB]) =>{
//         return valueB - valueA;
//     })
    
//     for (let [key, value] of sortedResult){
//         console.log(key, `-`, value);
//     }
// }


// wordsTracker([
//     'is the', 
//     'first', 'sentence', 'Here', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']    
//     )


// function oddOccur(input){
//     let oddOccurances = new Map();
//     let arr = input.split(' ');
//     for (let e of arr){
//         e = e.toLowerCase();
//         if (oddOccurances.has(e)){
//             let oldValue = oddOccurances.get(e);
//             oddOccurances.set(e, oldValue + 1);
//         } else {
//             oddOccurances.set(e, 1);
//         }
//     }

//     // need [key, value] in filter due to having an array of arrays 
//     // and to filter values you need to represent the enviroment fully
//     // even tho you do not use key
//     let filteredOccurances = Array.from(oddOccurances).filter(([key, value]) => {
//         return value % 2 !== 0;
//     })

//     // simple string manipulation by adding to a buffer
//     let buffer = '';
//     for (let [key, value] of filteredOccurances){
//         buffer += key + ' ';
//     }
//     console.log(buffer);
// }

// oddOccur('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')



// function piccolo(input){
//     let parkingLot = new Set();

//     for (let line of input){
//         let tokens = line.split(', ');
//         let command = tokens[0];
//         let carNumber = tokens[1];
//         switch(command){
//             case 'IN':
//                 parkingLot.add(carNumber);
//                 break;
//             case 'OUT':
//                 parkingLot.delete(carNumber);
//                 break;
//         }
//     }
//     // Map and Set > Object who dont show their size so easily
//     if(parkingLot.size === 0){
//         console.log('Parking Lot is Empty');
//     }

//     // can be values only not array of [key,value] arrays
//     let sortedParkingLot = Array.from(parkingLot.values()).sort((a, b)=> a.localeCompare(b))
//     for (let el of sortedParkingLot){
//         console.log(el);
//     }
// }

// piccolo(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'IN, CA9999TT',
// 'IN, CA2866HI',
// 'OUT, CA1234TA',
// 'IN, CA2844AA',
// 'OUT, CA2866HI',
// 'IN, CA9876HH',
// 'IN, CA2822UU']
// )



// function partyTime(input){
//     let vip = [];
//     let normal = [];

//     let isParty = false;

//     for (let el of input){
//         if (el === 'PARTY'){
//             isParty = true;
//             continue;
//         }
//         if(!isParty){
//             let firstCh = Number(el[0]);
//             if(isNaN(firstCh)){
//                 normal.push(el);
//             } else{
//                 vip.push(el);
//             }
//         } else{
//             let firstCh = Number(el[0]);
//             if (isNaN(firstCh)){
//                 let index = normal.indexOf(el);
//                 normal.splice(index, 1);
//             } else {
//                 let index = vip.indexOf(el);
//                 vip.splice(index, 1)
//             }
//         }
//     }
//     let size = vip.length + normal.length;
//     console.log(size);
//     vip.forEach((el) => console.log(el));
//     normal.forEach((el) => console.log(el));
// }

// partyTime(['m8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'xys2FYzn',
// 'MDzcM9ZK',
// 'PARTY',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'm8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ'
// ])

// Difference between Set(), Map(), Object() -> https://stackoverflow.com/questions/24085708/what-is-difference-between-map-and-set

// runtime error 20/100 due to using split and making an array of string which should be made into a string only -> cards.toString();
// function cardGame(input){
//     let power = {
//         '2': 2,
//         '3': 3,
//         '4': 4,
//         '5': 5,
//         '6': 6,
//         '7': 7,
//         '8': 8,
//         '9': 9,
//         '10': 10,
//         'J': 11,
//         'Q': 12,
//         'K': 13,
//         'A': 14
//     };
//     let type = {
//         'S': 4,
//         'H': 3,
//         'D': 2,
//         'C': 1
//     };
//     let people = {};
//     let finalPeople = {};
//     for (let el of input){

//         let [name, gcards] = el.split(': ');

//         cards = gcards.split(', ');
        

//         // populate object with all cards each player has
//         if(!people.hasOwnProperty(name)){
//             people[name] = cards.toString();
//         } else {
//             let currentCardsBatch = cards + ',' + people[name];
//             people[name] = currentCardsBatch;
//         }
//     }

    
//     for (let card in people){
//         let name = card;
//         let arrOfCards = people[card].split(',');
        
//         let setOfPeople = new Set(arrOfCards);
//         let arrOfSetOfPeople = Array.from(setOfPeople);

//         let sumOfCards = 0;
        
//         arrOfSetOfPeople.forEach(specificCard => {
//             // specificCard can be KD but also 10D
            
//             if (specificCard.length == 2){
//                 let [p,t] = specificCard.split('');
//                 sumOfCards+=(Number(power[p])*Number(type[t]));
//             } else {
//                 let [p,o,t] = specificCard.split('');
//                 p+=o;
//                 sumOfCards+=(Number(power[p])*Number(type[t]));
//             }
 
//         });
        
//         // update Object directly with sum as value
//         if (!finalPeople.hasOwnProperty(name)) {
//             finalPeople[name] = sumOfCards;
//         } else {
//             let currentSum = final[name] + sumOfCards;
//             finalPeople[name] = currentSum;
//         }
//     }
    
//     for (let key in finalPeople) {
//         console.log(`${key}: ${finalPeople[key]}`);
//       }
    
    
// }


// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
//     ]
//     )




// function companyUsers(input){
//     let register = {};
//     for (let el of input){
//         let [name, id] = el.split(' -> ');
//         let setForIds = new Set();

//             if(!register.hasOwnProperty(name)){
//                 register[name] = setForIds;
//                 setForIds.add(id);
//             } else {
//                 register[name].add(id);
//             }
//     }
//     let sortedArr = Object.keys(register).sort((a,b) => {
//         return a.localeCompare(b)});
//     for (let key of sortedArr){
//         console.log(key);
//         register[key].forEach(element => {
//             console.log(`-- ${element}`);
//         });
//     }
   
// }

// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo -> XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111'
//     ]
    
//     )



// function minerTask(input){
//     counter = 1;
//     let inventory = {};
//     let item = [];
//     let quant = [];
//     for (let el of input){
//         if(counter % 2 !== 0){
//             item.push(el);
//         } else {
//             quant.push(el);
//         }
//         counter++;
//     }
//     for (let i = 0; i < item.length; i++){
//         if(!inventory.hasOwnProperty(item[i])){
//             inventory[item[i]] = Number(quant[i]);
//         } else {
//             let currentVal = inventory[item[i]];
//             currentVal+=Number(quant[i]);
//             inventory[item[i]] = currentVal;
//         }
//     }
//     for (let key in inventory){
//         console.log(`${key} -> ${inventory[key]}`);
//     }
// }

// minerTask([
// 'gold',
// '155',
// 'silver',
// '10',
// 'copper',
// '17',
// 'gold',
// '15'
// ]
//     )


// interesting observation in the if hasOwnProperty statement:
// travelSchedule.country = town creates a key named country >> {country: 'Sofia'}
// travelSchedule[country] = town uses up the var stored at country >> { Bulgaria: 'Sofia', France: 'Paris', Albania: 'Tirana' }

// 42/100
// function travelTime(input){
    
//     // store town/cost objects
//     // take the cheapest offer by town
//     // make an array of country/town objects
//     let towns = {};
//     let countries = {};

//     input.forEach(element => {
//         let [country, town, cost] = element.split(' > ');

//         // towns
//         if(!towns.hasOwnProperty(town)){
//             towns[town] = Number(cost);
//         } else {
//             let currentCost = Number(cost);
//             let townInObject = Object.keys(towns)[0];
//             if(Number(towns[townInObject]) > Number(currentCost)){
//                 towns[townInObject] = currentCost;
//             }
//         }
        
//         // countries
//         if(!countries.hasOwnProperty(country)){
//             countries[country] = [town];
//         } else {
//             if(!countries[country].includes(town)){
//                 countries[country].push(town);
//             }  
//         }

//     });


//     let sortedCountries = Object.keys(countries).sort((a,b) => a.localeCompare(b))
    

//     sortedCountries.forEach(c => {
//         if(Object.keys(countries[c]).length > 1){
//             var str = ''
//             let currentTowns = countries[c];
//             let unsortedTowns = {};
//             currentTowns.forEach(e=>{
//                 unsortedTowns[e] = towns[e]
//             })
//             let sortedTownsArr = Object.keys(unsortedTowns).sort((a,b)=> Number(unsortedTowns[a]) - Number(unsortedTowns[b]));

            
//             // sortedTowns.forEach(t => {
//             //     let cost = towns[t];

//             //     str += ' ' + t + ' -> ' + cost;
//             // });
//             for (let t = 0; t < sortedTownsArr.length; t++){
//                 let cost = unsortedTowns[sortedTownsArr[t]];
//                 str += sortedTownsArr[t] + ' -> ' + cost + ' ';
//             }
//             console.log(c,'->',str + ' ');
//         } else {
//             countries[c].forEach(t => {
//                 let cost = towns[t];
//                 console.log(c, '->', t, '->', cost);
                
//             });
//         }
        
//     });
    
// }

// you can create objects by easy means of: 
// if(!obj.hasOwnProperty(key))
// obj[key] = value
// you can even make objects be keys of objects
// if(!obj[key].hasOwnProperty(key2))
// obj[key][key2] = value

// function travelTime(input){
//     let destinations = {};

//     input.forEach((el)=> {
//         let [country, town, cost] = el.split(" > ");
//         cost = Number(cost);
//         if (!destinations.hasOwnProperty(country)) {
//             destinations[country] = {};
//         }
        
//         if (!destinations[country].hasOwnProperty(town)) {
//             destinations[country][town] = cost;
//         } else {
//             let prevCost = destinations[country][town];
//             if(prevCost>cost){
//                 destinations[country][town] = cost;
//             }
//         }
//     })
//     let orderedCountries = Object.keys(destinations).sort((a,b) => a.localeCompare(b));

//     let result = "";

//     // you can use country in the for...of loop and it has a separate scope than the country in forEach

//     // first loop through countries then on line 497 loop through towns sorted by cost
//     for (let country of orderedCountries) {
//         result += country + " -> ";

//         // solving your initial buggy code -> there is separation of the list of towns divided by country in for loop cycle
//         // crucial is the country var to be explicitly noted in the following function so that you can access destinations[country] -> town;
//         let sortedPrices = Object.keys(destinations[country]).sort((a, b) => travelCost(a, b, destinations, country));

//         // the above line has the function of:
//         // 1) sorting the towns by comparing their values /cost/ 
//         // 2) storing the towns in an array to use as a key to access value in console.log()
//         for (let town of sortedPrices) {
//             result += `${town} -> ${destinations[country][town]} `;
//         }
//         // newline trick
//         result += "\n";
//     }
//     console.log(result);

//     function travelCost(town1, town2, destination, country) {
//         let priceO = destination[country][town1];
//         let priceT = destination[country][town2];

//         return priceO - priceT
//     }
// }

// travelTime(
//     // 'Bulgaria > Sofia > 25000',
//     // 'aaa > Sofia > 1',
//     // 'aa > Orgrimar > 0',
//     // 'Albania > Tirana > 25000',
//     // 'zz > Aarna > 25010',
//     // 'Bulgaria > Lukovit > 10'
//     [
//         "Bulgaria > Sofia > 500",
//         "Bulgaria > Sopot > 800",
//         "France > Paris > 2000",
//         "Albania > Tirana > 1000",
//         "Bulgaria > Sofia > 200"
//         ]
        
    
//     )



function arenaTier(input){

}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]
    )