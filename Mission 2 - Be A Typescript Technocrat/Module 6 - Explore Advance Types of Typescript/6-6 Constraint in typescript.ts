// ! Constraint -> Strict Rules

type student = { name: string; id: number } //! For cleaner code
const addStudentToCourse = <T extends student>(studentInfo: T) => {  //! NOW EACH STUDENT HAS TO HAVE NAME AND ID. BUT CAN HAVE DIFFERENT OTHER ATTRIBUTES AS WELL
    return {
        course: 'Level Two',
        ...studentInfo
    }
}
const student1 = {
    name: 'Rahim',
    id: 123,
    hasBike: true
}
const student2 = {
    name: 'Kahim',
    id: 345,
    hasBike: false,
    dateOfBirth: '02-03-2003',
    nationality: 'Bangladesh'
}
const student3 = {
    name: 'Mahim',

    hasCar: true
}

const result1 = addStudentToCourse(student1)
const result2 = addStudentToCourse(student2)
const result3 = addStudentToCourse(student3) //! SINCE NO ID, ITS A PROBLEM NOW
