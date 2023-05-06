"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.name = name;
        this.id = id;
        this._balance = balance;
    }
    getBalance() {
        console.log(`My current balance is ${this._balance}`);
    }
    addDeposite(amount) {
        this._balance = this._balance + amount;
    }
}
class StudentAccount extends BankAccount {
    constructor(id, name, _blance) {
        super(id, name, _blance);
    }
    test() {
    }
}
const myAccount = new BankAccount(444, 'persian', 20);
console.log(myAccount);
