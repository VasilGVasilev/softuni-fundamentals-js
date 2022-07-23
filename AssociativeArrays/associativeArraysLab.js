// associative arrays are arrays that are made into objects
// instead of:
// var obj = {"my.key": "myValue"};
// Array into Object:
// var obj = [];
// obj["my.key"] = "myValue"

// an interesting point to consider is the difference between:
// for (let el of arr) vs for (let el in obj);

// in fact JS only has Objects and even Arrays are Objects,
// namely, iterable objects that have keys [property names] being numbers


// the trick here is that objects and arrays are mutable
// they can be changed
// primitives cannot ¬ dont confuse it with changing the value of a primitive type (let a = 5; a = 6;)
// function phoneBook(input){
//     let phonebook = [];
//     for (let el of input){
//         let [name, phone] = el.split(' ');
//         phonebook[name] = phone;
        
//     }
//     for (let key in phonebook){
//         console.log(`${key} -> ${phonebook[key]}`);
//     }
// }
// phoneBook(['Tim 0834212554',
// 'Peter 0877547887',
// 'Bill 0896543112',
// 'Tim 0876566344']
// );

// function meetings(input){
//     let meetings = {};
//     for (let el of input){
//         let [day, name] = el.split(' ');
//         if (meetings.hasOwnProperty(day)){
//             console.log(`Conflict on ${day}!`);
//         } else {
//             meetings[day] = name;
//             console.log(`Scheduled for ${day}`);
//         }
//     }
//     for (let [key, value] of Object.entries(meetings)){
//         console.log(`${key} -> ${value}`);
//     }
// }

// delete phonebook["Peter"] will delete the "Peter" key:value pair in the objects

// meetings(['Monday Peter',
// 'Wednesday Bill',
// 'Monday Tim',
// 'Friday Tim']
// );



// function addressBook(input){
//     let addressbook = {}
//     for (let el of input){
//         let [name, address] = el.split(':');
//         addressbook[name] = address;
//     }
//     let entries = Object.keys(addressbook);
//     entries.sort((a,b) => a.localeCompare(b));
//     for (let key of entries){
//         console.log(`${key} -> ${addressbook[key]}`);
//     }

// }

// addressBook(['Tim:Doe Crossing',
// 'Bill:Nelson Place',
// 'Peter:Carlyle Ave',
// 'Bill:Ornery Rd']
// )


// Map has a special functionality that the Object doesnt have
// Map can have numbers as keys, objects and assocArrays can only have strings 
// Map unlike Objects shows its size
// function storage(input){
//     let myMap = new Map();
//     for (let el of input){
//         let [name, quant] = el.split(' ')
//         if(myMap.has(name)){
//             quant = Number(quant);
//             let oldQuant = Number(myMap.get(name));
//             quant += oldQuant;
//             myMap.set(name, quant);
//         } else {
//             myMap.set(name, quant);
//         }
//     }
//     for (let [key, value] of myMap){
//         console.log(`${key} -> ${value}`);
//     }
// }

// storage(['tomatoes 10',
// 'coffee 5',
// 'olives 100',
// 'coffee 40']
// );


// function schoolGrades(input){
   
//     let schoolGrade = new Map();
//     for (let el of input){
//         let data = el.split(' ');
//         let name = data.shift();
//         if(!schoolGrade.has(name)){
//             schoolGrade.set(name, data)
//         } else {
//             let newGrades = schoolGrade.get(name);
//             data.map(e => newGrades.push(e))
//             schoolGrade.delete(name);
//             schoolGrade.set(name, newGrades);
//         }
//     }
//     let finishedGrades = new Map;
//     for (let student of schoolGrade){
//         let firstName = student[0];
//         let grades = student[1];
//         let totalGrade = 0;
//         for (let j = 0; j < grades.length; j++){
//             totalGrade+=Number(grades[j]);
//         }
//         totalGrade/=grades.length
//         finishedGrades.set(firstName, totalGrade)
//     }
//     let sorted = Array.from(finishedGrades.keys());
//     sorted = sorted.sort((a, b)=>a.localeCompare(b));

//     for (let key of sorted){
//         console.log(`${key}: ${finishedGrades.get(key).toFixed(2)}`);
//     }
// }

// schoolGrades(['Lilly 4 6 6 5',
// 'Tim 5 6',
// 'Tammy 2 4 3',
// 'Tim 6 6']
// );

// Set stores only unique values 
// let set = new Set([1, 2, 2, 3, 4])
// >> Set(4) {1, 2, 3, 4}


// trick is: you have to sort values
// so abstract the keys and then apply sort() logic
// on values as such keys[values] - keys[values]

// function wordOccur(input){
//     let counter = {};
//     for (let el of input){
//         if(!counter.hasOwnProperty(el)){
//             counter[el] = 1;
//         } else{
//             let prevNum = counter[el];
//             prevNum++;
//             counter[el] = prevNum;
//         }
//     }

//     let keysSorted = Object.keys(counter).sort(function(a,b){return counter[b] - counter[a]})
//     for (let keys of keysSorted){
//         console.log(`${keys} -> ${counter[keys]} times`);
//     }
// }
// wordOccur(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
