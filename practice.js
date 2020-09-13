const calculateAgeInDogYears = (age) => {
    const ageInDogYears = age / 7;
    return ageInDogYears;
};

console.log(calculateAgeInDogYears(22));

// BEST IN SHOW

const petStatement = (dogBreed) => {
    if (dogBreed === 'meow') {
        return 'I prefer cats.';
    } else {
        return `my favorite dog breed is ${dogBreed}.`;
    };
};

const myFavorite = petStatement('meow');

console.log(`When it comes to pets, ${myFavorite}`);

// ADDITION

const add = (firstNum, secondNum, thirdNum) => {
    return firstNum + thirdNum + secondNum;
};

console.log(add(17, 4, 11));

// SELF-DRIVING CARS

const go = (direction, speed) => {
    if (speed > 75) {
        console.log(`The car is moving ${direction} at ${speed} mph. SLOW DOWN!`);
    } else {
        console.log(`The car is moving ${direction} at ${speed} mph.`);
    }
};

go('forwards', 45);
go('backwards', 8);
go('in circles', 12);
go('forwards', 82);

// EVENS OR ODDS

const arrayOfNumbers = [7, 4, 19, 128, 385]

const evenOrOdd = (numbers) => {
    for (const number of numbers) {
        console.log(number % 2 === 0 ? 'Even' : 'Odd');
    }
}

evenOrOdd(arrayOfNumbers);

// DOUBLE FUNCTIONS

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

const takeOut = (array) => {
    return array.filter(word => !word.startsWith('k'));
}

const printSentence = (array) => {
    return array.join(' ') + '.';
}

const filteredArray = takeOut(words);
console.log(printSentence(filteredArray));

// YOU CAN TUNE A PIANO, BUT YOU CAN'T...

const didHeCatchIt = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 2) {
        console.log('Sven hooked a tuna! :)');
    } else {
        console.log('Sven came up empty-handed. :(');
    }
}

didHeCatchIt();

// FAST FOOD (MULTIPLE PARAMETERS)

const makeBag = (sandwich, side, drink, dessert) => {
    const newObject = 
    {
        'sandwich': sandwich,
        'side': side,
        'drink': drink,
        'dessert': dessert
    }
    return newObject;
}

const takeOutBag = makeBag('chicken nuggets', 'fries', 'diet coke', 'oreo shake');

console.log(takeOutBag);

// SAME CHORES, DIFFERENT DAYS

const twice = number => number * 2;
const timesFive = number => number * 5;
const square = number => number * number;
const cube = number => number * number * number;

const bigify = (number, operation) => {
    const result = operation(number);
    return result;
}

const number = 7;
const by2 = bigify(number, twice);
const by5 = bigify(number, timesFive);
const byItself = bigify(number, square);
const cubed = bigify(number, cube);

const kaitlyn = {
    firstName: 'Kaitlyn',
    lastName: 'VanHook'
}

const wentToStore = () => `went to the grocery store`
const swept = () => `swept the floor`
const cleanedKitchen = () => `cleaned the kitchen`
const didLaundry = () => `did the laundry`
const cooked = () => `cooked dinner`
const washedDishes = () => `washed the dirty dishes`

const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => {
    return `${person.firstName} ${person.lastName} ${firstChore}, ${secondChore}, and ${thirdChore} on ${day}.`;
}
console.log(dayPlanner(cooked(), didLaundry(), cleanedKitchen(), kaitlyn, 'Sunday'));

