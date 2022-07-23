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



function partyTime(input){
    let guestList = [];
    for (let el of input){
        if (el === 'PARTY'){
            break;
        } else {
            guestList.push(el);
            input.shift();
        }
    }
    input.shift();

    let partyGoers = input;
    let guestListMap = new Map();
    for (let guest of guestList){
        guestListMap.set(guest, 1);
    }



    for (let guest of partyGoers){
        if(guestListMap.has(guest)){
            guestListMap.delete(guest);
        }
    }
    
    let arrOfGuests = Array.from(guestListMap.keys());
    let vipGuests = [];
    let plebs = [];
    arrOfGuests.forEach((guest)=>{
        let tempTest = Number(guest[0]);
        if (isNaN(tempTest)){
            plebs.push(guest);
        } else {
            vipGuests.push(guest);
        }
    })
    console.log(arrOfGuests.length);
    vipGuests.forEach(e=>console.log(e))
    plebs.forEach(e=>console.log(e))
}

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

)