// JS and TS
// string, number, boolen, undefined, null

// TS
// never, unknown, void ,any


let userName: string = 'Rashed khan'
// userName = 12 //! Here it will give me error here in developement period since it was declared string before. This is better for large scale projects
let userId = 123
// userId = '321' //! Same as before


// userName. //! Will give method suggestions after (.). This is really helpful
// userId. //! Same as before

let isAdmin = false //! implicit. Ts infers that its boolean
let isAdmin2: boolean = true //! Explicit

let x; //! Here it will be assigned any -> let x: any
x = 50
x = 'Fifty' //! Since 'any' so I can assign any data type later 

let y: undefined = undefined
// y = 5      //! But it wont work now since its explicitely undefined now
// y = 'five'