// function employees(arr){
//     function Person(name, number){
//         this.name = name;
//         this.number = number;
//     }
//     for (let i = 0; i < arr.length; i++){
//         let names = arr[i];
//         let number = arr[i].length;
//         let person = new Person(names, number)
//         console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
//     }
// }

// employees([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
//     ]
//     )

// NB map() and forEach() ar similar by applying a function to
// an array element, but map() returns a new array
// while forEach() returns undefined

// function town(arr){
//     class Town{
//         constructor(name, lat, long){
//             this.town = name;
//             this.latitude = lat;
//             this.longitude = long;
//         }   
//     }

//     for (let i = 0; i < arr.length; i++){
//         let townData = arr[i].split(' | ');
//         for (let j = 1; j < townData.length; j++){
//             townData[j] = Number(townData[j]).toFixed(2);
            
//         }
//         let town = new Town(townData[0], townData[1], townData[2]);
//         console.log(`{ town: '${town.town}', latitude: '${town.latitude}', longitude: '${town.longitude}' }`);
//     }
// }


// town(['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625']
// )



// function storeProvision(arr1, arr2){
    
//     function Store(name, quantity){
//         this.name = name;
//         this.quantity = quantity;
//     }
//     let arrNames = [];
//     let arrQuants  = [];
//     for(let i = 0; i < arr1.length; i++){
//         if(i % 2 === 0) {
//             arrNames.push(arr1[i]);
//         } else{
//             arr1[i] = Number(arr1[i]);
//             arrQuants.push(arr1[i]);
//         }
//     }
//     for(let j = 0; j < arr2.length; j=j+2){
//         if(j % 2 === 0) {
//             if(arrNames.includes(arr2[j])){
//                 let index = arrNames.indexOf(arr2[j]);
//                 let added = Number(arr2[j+1]);
//                 arrQuants.splice(index, 1, (arrQuants[index] + Number(arr2[j+1])));
//             } else {
//                 arrNames.push(arr2[j]);
//                 arrQuants.push(Number(arr2[j+1]))
//             }
//         }
//     }
//     for (let k = 0; k < arrNames.length; k++){
//         let provision = new Store(arrNames[k], arrQuants[k]);
//         console.log(`${provision.name} -> ${provision.quantity}`);
//     }
// }


// BETTER SOLUTION wit ownProperty()
// function storeProvision(arr1, arr2){
// !!!! you cannot use constructor function because you will need to dynamically set the key:value for each iteration of the for loop
//     let storedProvision = {};

//     // populate store object with initial provisions
//     for(let i = 0; i < arr1.length; i=i+2){
//         let productName = arr1[i];
//         storedProvision[productName] = Number(arr1[i+1]);
//     }
//     for(let j = 0; j < arr2.length; j=j+2){
//         if(storedProvision.hasOwnProperty(arr2[j])){
//             let currentCount = Number(storedProvision[arr2[j]]);
//             currentCount+= Number(arr2[j+1]);
//             storedProvision[arr2[j]] = currentCount;
//         } else {
//             let newProduct = arr2[j];
//             storedProvision[newProduct] = Number(arr2[j+1]);
//         }
//     }
//     for (const [key, value] of Object.entries(storedProvision)) {
//         console.log(`${key} -> ${value}`);
//       }


// storeProvision([
//     'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
//     ],
//     [
//     'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//     ]
//     );



// 20/100 due to array-based solution
// function movie(arr){

//     function Movie(name, director, date){
//         this.name = name;
//         this.director = director;
//         this.date = date;
//     }
   
//     // for (let i = 0; i < arr.length; i++){
//     //     let arrSeparated = arr[i].split(' ');
        
//     //     if (arrSeparated[0] === 'addMovie'){
//     //         arrSeparated.shift();
//     //         names.push(arrSeparated.join(' '));
//     //         dates.push(1);
//     //         directors.push(1);
//     //     } else if (arrSeparated.includes('directedBy')){
//     //         arrSeparated = arrSeparated.join(' ');
//     //         let directedBySeparated = arrSeparated.split(' directedBy ');
//     //         if(names.includes(directedBySeparated[0])){
//     //             let index = names.indexOf(directedBySeparated[0]);
//     //             directors.splice(index, 1, directedBySeparated[1]);
//     //         } else {
//     //             continue;
//     //         }
            
//     //     } else if (arrSeparated.includes('onDate')){
//     //         arrSeparated = arrSeparated.join(' ');
//     //         let dateBySeparated = arrSeparated.split(' onDate ');
//     //         if(names.includes(dateBySeparated[0])){
//     //             let index = names.indexOf(dateBySeparated[0]);
//     //             dates.splice(index, 1, dateBySeparated[1]);
//     //         } else {
//     //             continue;
//     //         }
//     //     }
//     // }
//     // for (let j = 0; j < names.length; j++){
//     //     let movie = new Movie(names[j], directors[j], dates[j]);
//     //     console.log(JSON.stringify(movie));
//     // }

// }

// BETTER SOLUTION
// function movie(arr){
//     let movies = [];
//     arr.forEach((el)=>{
//         if (el.includes('addMovie')){
//             let m = el.split(' ');
//             m.shift();
//             el = m.join(' ');
//             let movie = el
//             movies.push({name:movie});
//         } else if (el.includes('directedBy')){
//             let movieInfo = el.split(' directedBy ');
//             let name = movieInfo[0];
//             let director = movieInfo[1];
//             // let [name, director] = el.split(' directedBy ');
//             movies.forEach(movie => {
//                 if(movie.name === name){
//                     movie.director = director;
//                 }
//             })
//         } else if (el.includes('onDate')){
//             let moviesInfo = el.split(' onDate ');
//             let nameM = moviesInfo[0];
//             let date = moviesInfo[1];
//             movies.forEach(movie =>{
//                 if(movie.name === nameM){
//                     movie.date = date;
//                 }
//             })
//         }
//     })
//     movies.forEach(el=>{
//         if(el.name && el.director && el.date){
//             console.log(JSON.stringify(el))
//         }
//     });
// }


