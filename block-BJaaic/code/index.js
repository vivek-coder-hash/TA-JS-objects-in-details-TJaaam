// # Inheritance

// Convert the below requirements into inheritance using prototypal patters.

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`


let animalMethods = {
    eat: function (){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function(newLocation) {
        this.location = newLocation
    },
    summary : function() {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }

}

function animal(location , numberOfLegs) {
    let animalObj = Object.create(animalMethods);
    animalObj.location =location ;
    animalObj.numberOfLegs =numberOfLegs ;
    return animalObj;
}

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`


let dogMethods = {
    bark : function() {
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function(newName) {
        this.name = newName;
    },
    changeColor: function(newColor) {
        this.color = newColor
    },
    summary: function () {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

function dog(name, color,location, numberOfLegs) {
    let dogObj = animal(location, numberOfLegs);
    console.log(dogObj) // Why bark is coming I didn't assign till as prototype of dogObj
    Object.setPrototypeOf(dogObj, dogMethods);
    console.log(dogObj);
    dogObj.name = name;
    dogObj.color = color;
    return dogObj;
}

Object.setPrototypeOf(dogMethods, animalMethods);
let animal1 = animal("Himachal" , 4);
let dog1 = dog("pochi", "black", "Delhi" , 3);

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

let catMethods = {
    meow : function() {
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName: function(newName) {
        this.name = newName;
    },
    changeColorOfEyes: function(newColor) {
        this.colorOfEyes = newColor
    },
    summary: function () {
        return `I am ${this.name} and I am of ${this.colorOfEyes} color. I can also bark`
    }
}

function cat(name, color, location, numberOfLegs ) {
    let catObj = animal(location, numberOfLegs);
    Object.setPrototypeOf(catObj, catMethods);
    catObj.name = name;
    catObj.colorOfEyes = color;
    return catObj;
}

Object.setPrototypeOf(catMethods , animalMethods);


let cat1 = cat("juhi", "red", "bareilly", 4);