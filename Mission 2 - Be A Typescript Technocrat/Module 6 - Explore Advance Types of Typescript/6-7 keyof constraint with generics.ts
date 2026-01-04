type VehicleOfRichPeople = {
    car: string;  //! KEY: VALUE
    bike: string;
    cng: string;
}

type VehicleOfPoorPeople1 = 'car' | 'bike' | 'cng';
type VehicleOfPoorPeople2 = keyof VehicleOfRichPeople;
const myVehicle: VehicleOfPoorPeople1 = 'cng'
const myVehicle2: VehicleOfPoorPeople2 = 'cng' //! Same As Above





type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}
const user: User = {
    id: 222,    //! KEY: VALUE
    name: 'Ridwanul',
    address: {
        city: 'Mirpur'
    }
}
const myId = user['id']
const myName = user['name']
const myAddress = user['address']


// ! Want to get value after inputing object and key in a funciton
// const getValueFromObject = (obj: object, value: string) => { //! Here ts cant figure out the specification of obj and value. So will throw a error but will work
//     return obj[value]
// }
const getValueFromObject = (obj: User, key: keyof User) => { //! NOW ITS ALL GOOD
    return obj[key]
}
const value1 = getValueFromObject(user, 'name')
console.log(value1)




// ! NOW WE WANT THIS TO WORK WITH ANY OBJECT NOT JUST USER TYPE AND OF ITS KEYS
const getValueFromObject2 = <X>(obj: X, key: keyof X) => { //! MADE IT GENERIC NOW
    return obj[key]
}
const product = {
    company: 'Dove',
    region: 'BD',
    imported: 'China'
}
const result4 = getValueFromObject2(product, 'region')
console.log(result4)