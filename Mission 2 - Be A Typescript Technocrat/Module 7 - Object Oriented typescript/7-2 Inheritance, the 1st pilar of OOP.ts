class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name
        this.age = age
        this.address = address
    }

    getSleep(hours: number) {
        console.log(`${this.name} sleeps for ${hours}hours`)
    }
}






class Student extends Parent { }  //! INHERETING PROPERTIES FROM PARENT CLASS
const student1 = new Student('Fakibaj', 18, 'mirpur')
student1.getSleep(8)


class Teacher extends Parent {
    designation: string; //! OWN PROPERTY
    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address) //! HAVE TO USE "super" AND GIVE IT ARGUMENTS FOR PARENT CLASS CONSTRUCTOR
        this.designation = designation //!OWN PROPERTY
    }

    getSleep(hours: number) {
        console.log(`${this.name} sleeps for ${hours}hours`)
    }

    takeClass(hours: number) {
        console.log(`${this.name} takes ${hours} class`)
    }
}
const teacher1 = new Teacher('Mr.hardworker', 28, 'DMD', 'Senior Lecturer')
teacher1.takeClass(5)