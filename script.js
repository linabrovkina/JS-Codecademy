// Kelvin Weather - With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
const kelvin = 0;
const celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
