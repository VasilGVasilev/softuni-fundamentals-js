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
// test();