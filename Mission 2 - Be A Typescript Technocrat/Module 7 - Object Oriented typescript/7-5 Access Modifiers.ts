class BankAccount {
    readonly userId: number; //! This cant be changed later on
    userName: string;
    //! private userBalance: number;  //! This can only be accessed in this class block
    protected userBalance: number    //! This can be accessed in this class and in its child classes
    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId
        this.userName = userName
        this.userBalance = userBalance
    }

    //! Method
    // addBalance = (money: number) => {
    //     this.userBalance += money  //! Shouldnt use arrow function
    // }
    addBalance(money: number) {
        this.userBalance += money
    }
}

class StudentBankAccount extends BankAccount { //! Child class of BankAccount
    accesedFromParent() {
        this.userBalance  //! WE CAN ACCESS IT HERE, ONLY BECAUSE OF 'PROTECTED' ACCESS MODIFIER
    }
}

const RidwanulAzimAccount = new BankAccount(1212, 'zawad', 0)
RidwanulAzimAccount.addBalance(100)
RidwanulAzimAccount.addBalance(50)

console.log(RidwanulAzimAccount)
// RidwanulAzimAccount.userId = 123 //! Will throw error //! readonly