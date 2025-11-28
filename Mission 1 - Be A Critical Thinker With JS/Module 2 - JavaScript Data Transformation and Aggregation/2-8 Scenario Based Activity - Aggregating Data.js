const sales = [
  { category: "Electronics", item: "Wireless Mouse", price: 26, quantity: 120 },
  { category: "Fitness", item: "Yoga Mat", price: 20, quantity: 80 },
  { category: "Home Appliances", item: "Coffee Maker", price: 80, quantity: 30 },
  { category: "Fitness", item: "Running Shoes", price: 90, quantity: 45 },
  { category: "Stationery", item: "Notebook", price: 6, quantity: 300 },
  { category: "Electronics", item: "Bluetooth Speaker", price: 50, quantity: 60 },
];

const totalSalesByCategory = sales.reduce((table, sale) => {
    const {category, quantity, price} = sale

    ////table[category] = {totalRevenue: table[category].totalRevenue + price * quantity || price * quantity, itemCount: table[category].itemCount + quantity || quantity} -> Wrong Approach. Have to initialise for first iterating category manually
    // if(!table[category]){
    //     table[category].totalRevenue = 0
    //     table[category].itemCount = 0
    // } -> Also Wrong; have to make new object of category
    if(!table[category]){
        table[category] = {totalRevenue: 0, itemCount: 0}
    }

    table[category].totalRevenue +=  price * quantity
    table[category].itemCount += quantity

    return table    
}, {})

console.log('totalSalesByCategory->',totalSalesByCategory)
