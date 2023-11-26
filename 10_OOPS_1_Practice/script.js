//String Literals vs Object
const strLit = "Hello";
const strObj = new String('Hello');

console.log(strLit, typeof strLit); //Hello string
console.log(strObj, typeof strObj); //String {'Hello'} 'object'

console.log(strLit.constructor); //ƒ String() { [native code] }
console.log(strObj.constructor); //ƒ String() { [native code] }
// So internally both strLit & strObj are running same code.



//Number Literal & Object
const numLit = 10;
const numObj = new Number(10);

console.log(numLit, typeof numLit); //10 'number'
console.log(numObj, typeof numObj); //Number {10} 'object'


//Boolean Literal & Object
const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit); //true 'boolean' 
console.log(boolObj, typeof boolObj); //Boolean {true} 'object'


//Array Object (NOT Literal)
const arrLit = [1,2,3,4];
const arrObj = new Array(1,2,3,4);

console.log(arrLit, typeof arrLit); //[1, 2, 3, 4] 'object'
console.log(arrObj, typeof arrObj); //[1, 2, 3, 4] 'object'



//Function Object & Literal
const funLit = function(x){
    return x*x;
}

const funObj = new Function('x','return x*x');

console.log(funLit(10), typeof funLit); //100 'function'
console.log(funObj(10), typeof funObj); //100 'function'
//function is also an Object which has type function.



//Object Literal vs Object
const objLit = {name:'John'};
const objObj = new Object({name:'john'});

console.log(objLit, typeof objLit); //{name: 'John'} 'object'
console.log(objObj, typeof objObj); //{name: 'John'} 'object'
//Behind both of above are calling a same Constructor.





//Creating Object by using Object Literal
const square1 = {
    'width':20,
    'height':20,
    'area': function() {
        return this.width * this.height;
    }
}

console.log(square1);

//Major drawback with Object Literal is for creating 100 objects, we have to write above code 100 times.
//Also, we have to chnage name for every object, which reduce the readability.


//Constructor Function
function Rectangle(width,height){
    this.width = width;
    this.height = height;
    this.area = () => {return this.width * this.height};
}

const rect1 = new Rectangle(10,20); //Object of Rectangle, return addresds of that object.
console.log(rect1);

const rect2 = Rectangle(20,30); //Can not call Constructor like that, it will not return anything.
console.log(rect2);  //Undefined

//We can add property OR function inside the specific object directly as follow:
rect1.color = 'red';
console.log(rect1.color); //'red'

//NOTE, this color property is not available in other object like rect2.
// console.log(rect2.color); //Uncaught TypeError





//OOPS Challenge

function Player(name){
    this.name=name;
    this.lvl=1;
    this.points=0;
}

Player.prototype.gainXp = function(pts){
    this.points += pts;
    if(this.points>=10){
        this.lvl +=1;
        this.points -=10;
    }
}

Player.prototype.describe = function() {
    return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
}

const player1 = new Player('Bob');
const player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe());
console.log(player2.describe());