// movie([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
//     ]
//     );

// CONSLUDING REMARKS:
// includes() is for string search in an array of strings
// hasOwnProperty() is for Objects and searches for keys, but note that
// Arrays are objects too in JS, so it can be used instead of includes()






// BRAKCET notiation vs DOT notation
// The main difference between dot 
// notation and bracket notation is 
// that the bracket notation allows us to 
// access object properties using variable.

// function test (){
//     let obj = {name: 'azis', age: 2}
    
//     let eyeColourVar = 'eyeColour';
//     obj[eyeColourVar] = 'green';
//     obj.hair = 'red'
//     console.log(obj);
// }
// test()


// NB 'for...of' loop === forEach()
// 'for...of' is used for iterabel collections => arrays and strings /for els in one Arr/
// 'for...in' is used for enumerable properties: Objects /for keys in one Obj/
// 'for...of' is attached to [Symbol.iterator] /linked list logic/
// 'for...in' is attached to keys


// dont forget that vars in for loops are just
// sandboxes that hold value just for the duration of the iteration
// you create an object in the array that you use as a tempalte
// to put into the heroes array to hold in as value for good

// tricks: 
// *instead of name = name, level = level => name, level
// *instead of Number(num) => +num
// function inventory(arr){
//     let heroes = [];
//     for (heroInfo of arr){
//         let [name, level, items] = heroInfo.split(' / ');

//         let currentHero = {
//             name: name,
//             level: Number(level),
//             items: items
//         };
//         heroes.push(currentHero);
//     }
//     // sorting objects in an array by specific key:value -> level
//     let sortedByLevel = heroes.sort((a,b)=>{
//         return a.level - b.level
//     })
//    for(let el of sortedByLevel){
//    console.log(`Hero: ${el.name}`);
//    console.log(`level => ${el.level}`);
//    console.log(`items => ${el.items}`);}

// }

// inventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
//     ]
//     );




// function dictionary(arr){
//     // create an object to store the objects from the array of objects
//     let parsedToObj = {};
//     for(let el of arr){
//         let obj = JSON.parse(el);
//         parsedToObj = Object.assign(parsedToObj, obj)
//     }

//     // create an array with obj keys and sort them
//     let arrOfKeys = Object.keys(parsedToObj);
//     let sortedArrOfKeys = arrOfKeys.sort((a,b)=>{
//         return a.localeCompare(b);
//     })    

//     // use the array for object keys to store the values in the big object you first made
//     for (let term of sortedArrOfKeys){
//         let definition = parsedToObj[term];
//         console.log(`Term: ${term} => Definition: ${definition}`);
//     }
// }

// dictionary([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
//     ]
//     )






// class Vehicle{
//     constructor(type, model, parts, fuel){
//         this.type = type;
//         this.model = model;
//         this.parts = parts;
//         this.fuel = fuel;
//         this.parts.quality = this.parts.engine * this.parts.power;
//     }
//     drive(lostFuel){
//         return this.fuel -= lostFuel;
//     }
// }

// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);



// class Storage{
//     constructor(capacity){
//         this.capacity = capacity;
//         this.storage = [];
//         this.totalCost = 0;
//     }
//     addProduct(product){
//         this.capacity -= product.quantity;
//         this.totalCost += product.price * product.quantity;
//         this.storage.push(product);

//     }
//     getProducts(storage){
//         let m = this.storage.map((el)=>JSON.stringify(el)).join('\n');
//         return m;
//     }
// }


// let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
// let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
// let productThree = {name: 'Bread', price: 1.10, quantity: 8};
// let storage = new Storage(50);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// storage.addProduct(productThree);
// console.log(storage.getProducts());
// console.log(storage.capacity);
// console.log(storage.totalCost);




// cannot sort log to be associated with capital letters
// function catalogue(arr){
//     let catKeys = [];
//     let collectionOfObjs = {};
//     for(let el of arr){
//         let KeyData = el.split(' : ');
//         collectionOfObjs[KeyData[0]] = Number(KeyData[1]);
//     }
//     let arrOfKeys = Object.keys(collectionOfObjs);
//     let sortedKeys = arrOfKeys.sort((a,b)=>{
//         return a.localeCompare(b);
//     })
    
//     let arrOfLetters = sortedKeys.map((word)=>{
//         return word[0].toString();
//     })
    

//     let uniqueArray = [];
//     function fil(arrOfLetters){
        
        
//         // Loop through array values
//         arrOfLetters.forEach((element)=>{
//             if(!uniqueArray.includes(element)){
//                 uniqueArray.push(element);
//             }
//         })
//         console.log(arrOfLetters);
        
//         return uniqueArray;
//     }

//     fil(arrOfLetters);


//     for (let j = 0; j < uniqueArray.length; j++){
//         console.log(uniqueArray[j]);
//         if(uniqueArray[j] === arrOfLetters[j][0]){
//             for (arrOfLetters[j] in sortedKeys){
//                 console.log(`${arrOfLetters[j]} : ${sortedKeys[arrOfLetters[j]]}`);
//             }
//         }
//     }
//     console.log(uniqueArray);
//     sortedKeys.forEach((e)=>{
//         console.log(`${e} : ${collectionOfObjs[e]}`);
//     })
// }

// catalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
//     ]
//     );