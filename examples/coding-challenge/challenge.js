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