function wordBlanks(myNoun, myAdj, myVerb, myAdv) {
    let result = "";
    result = `A ${myNoun} ${myAdj} dog ${myVerb} ${myAdv}`
    return result;
}

console.log(wordBlanks("big", "fat", "ran", "quickly"));

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift(item);
}

const testArr = [1, 2, 3, 4, 5]

console.log(`Before ${JSON.stringify(testArr)}`);
console.log(nextInLine(testArr, 6));
console.log(`After ${JSON.stringify(testArr)}`);

function compareEquality(a, b) {
    if (a === b) {
        return "Equal"
    }
    return "Unequal"
}

console.log(compareEquality(3, "3"))

function testLessorEqual(val) {
    if (val <= 12) {
        return "Less than or equal to 12";
    }
    if (val <= 24) {
        return "Less than or equal to 24";
    }
    return "More than 24";
}

console.log(testLessorEqual(12));
console.log(testLessorEqual(23));
console.log(testLessorEqual(25));

function chainedIfElseStatements(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else if (num > 20) {
        return "Huge"
    }
}

console.log(chainedIfElseStatements(21));

const names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else return names[6]
}

console.log(golfScore(3, 6));

// Switch statements

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "Alpha"
            break;
        case 2:
            answer = "Beta"
            break;
        case 3:
            answer = "Gamma"
            break;
        case 4: 
            answer = "Delta"
            break;
    }
    return answer;
}

console.log(caseInSwitch(4));

function chainToSwitch(val) {
    var answer = ""
    switch (val) {
        case "Bob":
            answer = "Marley"
            break;
        case 42: 
            answer = "The Answer"
            break;
        case 1: 
            answer = "There is no #1"
            break;
        case 99:
            answer = "Missed me by this much"
            break;
        case 7: 
            answer = "Ate Nine"
            break;
    }
    return answer
}

console.log(chainToSwitch(7));

var count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break;
        case "J":
        case "Q":
        case "K":
        case "A":
            count--
            break;
    }
    return `${count} ${count > 0 ? "Hold" : "Bet"}`
}
cc(2); cc("K"); cc(10); cc("K"); cc("A")
console.log(cc(4));

var myObj = {
    name: "Jude",
    checkProp: "Yes"
}

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    }
    else return "Not found"
}

console.log(checkObj("name"));


var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA GOLD"
    }
};


var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collectionCopy);

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || []
        collection[id][prop].push(value);
    }
    else collection[id][prop] = value;
    return collection;
}

console.log(updateRecords("5439", "tracks", "Some track"));

// While Loops

var myArr = []

var i = 0
while (i < 4) {
    myArr.push(i)
    i++
}

// For Loops
console.log(myArr)

var myArr = [];

for (var i = 1; i < 6; i++) {
    myArr.push(i)
}

console.log(myArr)


var myArr = [];

for (var i = -1; i < 10; i +=2) {
    myArr.push(i)
}

console.log(myArr);

var myArr = [2, 3, 5, "Jude"];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);

// Nested For Loops

function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

// Do While loop. It runs at least once before checking the condition

var myArr = [10];

do {
    myArr.push(i);
    i++;
} while (i < 5);

