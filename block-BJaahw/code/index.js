// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function createUser(name, age) {
    let obj = {
        name : name,
        age : age,
    }
    return obj;
}

let user = createUser("Ravindra" , 21); 
// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

user.sayHello = function () {
    return alert(`Welcome ${this.name}`)
}

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.


let personOne = createUser("Raju" ,23);
let personTwo = createUser("Ankit" , 25);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

let createMethod = {
    sayHello : function () {
        return alert(`Welcome ${this.name}`)
    }
}

function createUser(name, age) {
    let obj = Object.create(createMethod)
    obj.name = name;
    obj.age = age;
    return obj;
}


// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

function CreateUser(name, age) {
    this.name = name;
    this.age = age;
}

 CreateUser.prototype = {
    sayHello : function () {
        return alert(`Welcome ${this.name}`)
    },
}

let person = new CreateUser("Jhon" , 23);



// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
personOne = new CreateUser("Anikt" , 28);
personTwo = new CreateUser("Prashant" , 27);

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello();
personTwo.sayHello();

// 8. Convert the `createUser` function into `User` class.
class CreateUser {
    constructor (name, age) {
       this.name = name;
       this.age = age;
    }
    sayHello (){
        return alert(`Welcome ${this.name}`)
    }
}

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

personOne = new CreateUser("Suraj" , 26);
personTwo = new CreateUser("Sunny" , 20);


// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

personOne.sayHello();
personTwo.sayHello();