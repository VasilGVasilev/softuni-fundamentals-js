// function personInfo(first, last, age){
//     let person = {};
//     person.firstName = first;
//     person.lastName = last;
//     person.age = age;
//     return person;
// }

// personInfo("Peter", 
// "Pan",
// "20"
// )


// // using Object.keys/values
// function city(obj){
//     let keys = Object.keys(obj);
//     let values = Object.values(obj);

//     for (let i = 0; i < keys.length; i++){
//         console.log(`${keys[i]} -> ${values[i]}`);
//     }
// }
// // using Object.entries
// function city(obj){
//     let obs = Object.entries(obj);

//     for (let i = 0; i < obs.length; i++){
//         console.log(`${obs[i][0]} -> ${obs[i][1]}`);
//     }
// }
// // using key only with for-of loop
// function city(obj){
//     for (let key of Object.keys(obj)){
//         console.log(`${key} -> ${obj[key]}`);
//     }
// }
// city({
//     name: "Plovdiv",
//     area: 389,
//     population: 1162358,
//     country: "Bulgaria",
//     postCode: "4000"
// }
// )


// NB JSON to Object with JSON.parse(JSONString)
// function solve(json){
//     let person = JSON.parse(json);
//     // JSON.parse(jsonStr) parses JSON string into an object
//     for (let key of Object.keys(person)){
//         console.log(`${key}: ${person[key]}`);
//     }
// }

// solve('{"name": "George", "age": 40}');



// // NB JSON.stringify(Object) to convert obj to a JSONString
// function convertToJSON(f, l, c){
//     let person = {}
//     person.name = f;
//     person.lastName = l;
//     person.hairColor = c;
//     console.log(JSON.stringify(person));
// }
// convertToJSON('Peter', 'Smith', 'Blond')

// REFERENCE vs VALUE Types

// with VALUE types:

// the var (contains) has a memory slot that contains the value
// and if you create a new var that takes the first var
// in fact you open a new memory slot that takes the value of the old memory slot

// let a = 5 #a has memory slot 991
// let b = a #b has memory slot 992
// a = 10
// BUT
// b = 5 
// because #992 contains the value 5 and is not affected
// by the change in #991 which is now 10 

// with REFERENCE types:

// the var references a memory slot
// the var does not contain the value in a memeory slot
// but references /points to the memory slot/

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// console.log(arr2); >> 1, 2, 3
// arr1[0] = 5
// console.log(arr2); >> 5, 2, 3

// because arr1 and arr2 point to the same memory slot
// to make a new one one could use .slice(0)
// which makes a whole new copy in a separate memory slot


// unnatural to JS solution
// function cats(arr){
//     class Cats{
//         constructor(name, age){
//             this.name = name;
//             this.age = age;
//         }
//         meow(){
//             console.log(`Meow`);
//         }
//     }
//     let cats = [];

//     for (let i = 0; i < arr.length; i++){
//         let catData = arr[i].split(' ');
//         cats.push(new Cats(catData[0], catData[1]))
//     }
//     console.log(typeof cats[0]);
// }

// more inherent to JS solution CONSTRUCTION FUNCTION

// function cats(arr){
//     function Cats(name, age){
//         this.name = name;
//         this.age = age;
//         this.meow = function(){
//             return 'Meow';
//         }
//     }

//     for (i = 0; i < arr.length; i++){
//         let catsData = arr[i].split(' ');
//         let cats = new Cats(catsData[0], catsData[1]);
//         // remember to call the method cats.meow()
//         console.log(`${cats.name}, age ${cats.age} says ${cats.meow()}`);
        
//     }
// }

// cats(['Candy 1', 'Poppy 3', 'Nyx 2']);



// function songs(arr){
//     let numberOfSongs = arr.shift();
//     let searchedType = arr.pop();
    
//     let validSongs = [];
//     for (let i = 0; i < arr.length; i++){
//         let songData = arr[i].split('_');
//         if (searchedType === 'all'){
//             validSongs.push(songData);
//         } else if (songData[0] === searchedType){
//             validSongs.push(songData);
//         }
//     }
//     function Song (name){
//         this.name = name;
//     }
//     for (let j = 0; j < validSongs.length; j++){
//         let song = new Song(validSongs[j][1]);
//         console.log(song.name);
//     }
// }


// CLEANER CODE VERSION
// function songs(arr){
//     let numberOfSongs = arr.shift();
//     let searchedType = arr.pop();
    
//     let validSongs = [];

//     function Song(type, name, time){
//         this.type = type;
//         this.name = name;
//         this.time = time;
//     }

//     for (let i = 0; i < numberOfSongs; i++){
//         let [type, name, time] = arr[i].split('_');
//         let song = new Song(type, name, time);
//         validSongs.push(song);
//     }

//     if (searchedType === 'all'){
//         validSongs.forEach((i)=>console.log(i.name));
//     } else {
//         let filtered = validSongs.filter((i)=>i.type === searchedType);
//         filtered.forEach((i)=>console.log(i.name));
//     }
    
// }
// songs([2,
//     'like_Replay_3:15',
//     'ban_Photoshop_3:48',
//     'all']
//     )