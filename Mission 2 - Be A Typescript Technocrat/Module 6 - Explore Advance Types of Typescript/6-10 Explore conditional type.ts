// conditional type -> The type which depends on other type for its value. Using conditions
// extend basically is being used here like 'is in'

type A = null
type B = undefined

// type C = A extends null ? true : false; //! C is true here 
// type C = A extends number ? true : false //! HEre C is false
type C = A extends number ? true : B extends undefined ? true : false //! After adding more conditions C is true here

type RichPeoplesVehicle = {
    bike: string;
    car: string;
    ship: string
}

// type CheckVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false
type CheckVehicle<T> = T extends keyof RichPeoplesVehicle ? true : false
type hasCar = CheckVehicle<'car'> //! True //! This depends on above type