class Dog {
    constructor(name, breed, age, color){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
        Dog.#numberOfDogs++;
    }
    static #numberOfDogs = 0;

    static resetDogCount(){
        Dog.#numberOfDogs = 0;
    }

    // static set numberOfDogs(newValue){
    //     return Dog.#numberOfDogs++;
    // }

    bark() {
        // console.log(`Woof! Woof! I am ${this.name}`);
        throw new BarkError(this.name, this.breed);
    }
}

let brockie = new Dog('Brockie', 'German Shepherd', '3', 'Brown');

// console.log(brockie.bark());

// Create unique BarkError Class by inheriting from Error class
class BarkError extends Error {
    constructor(dogName, dogBreed){
        // super() is called to use the Error class' properties/methods
        super(`${dogName} the ${dogBreed} failed to bark`);
    }
}

// let newError = new Error()
try{
    brockie.bark();
} catch (error) {
    // throw new BarkError(brockie.name, brockie.breed);
    if (BarkError){
        console.log("Bark Error occured.")
    }
}

Dog.numberOfDogs = 10;
console.log(Dog.numberOfDogs);