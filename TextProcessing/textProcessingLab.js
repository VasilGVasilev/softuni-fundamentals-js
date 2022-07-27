// function printChar(input){
//     for (let el of input){
//         console.log(el);
//     }
// }

// printChar('AWord');
// The lastIndexOf() method, given one argument: 
// a substring to search for, searches the entire calling string, 
// and returns the index of the last occurrence of the specified substring. 


// The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
// function substring(string, startIndex, count){
//     let endIndex = startIndex+count;
//     let newStr = string.substring(startIndex, endIndex);
//     console.log(newStr);
// }




// substring('SkipWord', 4, 7)

// The replace() method returns a NEW string (so sentence = sentence.replace()) with some or all matches of a pattern replaced by a replacement .
// function censored(sentence, word){
//     let wordLen = word.length;
//     let censoredWord = ''
//     for(i = 0; i < wordLen; i++){
//         censoredWord+='*';
//     }
//     while (sentence.includes(word)){
//         sentence = sentence.replace(word, censoredWord);
//     }
//     console.log(sentence);
// }

// censored('A small small sentence with some words', 'small');



// function countStringOccur(sentence, word){
//     let arrOfWords = sentence.split(' ');
//     let counter = 0;
//     arrOfWords.forEach(element => {
//         if(element === word){
//             counter++
//         }
//     });
//     console.log(counter);
// }
// countStringOccur('This is a word and it also is a sentence',
// 'is'
// )