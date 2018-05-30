
//---------In this part of code we don't see the difference-----
//this in ES5 
var name = "MEDBED";
console.log(name);
console.log("*************");
//this syntax is in ES6
let lastName = "MEDBED";
console.log(lastName);
console.log("*************");
//-----------In the nex part of code we gonna see the difference---------
//and the difference is that when you use let the variable will be visible
//only inside the instruction
let age = 29;
if(true){
    let age = 22;
}
console.log(age);
console.log("*************");
//waht about a Const? 
//Is a varriable tha we can not chage her value.
const x=18;
//x = 22 ;
console.log(x);
console.log("*************");
//HERE in this example we can do it because we don't changing the value
//of AGES which is a pointer in the memory but 
//we gonna change data where this pointer is created in the memory 
//It's a reference type
const AGES = [22, 24, 19];
console.log(AGES);
console.log("*************");
AGES.push(25);
console.log(AGES);
console.log("*************");

//same example using an object
const student = {
    name: "David",
    lastName: "MEDBED",
    age: 22,
    School: "MIT"
}
console.log(student);
console.log("*************");
student.age = 25;
console.log(student);
//Hosting with "let" & "const"
//it works
console.log("*************");
z = 27;
console.log(z);
var z;
//but with let or const we have to declare the varriable before use it
//so what we have to do is 
console.log("*************");
let a;
a = 12;
console.log(a);
console.log("*************");
 //-----------
 function doSomething(){
     b=15;
 }
 let b;
 doSomething();
 console.log(b);
//-------FatArrow Function------------ 
console.log("*************");
//in ES5 
function printMessage(c){
    console.log(c);
}
printMessage("Print message using ES5 function");
console.log("*************");
var fn = (d = "Print message using ES6 Function") => {
    console.log(d);
};
fn();
console.log("*************");
var fn = (a,b) => a+b;
console.log("sum of a and b = " + fn(3,5));
console.log("******ES5*******");
function isEqualTo(number, compare){
    return number == compare;
}
console.log(isEqualTo(10, 10));
console.log("******Es6*******");
var ISRTO = (number, compare) => {console.log(number == compare);}
ISRTO(1, 10);
console.log("******Es6*******");
var ISRTO = (number, compare = 0) => {console.log(number == compare);}
ISRTO(0);
console.log("******object Literal Extensions*******");
let name2 = 'Paul';
let age2 = 13;
let lastname2 = 'wali';

let person = {
    name2: "Max",
    lastname2,
    age2,
    "greet me"(){
        console.log(this.name2 + ', ' + this.age2 + ', ' + this.lastname2 + ' ');
    }
};
console.log(person);
person["greet me"]();
console.log("-----The rest operator ---------")
var sumOfNumbers = (...toAdd) => {
    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
}

console.log(sumOfNumbers(100, 10, 18));
console.log("-----The sepread operator ---------")
let numbers = [1,2,3,4,5];
console.log(Math.max(...numbers));
console.log("****The For Of Loop*********");
let testResults = [15,43,28,6,4,8];
for(let testResult of testResults) {
    console.log(testResult);
}
console.log("****Template Literals*********");
let name3= 'max';
let description = `
  Hello, I'm \${name3 + ' !'}
`;
console.log(description);
console.log("**** Destructuring - Arrays *********");
let numbers2 = [1,2,3];
let [d,e,f,g = 'Default value if doesn\'t exist in numbers2 Array'] = numbers2;
let [k, ,l] = numbers2;
console.log(d + ' ' + e + ' ' + f + ' ' + g);
console.log(k,l);
console.log("**************")
console.log(numbers2);
console.log("**************")
let h=5;
let j=9;
console.log('value of h and j before swapping their values:[' + h + '] , [' + j + ']');
[j,h] = [h,j];
console.log('value of h and j After swapping their values: [' + h + '] , [' + j + ']');
console.log("**** Destructuring - Objects *********");
let Man = {
    nameMan: 'Alex',
    manAge: 28,
    greetMan: () => {
        console.log('Hello There !');
    }
};
// let {nameMan,manAge} = Man;
// console.log(nameMan + ' ' + manAge);
//you can use Alias for example PrintHellois an alias of greetMan function !
let {nameMan, greetMan : PrintHello} = Man;
// greetMan();
PrintHello();
console.log("**** Destructuring - Summary - warp rup enjoy it guys*********");
