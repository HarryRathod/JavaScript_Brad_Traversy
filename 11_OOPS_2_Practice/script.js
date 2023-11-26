class Shape{
    constructor(name){
        this.name=name;
    }

    logName(){
        console.log(`Shape Name: ${this.name}`);
    }
}

class Rectangle extends Shape{
    #cnt=0;
    constructor(name,width,height){
        super(name);
        this.width = width;
        this.height= height;
        this.#cnt=1;
    }

    area(){
        return this.height * this.width;
    }

    perimeter(){
        return 2*(this.width + this.height);
    }

    logName(){
        console.log(`Rectangle Name: ${this.name}`);
        console.log(`Count NO. ${this.#cnt}`);
    }
}

const rect = new Rectangle('Rect1',10,10);
console.log(rect.area());
console.log(rect.perimeter());
rect.logName();


//Under the Hood of above code (Except Private Variable)
//(NOT written all code due to errors faced)

// const Shape= {
//     name: name,
//     logName: function(){
//         console.log(`Shape Name: ${this.name}`);
//     }
// }
// 
// function Rectangle(name,width,height) { 
//     return Object.create(Shape,{
//     name:{
//         value: name,
//     },
//     width:{
//         value: width,
//     },
//     height:{
//         value:height,
//     },
//     logName: function(){
//         console.log(`Rectangle Name: ${name}`);
//     }
// });
// }
// 
// 
// const rect2 = new Rectangle('Rect1',10,20);
// 
// console.log(rect2);




// Wallet Class Implementation with Private Property

class Wallet{
    #balance=0;
    #transactions=[];

    get balance(){
        return this.#balance;
    }

    get transaction(){
        return this.#transactions;
    }

    withdraw(amount){
        if(this.#balance<amount){
            console.log('Insufficient Funds! - you do not have enough money.');
            return;
        }
        this.#balance -=amount;

        this.#processWithdraw(amount);
    }

    #processWithdraw(amount){
        console.log(`Withdrawing ${amount}`);
        this.#transactions.push({
            type:'withdraw',
            amount,
        });
    }

    deposit(amount){
        this.#balance +=amount;

        this.#processDeposit(amount);
    }

    #processDeposit(amount){
        console.log(`Depositing ${amount}`);

        this.#transactions.push({
            type: 'deposit',
            amount,
        });
    }
}

const myWallet = new Wallet();

myWallet.deposit(500);
myWallet.withdraw(150);

console.log(myWallet.balance);



//Get Property Flags

let decorators = Object.getOwnPropertyDescriptors(rect);
console.log(decorators);


