// function reveal(words, sentence){
//     let arrOfWords = words.split(', ');
//     let arrOfSent = sentence.split(' ');
//     arrOfWords.forEach(element => {
//         arrOfSent.forEach(word => {
//             if(word.includes('*') && element.length === word.length){
//                 sentence = sentence.replace(word, element)
//             }
//         });
        
//     });
//     console.log(sentence);
// }
// reveal('great, learning',
// 'softuni is ***** place for ******** new programming languages'
// );


// function modernTimes(str){
//     let arrOfStr = str.split(' ');
//     for (let e of arrOfStr){
//         if(e.startsWith('#') && (e.length > 1)){
//             let flag = true;
//             let wordLower = e.toLowerCase();
//             for(let i = 1; i < wordLower.length; i++){
//                 if(wordLower.charCodeAt(i) < 97 || wordLower.charCodeAt(i) > 122){
//                     flag = false;
//                     break;
//                 }

//             }
//             if (flag){
//                 console.log(e.slice(1));
//             }
//         }
//     }
// // }
// modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')



// function extractFile(input){
//     let arrOfPath = input.split('\\');
//     let file = arrOfPath[arrOfPath.length - 1];
//     let arrOfFiles = file.split('.');
//     let extension = arrOfFiles.pop();
//     arrOfFiles = arrOfFiles.join('.')
//     console.log(`File name: ${arrOfFiles}`);
//     console.log(`File extension: ${extension}`);
// // }
// extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')




// function stringSubstring(word, text){
//     let textArr = text.split(' ');
//     let flag = false;
//     for (let element of textArr){
//         if(element.toLowerCase() === word.toLowerCase()){
//             flag = true;
//             console.log(word.toLowerCase());
//             break
//         }
//     }
    
//     if(!flag){
//         console.log(`${word.toLowerCase()} not found!`);
//     }
// }
// stringSubstring('javascript',
// 'JavaScript is the best programming language')


// be carfeul with exact start and end of arr of elements so
// to not skip one

// function replaceRepChars(input){
//     let arr = input.split('');
//     let finalArr = ''
//     for (let i = 1; i < arr.length + 1; i++){
//         if(arr[i-1] !== arr[i]){
//             finalArr+=arr[i-1]
//         }
//     }
//     console.log(finalArr);
// }
// replaceRepChars('aaaaabbbbbcdddeeeedssaa');


// function PascalCase(input){
//     let arr = input.split('');
//     let arrOfWords = [];
//     let word = '';
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i].charCodeAt() <= 90 && arr[i].charCodeAt() >= 65){
//             arrOfWords.push(word);
//             word = '';
//         }
//         word+=arr[i]; 
//     }
//     arrOfWords.push(word);
//     arrOfWords.shift();
  
//     console.log(arrOfWords.join(', '));
// }
// PascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')



// function cutAndReverse(input){
//     let firstHalf = '';
//     let secondHalf = '';
//     for (let i = 0; i < input.length / 2; i++){
//         firstHalf += input[input.length / 2 - i - 1];
//         secondHalf += input[input.length - i - 1];
//     }
//     console.log(firstHalf);
//     console.log(secondHalf);
// }

// cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')



// function hardWord(input){
//     let str = input.shift();
//     let arr = input.shift();
//     let arrOfStr = str.split(' ');
//     let underscoreArr = [];
    
//     arr.forEach(word => {
//         let searchedWord = '';
//         for (let i = 0; i < word.length; i++){
//             searchedWord+='_';
//         }
//         underscoreArr.push(searchedWord)
        
//     });

//     // without sorting in decending order
//     // there will be gaps for example
//     // ______ could be filled with pie
//     // because replace searches for ___ for pie, but _____ fits too => pie__;
//     underscoreArr.sort((a,b) => b.length - a.length)
//     arr.sort((a,b) => b.length - a.length)
    
//     for (let i = 0; i < arr.length; i++){
//         str = str.replace(underscoreArr[i], arr[i])
//     }
//     console.log(str);
    
    
// }

// hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
// ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);








// function passGen(input){
//     let [firstStr, secondStr, word] = input;
//     let concatinated = firstStr.concat(secondStr);
//     word = word.toUpperCase();
  
//     let counter = 0;
//     for (let i = 0; i < concatinated.length; i++){
//         if(concatinated[i] === 'a' || concatinated[i] === 'e' || concatinated[i] === 'i' || concatinated[i] === 'o' || concatinated[i] === 'u'){
//             concatinated = concatinated.replace(concatinated[i], word[counter]);
//             counter++;
//         }
//         if (counter === word.length){
//             counter = 0;
//         }
//     }
//     // let reversed = concatinated.split('').reverse().join('');
   
//     console.log(`Your generated passowrd is ${concatinated.split('').reverse().join('')}`);
// }

// passGen([
//     'ilovepizza', 'ihatevegetables',
//     'orange'
//     ]
//     );



// function LettersChangeNums(input){
//     let arr = input.split(' ');
//     arr = arr.filter((e)=>e.length > 0);
//     let arrOfNums = [];

//     arr.forEach(element => {
//         let rawWord = element.split('');
//         let letterBefore = rawWord.shift();
//         let letterAfter = rawWord.pop();
//         let filteredNum = Number(rawWord.join(''));
        
//         if (letterBefore.charCodeAt(0) >= 65 && letterBefore.charCodeAt(0) <= 90){
//             filteredNum /= (letterBefore.charCodeAt(0) - 64);
//         }
        
//         if (letterBefore.charCodeAt(0) >= 97 && letterBefore.charCodeAt(0) <= 122){
//             filteredNum *= (letterBefore.charCodeAt(0) - 96);
//         }
        
//         if (letterAfter.charCodeAt(0) >= 65 && letterAfter.charCodeAt(0) <= 90){
//             filteredNum -= (letterAfter.charCodeAt(0) - 64);
//         }
        
//         if (letterAfter.charCodeAt(0) >= 97 && letterAfter.charCodeAt(0) <= 122){
//             filteredNum += (letterAfter.charCodeAt(0) - 96);
//         }
        
//         arrOfNums.push(filteredNum);
        
//     });
    
//     let sum = 0;
//     arrOfNums.forEach(element => {
//         sum+=element;
//     });
//     console.log(sum.toFixed(2));
// }
// LettersChangeNums('P34562Z q2576f   H456z');