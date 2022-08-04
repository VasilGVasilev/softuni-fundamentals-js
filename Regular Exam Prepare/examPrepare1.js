// function worldTour(input){
//     let initialStops = input.shift();
//     for(let el of input){
        
//         if (el.includes(' ')){
//             // add or remove
//             let inputLine = el.split(' ');
//             let command = inputLine.shift();
//             inputLine = inputLine.join('');
//             let indexAndArgument = inputLine.split(':');
//             indexAndArgument.shift();
//             if(command === 'Add'){
//                 let index = indexAndArgument.shift();
//                 let string = indexAndArgument.shift();
//                 if(index <= initialStops.length && index >= 0){
//                     initialStops = initialStops.split('');
//                     initialStops.splice((index), 0, string);
//                     initialStops = initialStops.join('');
//                     console.log(initialStops);
//                 }
//             } else if(command === 'Remove') {
//                 let indexStart = indexAndArgument.shift();
//                 let indexStop = indexAndArgument.shift();
//                 if(indexStart <= initialStops.length && indexStart >= 0 && indexStop <= initialStops.length && indexStop >= 0){
//                     initialStops = initialStops.split('');
//                     let delCount = indexStop - indexStart;
//                     initialStops.splice((indexStart), delCount + 1);
//                     initialStops = initialStops.join('');
//                     console.log(initialStops);
//                 }
//             }
//         } else {
//             // switch
//             let inputLine = el.split(':');
//             let command = inputLine.shift();
//             let oldString = inputLine.shift();
//             let newString = inputLine.shift();
//             if(initialStops.includes(oldString)){
//                 while (initialStops.includes(oldString)){
//                     initialStops = initialStops.replace(oldString, newString);
//                 }
//             }
//             console.log(initialStops);
//         }
//         if(el === 'Travel'){
//             console.log(`Ready for world tour! Planned stops: ${initialStops}`);
//         }
        
//     }
// }
// worldTour(["Albania:Bulgaria:Cyprus:Deuchland",

// "Add Stop:3:Nigeria",

// "Remove Stop:4:8",

// "Switch:Albania: Azərbaycan",

// "Travel"])



// function fancyBarcode(input){
//     let barcodeCount = input.shift();
//     let pattern = /@[#]+[A-Z][A-Za-z0-9]{4,}[A-Z]@[#]+/g;
//     let digitPattern = /[0-9]+/g;
//     for (let el of input){
//         let name = el.match(pattern)
//         if (!name){
//             console.log("Invalid barcode");
//         } else{
//             name = name.join('');
//             if(!name.match(digitPattern)){
//                 console.log(`Product group: 00`);
//             } else {
//                 let digits = name.match(digitPattern).join('');
//                 console.log(`Product group: ${digits}`);
//             } 
//         }
        
//     }
// }

// fancyBarcode((["3",

// "@#FreshFisH@#",

// "@###Brea0D@###",

// "@##Che4s6E@##"]))




// function pianist(input){
//     let numOfPieces = input.shift();
//     let collection = {};
//     for (let i = 0; i < numOfPieces; i++){
//         let pieces = input[i].split('|');
//         let piece = pieces.shift();
//         let com = 'composer'
//         let composer = pieces.shift();
//         let kkk = 'key'
//         let key = pieces.shift();
//         if (!collection.hasOwnProperty(piece)){
//             collection[piece] = {};
//             collection[piece][com] = composer;
//             collection[piece][kkk] = key;

//         }
        
//     }
//     input = input.slice(numOfPieces);

//     for (let el of input){
        
//         let lineData = el.split('|');
//         let command = lineData.shift();
//         switch (command) {
//             case 'Add':
//                 let p = lineData.shift();
//                 let c = lineData.shift();
//                 let k = lineData.shift();
//                 if (!collection.hasOwnProperty(p)){
//                     collection[p] = {};
//                     let comp  = 'composer';
//                     let kkk = 'key';
//                     collection[p][comp] = c;
//                     collection[p][kkk] = k;
//                     console.log(`${p} by ${c} in ${k} added to the collection!`);
//                 } else {
//                     console.log(`${p} is already in the collection!`);
//                 }
//               break;
//             case 'Remove':
//                 let pi = lineData.shift();
//                 if (collection.hasOwnProperty(pi)){
//                     delete collection[pi];
//                     console.log(`Successfully removed ${pi}!`);
//                 } else {
//                     console.log(`Invalid operation! ${pi} does not exist in the collection.`);
//                 }
//               break;
//             case 'ChangeKey':
//                 let pie = lineData.shift();
//                 let newKey = lineData.shift();
//                 if (collection.hasOwnProperty(pie)){
//                     let comp = collection[pie];
//                     let kkkk  = 'key';
//                     collection[pie][kkkk] = newKey
//                     console.log(`Changed the key of ${pie} to ${newKey}!`);
//                 } else {
//                     console.log(`Invalid operation! ${pie} does not exist in the collection.`);
//                 }
//               break;
//         }
//         if (el === 'Stop'){
//             for (let piece of Object.keys(collection)){
                
//                 let arr = Object.entries(collection[piece])
//                 let composer = arr[0][1];
//                 let key = arr[1][1];
//                 console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
//             }
//             break;
//         }
//     }
// }
// pianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor', 
//     'Moonlight Sonata|Beethoven|C# Minor',  
//     'Clair de Lune|Debussy|C# Minor',  
//     'Add|Sonata No.2|Chopin|B Minor',  
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',  
//     'Add|Fur Elise|Beethoven|C# Minor',  
//     'Remove|Clair de Lune',   
//     'ChangeKey|Moonlight Sonata|C# Major',   
//     'Stop' 
//     ]);