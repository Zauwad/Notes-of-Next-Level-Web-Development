// ? Input
const rawApiData = [{
        id: 1,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 25.99,
        rating: 4.5,
        stock: 120
    },
    {
        id: 2,
        name: "Yoga Mat",
        category: "Fitness",
        price: 19.99,
        rating: 4.2,
        stock: 80
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 49.99,
        rating: 4.7,
        stock: 60
    },
    {
        id: 4,
        name: "Running Shoes",
        category: "Footwear",
        price: 89.99,
        rating: 4.3,
        stock: 45
    },
    {
        id: 5,
        name: "Coffee Maker",
        category: "Home Appliances",
        price: 79.99,
        rating: 4.6,
        stock: 30
    },
    {
        id: 6,
        name: "Gaming Keyboard",
        category: "Electronics",
        price: 59.99,
        rating: 4.4,
        stock: 75
    },
    {
        id: 7,
        name: "Water Bottle",
        category: "Fitness",
        price: 14.99,
        rating: 4.1,
        stock: 200
    },
    {
        id: 8,
        name: "LED Desk Lamp",
        category: "Home Decor",
        price: 34.99,
        rating: 4.5,
        stock: 90
    },
    {
        id: 9,
        name: "Smart Watch",
        category: "Electronics",
        price: 129.99,
        rating: 4.8,
        stock: 25
    },
    {
        id: 10,
        name: "Notebook",
        category: "Stationery",
        price: 5.99,
        rating: 4.0,
        stock: 300
    }
];
// * Want to get top 3 electronics
// ? Output => [{name: 'phone'}, {name: 'Smart Watch'}]



// * Process
// Todo filter => Electronics
// Todo sort => by rating
// Todo slice => First 3 (TOP 3)
// Todo map => according to desired output



// *Lets create a pipeline of methods now
const topElectronicProducts = rawApiData.filter(element => element.category === "Electronics")
                                        .sort((a, b) => b.rating - a.rating) //! sort(a-b) -> to get ascendending order & sort(b-a) -> To get descending order 
                                        .slice(0, 3)
                                        .map(item => ({name: item.name}) ) //! I used a one liner(used parenthesis "()") here
                                        // //.map(item => {
                                        ////     return {name: item.name} -> Have to return like this for map method. Otherwise use oneliner
                                        //// })
                                        //! each of them methods -> Returns an array
console.log(topElectronicProducts)