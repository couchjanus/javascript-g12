'use strict';

alert("Hello Javascript!");

window.foo = 'Hello bar!';

alert(window.foo);

var x = 30;
console.log("the value of x is", x);
// → the value of x is 30

confirm("Well, let's go?");

prompt("Dude, tell me everything you know about programming", "...");

console.log("the value of cat is ", cat);
var cat = 'Red Cat';

// Ключевое слово let
let a = 10;

console.log("the value of a is ", a);

{
    let a = 3;
    console.log("the value of a inside block is ", a);
}

console.log("the value of a outside block is ", a);


console.log("the value of cat is ", cat);


//  ReferenceError: can't access lexical declaration
// `cat' before initialization

// let cat = 'Red Cat';

console.log(1 / 2); /* возвращает 0.5 */
console.log(1 / 2 == 1.0 / 2.0); /* возвращает true */

// declaring variables

let b = 3;
let c = 15;
let d = '5';
let e = 'My name';
let f = 'Maybe';

const NAME_ARR = [];
const NAME = 'Maybe';
NAME_ARR.push('My name');
NAME_ARR.push(NAME);
console.log(NAME_ARR[0], ' is ', NAME_ARR[1]);

console.group('Addition');
console.log(a + b); // 13
console.log(a + d); // 105
console.log(e + ' ' + f);
console.log(e += ' is the Fly Cat');
console.groupEnd();

a++;
b--;
--b;
c += a;
console.group('Incrementing');
console.log(a); // 11   
console.log(b); // 1
console.log(c); // 25
console.groupEnd();


var x = 30,
    y = 3;

console.log("Присваивание со сложением x += y", x += y);
console.log("Присваивание с вычитанием x-=y x=x-y", x -= y);
console.log("Присваивание с умножением x *= y x = x * y", x *= y);
console.log("Присваивание с делением x /= y x = x / y", x /= y);
console.log("Присваивание по модулю x %= y x = x % y", x %= y);

// declaring strings

var srt1 = 'this is my string',
    srt2 = 'my second string',
    srt3 = "my name is chris";

// numbers

let num1 = 10,
    num2 = 500,
    num3 = 3.14;

// booleans (truthy / falsy)

let b1 = true,
b2 = false;


// arrays

const users = ['chris', 'nick', 'holly'];
const luckyNumbers = [1, 43, 54, 132];
const whatever = ['chris', 1, 'holly'];


// objects
const user = {
    name: 'Chris',
    username: 'chrisoncode'
};

console.log(typeof (message));

console.log(typeof (b1));
console.log(typeof (num3));
console.log(typeof (users));
console.log(typeof (user));


console.log(typeof (null));

console.log(typeof (function () {}));

var messageUndifined;
console.log(messageUndifined == undefined);

var car = null; // пull
alert(typeof car); // "object "


console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false
console.log(isNaN("10")); // false
console.log(isNaN("Ыuе")); // true
console.log(isNaN(true)); // false

// Унарный оператор «плюс» работает так же, как функция Number().

let test = (+"1.1") + (+"1.1"); // 2.2


parseInt("0xAF", 16); //175
var num = parseFloat("1234blue");
var num4 = parseFloat("22.5");

// Octal literals are not allowed in strict mode. (W115)
var xb = 01010101,
    yb = 10101010;

console.log("Присваивание с побитовым AND x&=y x=x&y", xb &= yb);

console.log("Присваивание с побитовым XOR x^=y x=x^y", xb ^= yb);

console.log("Присваивание с побитовым OR x|=y x=x|y", xb | yb);


var xb = 01010101;

console.log("Присваивание с левым сдвигом x<<=y xb = xb<<y", xb <<= y);
console.log("Присваивание с правым сдвигом xb>>=y xb = xb >> y", xb >>= y);
// Line is too long. (W101)
console.log("Присваивание с беззнаковым сдвигом вправо xb>>>=y xb=xb>>> y", xb >>>= y);

var message = "Hello world !";
var messageAsBoolean = Boolean(message);

var a1 = true && true; // t && t возвращает true
var a2 = true && false; // t && f возвращает false
var a3 = false && true; // f && t возвращает false
var a4 = false && (3 == 4); // f && f возвращает false
var a5 = "Cat" && "Dog"; // t && t возвращает Dog
var a6 = false && "Cat"; // f && t возвращает false
var a7 = "Cat" && false; // t && f возвращает false
var o1 = true || true; // t || t возвращает true
var o2 = false || true; // f || t возвращает true
var o3 = true || false; // t || f возвращает true
var o4 = false || (3 == 4); // f || f возвращает false
var o5 = "Cat" || "Dog"; // t || t возвращает Cat
var o6 = false || "Cat"; // f || t возвращает Cat
var o7 = "Cat" || false; // t || f возвращает Cat

var n1 = !true; // !t возвращает false
var n2 = !false; // !f возвращает true
var n3 = !"Cat"; // !t возвращает false
let anything1 = false && anything // "короткое замыкание" с результатом false.
let anything2 = true || anything // "короткое замыкание" с результатом true.


