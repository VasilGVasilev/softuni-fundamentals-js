// function furniture(arr){
//     let furnitureObj = {};
//     for (let el of arr){
//         if (el === 'Purchase'){
//             break;
//         }
//         let pattern = />>(?<word>\w+)<<(?<price>[0-9]*[.]?[0-9]+)!(?<quantity>\d+)/g;
//         ;
//         while ((arrOfFurnitures = pattern.exec(el)) !== null){
//             let w = arrOfFurnitures[1];
//             let p = arrOfFurnitures[2];
//             let q = arrOfFurnitures[3];
//             if(!furnitureObj.hasOwnProperty(w)){
//                 furnitureObj[w] = {p, q};
                
//             }
//             // if(!furnitureObj[w].hasOwnProperty(p)){
//             //     furnitureObj[w][p] = q;
//             // }
//         }
        
        
//     }
//     console.log(furnitureObj);
//     let finishedFurniture = {};
//     Object.entries(furnitureObj).forEach(
//         ([key, value]) => {
//             let val1 = Number(value.p);
//             let val2 = Number(value.q);
//             let total = val1 * val2;
//             let sum = 'sum';
//             if(!finishedFurniture.hasOwnProperty(key)){
//                 finishedFurniture[key] = total;
//             }
            
            
//         }
//     );
//     console.log(`Bought furniture:`);
//     let totalSum = 0;
//     for (const [key, value] of Object.entries(finishedFurniture)) {
//         totalSum+=value;
//         console.log(key);
//     }
//     console.log(`Total money spend: ${totalSum}`);
// }


// you can either directly write >> or [>]{2}
// 312.23 -> [\d.]+ => would include 312....23423 too
// function furniture(input){
//     let text = input.join(' ');
//     let furnitureArr = []; 
//     let totalSum = 0;
//     let pattern = /[>]{2}(?<furniture>[A-Z][\w]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g;
//     let valid;
    
//     // Because valid isn't the result of exec, it's the result of !== (which should be either true or false).
//     // In other words, x = y !== z parses as x = (y !== z), not (x = y) !== z.
//     // While writing -> while((valid = pattern.exec(text)) !== null)
//     // Would print each array of matches => match[0] = '>>TV<<30.21314!5'; match[1] = 'TV'; etc

//     // valid.groups => to access groups' object in whole exec matches array
//     while((valid = pattern.exec(text)) !== null){
//         let validName = valid.groups.furniture;
//         let validPrice = valid.groups.price;
//         let validQuantity = valid.groups.quantity;

//         furnitureArr.push(validName);
//         totalSum+=(Number(validPrice)*Number(validQuantity));
//     }
//     console.log(`Bought furniture:`);
//     furnitureArr.forEach(element => {
//         console.log(`${element}`);
//     });
//     console.log(`Total money spend: ${totalSum.toFixed(2)}`);
// }

// furniture(['>>Laptop<<312.2323!3',
// '>>TV<<300.21314!5',
// '>Invalid<<!5',
// '>>TV<<300.21314!20',
// '>>Invalid<!5',
// '>>TV<<30.21314!5',
// '>>Invalid<<!!5',
// 'Purchase']
// )


// https://www.tsmean.com/articles/regex/javascript-regex-match-vs-exec-vs-matchall/
// match: method available on a string which takes a regex
// let result = testString.match(regex);
// exec: method available on a regex which takes a string
// let result = regex.exec(testString);

// exec() can access the groups, too
// match() accesses groups too
// But without the \g flag
// However you'll see groups and other info
// like the exec array, but you will see
// only the first match per string
// with /g
// [ '4', '55', '6', '6', '68' ]
// without /g
// [ '4', index: 1, input: 'G4e@55or%6g6!68e!!@ ', groups: undefined ]
// [ '1', index: 1, input: 'R1@!3a$y4456@', groups: undefined ]
// [ '5', index: 1, input: 'B5@i@#123ll', groups: undefined ]
// [ '54', index: 3, input: 'G@e54o$r6ge#', groups: undefined ]
// [ '7', index: 0, input: '7P%et^#e5346r', groups: undefined ]
// [ '553', index: 3, input: 'T$o553m&6', groups: undefined ]


// function race(input){
//     let nameMap = new Map();
//     let names = input.shift().split(', ');
//     names.forEach(person => {
//         nameMap.set(person, 0);
//     });
//     let letterPattern = /[A-Za-z]+/g;
//     let digitsPattern = /\d+/g;

//     for (let index = 0; index < input.length; index++) {
//         let currentLine = input[index];
//         if(currentLine === 'end of race'){
//             break;
//         }
//         // when you assign to a var the reference may break
//         let name = currentLine.match(letterPattern).join('');
//         let distance = currentLine.match(digitsPattern).join('').split('');
//         let totalDistance = 0;
//         distance.forEach(element => {
//             totalDistance += Number(element);
//         });
//         if(nameMap.has(name)){
//             let prevDistance = nameMap.get(name);
//             prevDistance+=totalDistance;
//             nameMap.set(name, prevDistance);
//         }
//     }
//     let sortedNames = Array.from(nameMap).sort((a,b)=>{
//         return b[1] - a[1];
//     })
    
//     let top3 = sortedNames.slice(0,3);
//     console.log(`1st place: ${top3[0][0]}`);
//     console.log(`2nd place: ${top3[1][0]}`);
//     console.log(`3rd place: ${top3[2][0]}`);
// }
// race(['George, Peter, Bill, Tom',
// 'G4e@55or%6g6!68e!!@ ',
// 'R1@!3a$y4456@',
// 'B5@i@#123ll',
// 'G@e54o$r6ge#',
// '7P%et^#e5346r',
// 'T$o553m&6',
// 'end of race']
// )