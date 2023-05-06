"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(id, name, balance) {
        this.name = name;
        this.id = id;
        this._balance = balance;
    }
    //getter
    get balance() {
        return this._balance;
    }
    getBalance() {
        return this._balance;
    }
    set deposite(amount) {
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
console.log(myAccount.getBalance());
