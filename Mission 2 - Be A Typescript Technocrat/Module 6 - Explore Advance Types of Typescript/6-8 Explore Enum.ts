// ! Using values from same place so in big projects no error happens for variable naming mistakes
// ! Seniors dont recommend it! -> // ! HAS TO CREATE FUNCTIONS AND ALL TO RUN AFTER COMPILING TO JS
// ! In v22.7.0 the flag --experimental-transform-types was added to enable TypeScript-only syntax that requires transformation, like enums and namespace
//! node --experimental-transform-types another-example.ts

//!USING  ENUMS CZ IT CAN BE USED FOR TYPES AND VALUES AT SAME TIME

enum UserRoles {
    admin = 'admin',
    user = 'user',
    viewer = 'viewer',
}

const isEditPermissble = (role: UserRoles) => { //! USing UserRoles in type defining
    if (role === UserRoles.admin || role === UserRoles.user) {  //! USing UserRoles for values as well
        return true
    } else return false
}
const canEdit = isEditPermissble(UserRoles.admin)  //! USing UserRoles for values in here too
console.log(canEdit)