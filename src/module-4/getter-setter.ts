export { }
class BankAccount {
    id: number;
    name: string;
    private _balance: number


    constructor(id: number, name: string, balance: number) {
        this.name = name
        this.id = id
        this._balance = balance
    }


    //getter
    get balance(): number {
        return this._balance
    }
    getBalance(): number {
        return this._balance
    }


    set deposite(amount:number){
        this._balance=this._balance+amount
    }


    // addDeposite(amount: number) {
    //     this._balance = this._balance + amount
    // }
}


class StudentAccount extends BankAccount {
    constructor(id: number, name: string, _blance: number) {
        super(id, name, _blance)
    }
    test() {

    }
}

const myAccount = new BankAccount(444, 'persian', 20)
console.log(myAccount.getBalance());
