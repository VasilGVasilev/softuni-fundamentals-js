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



