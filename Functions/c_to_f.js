function convertCtoF(celsius){
    return 1.8*celsius + 32;
}

let celsius = 100;
let fahrenheitTemp = convertCtoF(celsius);
console.log(celsius + " is " + fahrenheitTemp.toFixed(2));

celsius = 45;
fahrenheitTemp = convertCtoF(celsius);
console.log(celsius + " is " + fahrenheitTemp.toFixed(2));

celsius = 19;
fahrenheitTemp = convertCtoF(celsius);
console.log(celsius + " is " + fahrenheitTemp.toFixed(2));

celsius = 0;
fahrenheitTemp = convertCtoF(celsius);
console.log(celsius + " is " + fahrenheitTemp.toFixed(2));

celsius = -7;
fahrenheitTemp = convertCtoF(celsius);
console.log(celsius + " is " + fahrenheitTemp.toFixed(2));

celsius = -40;
fahrenheitTemp = convertCtoF(celsius);
console.log(celsius + " is " + fahrenheitTemp.toFixed(2));

// To learn 

function convertFtoC(c) {
    let f = c * (9 / 5) + 32;
     return f;
 }
 
 let currentTemp1 = 100;
 let fahrenheitTemp1 = convertFtoC(currentTemp1);
 
 console.log(fahrenheitTemp1 + " ºF")
 
 let currentTemp2 = 45;
 let fahrenheitTemp2 = convertFtoC(currentTemp2);
 
 console.log(fahrenheitTemp2 + " ºF")

 let currentTemp3 = 19;
 let fahrenheitTemp3 = convertFtoC(currentTemp3);
 
 console.log(fahrenheitTemp3 + " ºF")
 
 let currentTemp4 = 0;
 let fahrenheitTemp4 = convertFtoC(currentTemp4);
 
 console.log(fahrenheitTemp4 + " ºF")
 
 let currentTemp5 = -7;
 let fahrenheitTemp5 = convertFtoC(currentTemp5);
 
 console.log(fahrenheitTemp5 + " ºF")
 
 let currentTemp6 = -40;
 let fahrenheitTemp6 = convertFtoC(currentTemp6);
 
 console.log(fahrenheitTemp6 + " ºF")