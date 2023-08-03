// Given a string, reverse each word in the sentence

var string ="welcome to new york";
var s2 = "2.1.12.4.9";
var newString = string.split("").reverse().join("");
var new2 = s2.split(".").map(Number);

// how to check if object is array or not
console.log(Object.prototype.toString.call(new2) === '[object Array]');

//how to empty an array in javascript
new2 =[]
console.log(new2);

/**
 * Primitive data types are immutable and are not object because they lack properties and methods
 * number, string,boolean, biginit,symbol,undefined,null 
 *
 * Reference data types are mutable. Reference data types consist of functions, arrays and objects. 
 *  
 * What is mutability in js. if a data type is mutable, that means that you can change  it. Mutability allows you to moify existing values without creating new ones.
 * 
*/




const deepVal =obj =>{
Object.keys(obj).forEach(prop =>{
    if(typeof obj[prop] === 'object') deepVal(obj[prop]);
 });
 return Object.freeze(obj);
}

const teamplayers = deepVal({
    player1:"Andrey",
    player2:"Abundance",
    substitues:{
        payer3:"Jeremiah",
        player4:"Jayden"
    }
})

const squad = teamplayers;
Object.freeze(teamplayers)
console.log(Object.isFrozen(teamplayers));
console.log(Object.isFrozen(squad));

// Data Types
// Data Structure

/**
 * 1. Array
 * 2. Linked List
 * 3. Queque
 * 4. Stack
 * 5. Graph
 * 6. Tree
 * 7. Hash
 * 8. Dictionary
 * linear and non-linear
 */

const a = [];
a['jhon'] = 5;
a['sergei'] = 3.2;
console.log(a['jhon']);

const b = new Map([
    ['apple',1],
    ['banana',2],
    ['orange',3]
]);
b.set('james',5);
b.set('sam',6);
b.delete('banana');
b.clear();
const c = b.get('apple');

console.log(b);

class Stack{

    constructor(){
        this.items=[];
    }

    //push an element onto stack

    push(item){
        this.items.push(item);
    }

    // pop the top element from the stack and return it

    pop(){
        if(this.isEmpty()){
            return "Stack is empty";
        }

        return this.items.pop();
    }

    // peek at the top element of the stack without removing it.
    peek(){
        if(this.isEmpty()){
            return "Stack is empty";
        }

        return this.items[this.items.length - 1];
    }

    //check if the stack is empty

    isEmpty(){
        return this.items.length === 0;
    }

    // get the size of stack
    size(){
        return this.items.length;
    }

    // clear the stack
    clear(){
        this.items =[];
    }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());