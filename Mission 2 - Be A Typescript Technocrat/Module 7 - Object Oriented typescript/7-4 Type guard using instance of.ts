class Person {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    getSleep(hours: number) {
        console.log(`${this.name} gets ${hours}hrs sleep`)
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name)
    }
    doStudy(hours: number) {
        console.log(`${this.name} studys for ${hours}hrs`)
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name)
    }
    doTeach(hours: number) {
        console.log(`${this.name} teaches for ${hours}hrs`)
    }
}

//! Instance Type Guard
const getUserInfo = (user: Person) => { //!ts cant identify if user student or teacher. will only give parent methods
    if (user instanceof Student) {
        user.doStudy(5)
    } else if (user instanceof Teacher) {  //! DUE TO INSTANCE, TS GIVES PROPER SUGGESTIONS FOR METHODS
        user.doTeach(6)
    } else {
        user.getSleep(10)
    }
}
const student1 = new Student('Mr.Student')
const Teacher1 = new Teacher('Mr.Teacher')




//! More clean efficient way
//! Fuction Guard
const isStudent = (user: Person) => {
    return user instanceof Student  //! True or False    //! TRUE -> user is Student -> ts defines true like this
}
const isTeacher = (user: Person) => {
    return user instanceof Teacher   //! True or False   //! TRUE -> user is Teacher -> ts defines true like this
}


const getUserInfo2 = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(5)
    } else if (isTeacher(user)) {
        user.doTeach(6)
    } else {
        user.getSleep(10)
    }
}