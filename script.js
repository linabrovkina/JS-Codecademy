// Kelvin Weather - With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

const kelvin = 0;
const celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);


//Dog Years - Here’s how you convert your age from “human years” to “dog years”: The first two years of a dog’s life count as 10.5 dog years each. Each year following equates to 4 dog years.

let myAge = 26;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4; 

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

let myName = 'Angelina'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

//Magic Eight Ball

let userName = 'Lina';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
const userQuestion = 'Will I have a dog?';
console.log(`${userName} has asked - ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

if(randomNumber === 0){
  eightBall = 'It is certain';
} else if (randomNumber === 1){
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2){
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3){
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4){
  eightBall = 'Do not count on it';
} else if (randomNumber === 5){
  eightBall = 'My sources say no';
} else if (randomNumber === 6){
  eightBall = 'Outlook not so good';
} else if (randomNumber === 7){
  eightBall = 'Signs point to yes';
}

console.log(`The Magic Eight Ball says, ${eightBall}`);

// Swith case

switch(randomNumber) {
    case 0:
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;
    case 2:
      eightBall = 'Reply hazy try again';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      break;
    case 4:
      eightBall = 'Do not count on it';
      break;
    case 5:
      eightBall = 'My sources say no';
      break;
    case 6:
      eightBall = 'Outlook not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
  }