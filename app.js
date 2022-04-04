//today's forecast in kelvin

const kelvin = prompt("what's today's temperature in kelvin");

//kelvin to celsius conversion
let celsius = kelvin - 273;

//celsius to fahrenheit conversion
let fahrenheit = celsius*(9/5)+32;

/*using floor method from Math object to round off fahrenheit value*/
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit}. degrees Fahrenheit.`)

// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);
