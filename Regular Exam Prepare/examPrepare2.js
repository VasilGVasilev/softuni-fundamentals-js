// function passwordReset(input){
//     let initialPass = input.shift();
//     for (let el of input){
//         if (el.includes('TakeOdd')){
//             initialPass = filterOdd(initialPass)
//             console.log(initialPass);
//         }
//         if (el.includes('Cut')){
//             let rawData = el.split(' ');
//             let length = Number(rawData.pop());
//             let index = Number(rawData.pop());

//             initialPass = initialPass.split('');
//             manipulStr = initialPass.splice(index, length);
//             initialPass = initialPass.join('');
//             console.log(initialPass);
//         }
//         if(el.includes('Substitute')){
//             let rawData = el.split(' ');
//             let substi = rawData.pop();
//             let substr = rawData.pop();
            
//             if (initialPass.includes(substr)){
//                 while (initialPass.includes(substr)){
//                     initialPass = initialPass.replace(substr, substi);
//                 }
//                 console.log(initialPass);
//             } else {
//                 console.log(`Nothing to replace!`);
//             }
//         }
//         if (el === 'Done'){
//             console.log(`Your password is: ${initialPass}`);
//             break;
//         }
//         function filterOdd(initialPass){
//             let newStr = '';
//             for (let i = 1; i < initialPass.length; i=i+2){
//                 newStr+=initialPass[i]
//             }
//             return newStr
//         }
//     }
// }

// passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
// "TakeOdd",
// "Cut 15 3",
// "Substitute :: -",
// "Substitute | ^",
// "Done"])





// function destinationMapper(input){
//     let pattern = /(=)[A-Za-z]{3,}(=)|(\/)[A-Za-z]{3,}(\/)/g;
//     let arrOfStr = input.match(pattern);
//     if (arrOfStr === null){
//         console.log(`Destinations: `);
//         console.log(`Travel Points: 0`);
//     } else {
//         let validStr = [];
//     let travelPointsRaw = '';
//     arrOfStr.forEach(element => {
//         element = element.substring(1, (element.length - 1));
//         validStr.push(element);
//         travelPointsRaw+=element;
//     });
//     let travelPoints = travelPointsRaw.length;
//     let finalString = validStr.join(', ');
//         console.log(`Destinations: ${finalString}`);
//         console.log(`Travel Points: ${travelPoints}`); 
//     }
// }
// destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")




function nfs(input){
    let carsNum = input.shift();
    let cars = new Map();
    for (let i = 0; i < carsNum; i++){
        let carMileageFuel = input[i].split('|');
        let car = carMileageFuel.shift();
        let mileage = Number(carMileageFuel.shift());
        let fuel = Number(carMileageFuel.shift());
        let arrOfMilFuel = [];
        arrOfMilFuel.push(mileage);
        arrOfMilFuel.push(fuel);
        cars.set(car, arrOfMilFuel);
        
    }
    input = input.slice(carsNum);

    for (let line of input){
        if(line === 'Stop'){
            // cars iterate over Map
            for (const [key, value] of cars) {
                console.log(`${key} -> Mileage: ${value[0]} kms, Fuel in the tank: ${value[1]} lt.`);
            }
            
            break;
        }
        if(line.includes('Drive')){
            let rawData = line.split(' : ');
            let fuel = Number(rawData.pop());
            let distance = Number(rawData.pop());
            let car = rawData.pop();
            if(cars.has(car)){
                let arrOfCar = cars.get(car);
                let red = false;
                if(arrOfCar[1] >= fuel){
                    arrOfCar[1] -= fuel;
                    arrOfCar[0] += distance;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                    if(arrOfCar[0] >= 100000){
                        console.log(`Time to sell the ${car}!`);
                        cars.delete(car);
                        red = true;
                    } 
                } else {
                    console.log(`Not enough fuel to make that ride`);
                }
                if(!red){
                    cars.set(car, arrOfCar);
                }
                
            }
        }
        if(line.includes('Refuel')){
            let rawData = line.split(' : ');
            let fuel = Number(rawData.pop());
            let car = rawData.pop();
            if(cars.has(car)){
                let arrOfCar = cars.get(car);
                if(arrOfCar[1] < 75){
                    let initalFuel = arrOfCar[1];
                    arrOfCar[1] += fuel;
                    if (arrOfCar[1] > 75){
                        arrOfCar[1] = 75;
                        fuel = 75 - initalFuel;
                    }
                    console.log(`${car} refueled with ${fuel} liters`);
                } else {
                    console.log(`Not enough fuel to make that ride`);
                }
                cars.set(car, arrOfCar);
            }
        }
        if(line.includes('Revert')){
            let rawData = line.split(' : ');
            let km = Number(rawData.pop());
            let car = rawData.pop();
            if(cars.has(car)){
                let arrOfCar = cars.get(car);
                arrOfCar[0] -= km;
                if (arrOfCar[0] <= 10000){
                    arrOfCar[0] = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${km} kilometers`);
                }
                cars.set(car, arrOfCar)
            }
        }
    }
}
nfs([
    '4',

    'Lamborghini Veneno|11111|74',
    
    'Bugatti Veyron|12345|67',
    
    'Koenigsegg CCXR|67890|12',
    
    'Aston Martin Valkryie|99900|50',
    
    'Drive : Koenigsegg CCXR : 382 : 82',
    
    'Drive : Aston Martin Valkryie : 99 : 23',
    
    'Drive : Aston Martin Valkryie : 2 : 1',
    
    'Refuel : Lamborghini Veneno : 40',
    
    'Revert : Bugatti Veyron : 2000',
    
    'Stop'
    ])