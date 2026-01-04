class Animal {
    name: string;
    species: string;    //!First time -> These are class property declarations. They tell TypeScript:  “Every `Animal` object will have a `name` (string) , `species` (string) and sound(string).”
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name
        this.species = species    //!Second time -> These are constructor parameter types. They tell TypeScript:  “When creating a `Animal`, the arguments passed into the constructor must be a string, a string and a string.”
        this.sound = sound
    }   //! declared properties in a TypeScript class must exist on the instance and be initialized somehow

    // ! Method
    makeSound() {
        console.log(`${this.name} is making ${this.sound}`)
    }
}

const dog1 = new Animal('dogesh bhai', 'dog', 'ghew ghew')
console.log(dog1.name)
console.log(dog1.sound)
console.log(dog1.species)

const cat = new Animal('catto', 'cat', 'meaw meaw')
cat.makeSound()


//! using parameter properties to make class cleaner
class Animal2 {
    // public name: string; 
    // public species: string; //! These are public anyways, cz these can be accessed outside this class
    // public sound: string;
    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name
        // this.species = species
        // this.sound = sound
    }
}
const dog2= new Animal2('dhoghes vhai', 'dog', 'ghaw ghaw')
console.log(dog2.sound)   //! THIS IS STILL WORKING