const arrayOfNum: number[] = [1, 2, 3, 4]
// const arrayOfString: string[] = ['1', '2', '3', '4']
const arrayOfString: string[] = arrayOfNum.map(num => num.toString()) //! Above line but using loops
console.log(arrayOfString)







type arrayOfNum2 = {
    height: number;
    width: number;
}
type num = arrayOfNum2['height']    //! type num = number

// type arrayOfString2 = {
//     height: string;
//     width: string;
// }
type arrayOfString2 = {     //!Doing the above but using loops
    [key in 'height' | 'width']: string     //!type arrayOfString2 = { height: string; width: string; }
}   //! in acts like map(loop). key is a variable like used in maps
type arrayOfString3 = {
    [key in keyof arrayOfNum2]: string   //! Same but loop materials not hardcoded
}






// ! Now lets try with generics
type Area1<T> = {
    [key in keyof T]: boolean
}
const area1: Area1< {'height':string, 'width':string} > = {   //! Here height and width has to be boolean as per type Area
    height: true,
    width: false
}


type Area2<T> = {
    [key in keyof T] : T[key] //! Now more dynamic. type will be according to the inside of <T>
}
const area2: Area2< {'height': number ; 'width' : boolean} > = {
    height: 123,
    width: true
}
//! T -> {'height':number, 'width':boolean}
//! T[key] -> T['height'] -> string