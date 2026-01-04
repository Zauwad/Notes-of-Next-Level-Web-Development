class BankAccount {
    readonly userId: number;
    userName: string;
    protected _userBalance: number
    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId
        this.userName = userName
        this._userBalance = userBalance
    }

    // addBalance = (money: number) => {
    //     this._userBalance += money  //! Shouldnt use arrow function
    // }
    // addBalance(money: number) {
    //     this._userBalance += money
    // }


    set addBalance(money: number) { //!Setter
        this._userBalance += money   //! no return
    }
    get showMoney() {   //! Getter
        return this._userBalance  //! has to return
    }
}


const RidwanulAzimAccount = new BankAccount(1212, 'zawad', 0)
// RidwanulAzimAccount.addBalance(100)
// RidwanulAzimAccount.addBalance(50)

// console.log(RidwanulAzimAccount)
// RidwanulAzimAccount.userId = 123 //! Will throw error //! readonly

RidwanulAzimAccount.addBalance = 100  //! Can call like an attribute/property, on function needed
RidwanulAzimAccount.addBalance = 20
console.log(RidwanulAzimAccount)
console.log(RidwanulAzimAccount.showMoney) //! Same no function neeed. works as a attribute