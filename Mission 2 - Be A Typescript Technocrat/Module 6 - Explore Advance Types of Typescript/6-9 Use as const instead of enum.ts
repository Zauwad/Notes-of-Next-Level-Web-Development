// ! WE WILL GET RID OF ENUM AND USE MODERN APPROACH WITH OBJECT
/* A literal type is a type that represents exact values, not just general categories.
Instead of saying “this is a string,” you can say “this is specifically the string 'admin'.” */

// enum UserRoles {
//     admin = 'admin',
//     user = 'user',
//     viewer = 'viewer',
// }

const UserRoles = {
    admin: 'admin',
    user: 'user',
    viewer: 'viewer'
} as const // ! now cant be changed //! TypeScript will treat the object values as literal types now
// UserRoles.admin = 'Ja mon chay' //! Problem as it can be changed anytime

/*
typeof UserRoles -> type UserRoles{
    admin: 'admin',    //! This happens in background for typeof method
    user: 'user',
    viewer: 'viewer'
}

keyOf typeof UserRoles -> 'admin' | 'user' | 'viwer' //! WE WILL USE IT FOR TYPE DEFINE SINCE WE ARENT USING ENUM
O//! "admin" | "user" | "viewer" -> THESE ARE LITERAL TYPE NOR STRING VALUE
s//! Cause keyof only works on type define
*/



const isEditPermissble = (role: keyof typeof UserRoles) => { //! CANT USE OBJECT AS TYPES IN HERE //! Now itll work
    if (role === UserRoles.admin || role === UserRoles.user) {
    } else return false
}
const canEdit = isEditPermissble(UserRoles.admin) //! WITHOUT AS CONST TS TAKES USERROLES.ADMIN AS VALUE BUT IT NEEDS LITERAL TYPE HERE AS ARGUMENT
console.log(canEdit)


//! Another way is keeping the key's value in upperCase