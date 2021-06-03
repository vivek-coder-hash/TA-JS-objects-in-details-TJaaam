## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)



```js

class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = age;
    }
    eat(){

    }
    sleep(){};
    walk(){};
}

class Player extends Person {
    constructor(sportsName, name, age, gender) {
        super(name, age, gender)
        this.sportsName = sportsName;
    }
    play(){};
}

class TeamName extends Player{
    constructor(teamName , sportsName){
        super(sportsName)
        this.teamName = teamName;
    }
    playCricket(){}
}

class Teacher extends Person {
    constructor(instituteName, name, age, gender) {
        super(name, age, gender)
        this.instituteName = instituteName;
    }
    teach(){};
}

class Artist extends Person{
    constructor(kind, name, age, gender){
        super(name, age, gender) ;
        this.kind = kind;
    }
    createArt(){};
}
alert("hi")
```