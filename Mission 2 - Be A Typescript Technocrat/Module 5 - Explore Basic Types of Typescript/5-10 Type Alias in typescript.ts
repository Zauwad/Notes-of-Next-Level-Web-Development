//! Making two user and defining type manually in both
const user: {
    id: number;
    name: {
        first: string;
        middle: string;
        last: string;
    };
    gender: 'male' | 'female';
    phoneNo: string;
    address: {
        division: string,
        city: string
    }
} = {
    id: 123,
    name: {
        first: 'Ridwanul',
        middle: 'Azim',
        last: 'zawad'
    },
    gender: 'male',
    phoneNo: '0929129',
    address: {
        division: 'Dhaka',
        city: 'Mirpur'
    }
}

const user2: {
    id: number;
    name: {
        first: string;
        middle: string;
        last: string;
    };
    gender: 'male' | 'female';
    phoneNo: string;
    address: {
        division: string,
        city: string
    }
} = {
    id: 123,
    name: {
        first: 'Sajid',
        middle: 'Bin',
        last: 'Azim'
    },
    gender: 'male',
    phoneNo: '01203123',
    address: {
        division: 'Dhaka',
        city: 'Mirpur'
    }
}

//! INSTEAD DO THIS
// ! Type Allias
type User = {  //! Making a type seperately
    id: number;
    name: {
        first: string;
        middle: string;
        last: string;
    };
    gender: 'male' | 'female';
    phoneNo: string;
    address: {
        division: string,
        city: string
    }
}

const user3: User = {
    id: 123,
    name: {
        first: 'Ridwanul',
        middle: 'Azim',
        last: 'zawad'
    },
    gender: 'male',
    phoneNo: '0929129',
    address: {
        division: 'Dhaka',
        city: 'Mirpur'
    }
}
const user4: User = {
    id: 123,
    name: {
        first: 'Sajid',
        middle: 'Bin',
        last: 'Azim'
    },
    gender: 'male',
    phoneNo: '01203123',
    address: {
        division: 'Dhaka',
        city: 'Mirpur'
    }
}

type Name = string
const myName: Name = 'Ridwanul'

// ! Type Allias in funtion
type AddFunc = (number1: number, number2: number) => number
const add: AddFunc = (num1, num2) => num1 + num2
