// function stringGame(input){
//     let rawStr = input.shift();
//     for (let command of input){
//         if(command.includes('Change')){
//             let data = command.split(' ');
//             let replacement = data.pop();
//             let char = data.pop();
//             while (rawStr.includes(char)){
//                 rawStr = rawStr.replace(char, replacement)
//             }
//             console.log(rawStr);
//         }
//         if(command.includes('Includes')){
//             let data = command.split(' ');
//             let substring = data.pop();
//             if (rawStr.includes(substring)){
//                 console.log('True');
//             } else {
//                 console.log('False');
//             }
//         }
//         if(command.includes('End')){
//             let data = command.split(' ');
//             let substring = data.pop();
//             if (rawStr.endsWith(substring)){
//                 console.log('True');
//             } else {
//                 console.log('False');
//             }
//         }
//         if(command.includes('Uppercase')){
//             rawStr = rawStr.toUpperCase();
//             console.log(rawStr);
//         }
//         if(command.includes('FindIndex')){
//             let data = command.split(' ');
//             let char = data.pop();
//             let index = rawStr.indexOf(char);
//             console.log(index);
//         }
//         if(command.includes('Cut')){
//             let data = command.split(' ');
//             let count = Number(data.pop());
//             let startIndex = Number(data.pop());
//             let endIndex = count + startIndex;
//             let resStr = rawStr.substring(startIndex, endIndex);
//             console.log(resStr);
//         }
//         if(command.includes('Done')){
//             break;
//         }
//     }
// }

// stringGame(["*S0ftUni is the B3St Plac3**",
// "Change 2 o",
// "Includes best",
// "End is",
// "Uppercase",
// "FindIndex P",
// "Cut 3 7",
// "Done"]);



// function bossRush(input){
//     let n = Number(input.shift());
//     let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s{1}[A-Za-z]+)#/g;
//     for(let line of input){
//         let arrOfMatch = line.match(pattern);
//         if (arrOfMatch === null){
//             console.log("Access denied!");
//         } else {
//             while ((arrOfMatch = pattern.exec(line)) !== null){
//                 let name = arrOfMatch.groups.name;
//                 let title = arrOfMatch.groups.title;
//                 let strength = arrOfMatch[1].length;
//                 let armor = arrOfMatch[2].length;
//                 console.log(`${name}, The ${title}`);
//                 console.log(`>> Strength: ${strength}`);
//                 console.log(`>> Armor: ${armor}`);
//             }
//         }

//     }
// }
// bossRush(['3',
// '|STEFAN|:#H1gh Overseer#',
// '|IVAN|:#Master detective#',
// '|KARL|: #Marketing lead#']);



// function dict(input){
//     let wordsAndDefs = input.shift();
//     let testWords = input.shift();
//     let command = input.shift();
    
//     let notebook = new Map();
    
//     let arrOfWordsAndDefs = wordsAndDefs.split(' | ');
//     arrOfWordsAndDefs.forEach(element => {
//         let rawData = element.split(': ');
//         let word = rawData.shift();
//         let def = rawData.shift();
//         let arrOfDefs = [];
        
//         if(!notebook.has(word)){
            
//             notebook.set(word, arrOfDefs);
//             arrOfDefs.push(def);
//         } else {
//             let arr = notebook.get(word);
//             arr.push(def);
//             notebook.set(word, arr);
            
//         }
//     });

//     let wordInNotebook = Array.from(notebook.keys());
//     let wordToBeTested = testWords.split(' | ');
//     if(command === 'Test'){
//         for (let wordToTest of wordToBeTested){
//             if (notebook.has(wordToTest)){
//                     console.log(`${wordToTest}:`);
//                     let arrOfDefinitions = notebook.get(wordToTest);
//                     for (let defs of arrOfDefinitions){
//                         console.log(` -${defs}`);
//                     }
//             }
//         }
//     } else if (command === 'Hand Over'){
//         let arrOfWordsInNotebook = Array.from(notebook.keys());
//         console.log(arrOfWordsInNotebook.join(' '));
//     }
// }


// dict(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
// "care | kitchen | flower",
// "Test"]);

