//Getting SubTotal of a dataset
const cartItems = [
  { id: 1, name: "Wireless Mouse", price: 25.99, quantity: 2 },
  { id: 2, name: "Bluetooth Speaker", price: 49.99, quantity: 1 },
  { id: 3, name: "Notebook", price: 5.99, quantity: 5 },
];

const subtotal = cartItems.reduce((acc, item) => {}, 0)
                        //! acc means accumulator;   //! Here 0 is the initial value. We set the output format type in here ie. number, string(""), object etc
                        //! ^in each iteration  
                        //! ^acc saves till that iteration's subtotal
                        //! reduce method's item iterates over each item in cartItems

const subtotal2 = cartItems.reduce((subTotal, product) => {
    console.log('each subTotal and product->',subTotal, product)

    return subTotal + (product.price * product.quantity)
}, 0)



// Finding Best Scorer
const players = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 88 },
  { name: "Ethan", score: 95 }
];

const bestScorer = players.reduce((bestPlayer, player) => {
    console.log('best player and player in each step->', bestPlayer, player)

    if (bestPlayer.score > player.score){
        return bestPlayer
    }
    else{
        return player
    }
}, players[0]) //! Setting first player as bestPlayer default
