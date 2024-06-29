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

// Race Day - You have been hired to write a program that will register runners for the race and give them instructions on race day.

let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let age = 25;

if(age > 18 && registeredEarly){
  raceNumber += 1;
}

if(age > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is: ${raceNumber}.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is: ${raceNumber}.`);
} else if (age < 18) {
  console.log(`You will race at 12:30pm. Your race number is: ${raceNumber}.`)
} else {
  console.log('Please see the registration desk.');
}

// Rock, Paper, Scissors
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if(userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Error! Please type rock, paper or scissors.');
  }
};

function getComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return "It's tie";
  }

  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won.';
    } else {
      return 'User won.';
    }
  }

  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer won.';
    } else {
      return 'You won.';
    }
  }

  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer won.';
    } else {
      return 'You won.';
    }
  }
  
  if(userChoice === 'bomb'){
    return 'Congratulations, you won';
  }
}

function playGame(){
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log('You choose: ' + userChoice);
  console.log('Computer choose: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice))
}

playGame();