console.log(myArr);

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0987654432",
        "likes": ["Pizza", "Coding", "Brownie points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0099887766",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "1234567889",
        "likes": ["Intruiging cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    },
]


function lookupProfile(name, prop) {
    for(var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}
console.log(lookupProfile("Kristian", "likes"));

// Random fractions and whole numbers

function randomDecimal() {
    return Math.random()
}

console.log(randomDecimal());

function randomWholeNum() {
    return Math.floor(Math.random() * 10)
}
console.log(randomWholeNum());

// ParseInt whith a radix

function convertToInteger(str) {
    return parseInt(str, 2)
}
console.log(convertToInteger("11;"));

// Nested conditional operator

function checkSign(num) {
    return (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero"
}
console.log(checkSign(10))

// Check scope

//var i = "Global scope"

function checkScope() {
    let i = "Function scope";
    if (i) {
        let i = "Block scope"
        console.log(`Variable i is a ${i}`)
    } else {console.log(`Variable i is a ${i}`)}
    return i;
}

console.log(checkScope());

// Print many times

function printManyTimes(str) {
    const sentence = `${str} is cool`;
    for (let i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }
    return str;
}
printManyTimes("Free code camp");

// Mutate an array declared with const

const s = [2, 5, 7];
function editInPlace() {
    s[0] = 5;
    s[1] = 6;
    s[2] = 8;
}
editInPlace();

console.log(s);

// Freeze Objects

const MATH_CONSTANTS = {
    pi: 3.142
}
Object.freeze(MATH_CONSTANTS);

function freezeObj() {
    try {
        MATH_CONSTANTS.pi = 99
    } catch (error) {
        console.log(error)
    }
    return MATH_CONSTANTS;
}
console.log(freezeObj());

// Arrow functions

const myConcat = (arr1, arr2) =>  arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]))


// Higher order arrow functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

const squareList = (arr) => {
    const positiveIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return positiveIntegers;
}
const squaredIntegers = (squareList([-1, 2, 3]));
console.log(squareList(realNumberArray))

// Increment

const increment = (function() {
    return function increment(num, value = 1) {
        return num + value;
    };
})()
console.log(increment(5, 2));
console.log(increment(5))

// Rest operator

const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0)
    }
})()

console.log(sum(1, 2, 3, 4, 5, 6));

// Spread operator 

const arr1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
let arr2;
(() => {
    arr2 = [...arr1];
    arr1[0] = null;
})()

console.log(arr2);

// Destructuring of objects

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    const { tomorrow: tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

// Access values from nested objects through destructuring

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 83.6}
};

function getMaxOfTmrw(forecast) {
    const { tomorrow: { max: maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// Destructuring arrays
const [z, x, , y] = [1, 2, 3, 4, 5];
// To get 4,
console.log(y);

let a = 8, b = 6;

(() => {
    [a, b] = [b, a];
})();
console.log(a);
console.log(b);

// Destructuring an array with rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    [a, b, ...arr] = list;
    return arr
}

const array = removeFirstTwo(source)
console.log(array)

// Using destructuring to pass an object's parameters into a function as an argument

const stats = {
    max: "56.60",
    standard_deviation: "4.34",
    median: "34.80",
    mode: "23.55",
    min: "-4.99",
    average: "37.67"
}

const half = (function() {
    return function half({ max, min }) {
        return max - min / 2
    }
})();

console.log(stats);
console.log(half(stats));
// Creating strings using template literals

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
}

function makeList(arr) {
    const resultDisplayArray = arr.map(item => {
        return  `<li class="text-warning">${item}</li>`
    });
    return resultDisplayArray;
}
console.log(makeList(result.failure));

// Concise object literal declarations using simple fields

const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "Male"));

// Writing concise, declarative funtions

const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict"
        this.gear = newGear;
    },
    saddles: 1
}

bicycle.setGear(3);
console.log(bicycle.gear);
console.log(bicycle);

// Using class syntax to define a constructor function
//Before

var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

console.log(SpaceShuttle)
var zeus = new SpaceShuttle("Jupiter");
console.log(zeus)
console.log(zeus.targetPlanet) // Logs Jupiter

// Now
class SpaceShip {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShip("Jupiter");
console.log(zeus.targetPlanet) // Logs Jupiter

function makeClasss() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClasss();
var carrot = new Vegetable("Carrot");
console.log(carrot.name);

// Use getters and setters to control access to an object
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
};

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = temp;
        };
        get temperature() {
            return this._temp
        };
        set temperature(updatedTemperature) {
            this.temp = updatedTemperature;
        }
    }
    return Thermostat;
};

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(thermos)
