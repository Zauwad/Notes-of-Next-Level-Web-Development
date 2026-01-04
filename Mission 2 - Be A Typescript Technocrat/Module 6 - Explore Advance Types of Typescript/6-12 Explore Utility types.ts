type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color: string
}

// type ProductSummary = {
//     id: number; 
//     name: string;
//     price: number;
// }
// ! Will use 'Pick' to do the above
type ProductSummary = Pick < Product, 'id' | 'name' | 'price' >   //!type ProductSummary = { id: number; name: string; price: number; }


type ProductWithoutStock = Omit < Product, 'stock' >   //! type ProductWithoutStock = { id: number; name: string; price: number; color: string; }


type ProductWithAllRequired = Required < Product >     //! type ProductWithAllRequired = { id: number; name: string; price: number; stock: number; color: string; }


type ProductWithAllOptional = Partial < Product >      //!type ProductWithAllOptional = { id?: number; name?: string; price?: number; stock?: number; color?: string; }


type ProductWithAllReadOnly = Readonly < Product >     //! type ProductWithAllReadOnly = { readonly id: number; readonly name: string; readonly price: number; readonly stock: number; readonly color: string; }


//! IMPORTANT
// X const object1 : object = {} X
const object1 : Record < string, unknown > = {} //!For a better type defined object //! String in left side and unknown on right of object atrributes
