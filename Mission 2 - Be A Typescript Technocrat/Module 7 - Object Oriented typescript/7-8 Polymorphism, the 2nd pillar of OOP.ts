// ! Same method works different for different instances
class Person {   //! Parent class 
    getSleep() {
        console.log('Normal person sleeps 8h')
    }
}
class Student extends Person {     //! Child Class
    getSleep() {
        console.log('Student sleeps 6h')
    }
}
class NextLevelDeveloper extends Person {   //! Child Class
    getSleep() {
        console.log('Next Level Developer sleeps 4h')
    }
}

const person1 = new Person()
const person2 = new Student()
const person3 = new NextLevelDeveloper()

const getSleepingHour = (param: Person) => {
    param.getSleep()
}

getSleepingHour(person1)
getSleepingHour(person2)
getSleepingHour(person3)





//! Another Example
class Shape {   //! PArent class 
    getArea(): number {
        return 0
    }
}
class Circle extends Shape {    //! Child class
    radius: number
    constructor(radius: number) {  //! Since method has to be same. So we can take argument via constructor
        super()  //! Must even though parent class has no constructor or no argument to take inside constructor
        this.radius = radius
    }

    // getArea(radius: number) { //! WOnt work cause method not same. Have to be same to same as parent's method
    //     return Math.PI * radius * radius
    // }
    getArea() {
        return Math.PI * this.radius * this.radius
    }
}
class Rectangle extends Shape {     //! Child class
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super()
        this.height = height
        this.width = width
    }
    getArea() {
        return this.height * this.width
    }
}


const shape1 = new Shape()
const shape2 = new Circle(5)
const shape3 = new Rectangle(8, 9)

const getAreaOfShape = (param: Shape) => {
    console.log(param.getArea())
}

getAreaOfShape(shape1)
getAreaOfShape(shape2)
getAreaOfShape(shape3)