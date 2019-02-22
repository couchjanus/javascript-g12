'use strict';

// Комментарий, занимающий одну строку.

/* Блочный комментарий начинается с косой черты и звездочки(*), 
   а заканчивается ими же в обратном порядке 
*/ 

/*
    * Это многострочный
    * комментарий
*/
    
/*  
  Нельзя вкладывать \/* комментарии друг в друга SyntaxError *\/ 
*/
    
// alert("Hello Javascript!");

// window.foo = 'Hello bar!';

// alert(window.foo);

// ============Ключевое слово var====================
// var x = 30;
// console.log("the value of x is", x); // the value of x is 30

// confirm("Well, let's go?");
// prompt("Dude, tell me everything you know about programming", "...");

// console.log("the value of cat is ", cat);
// var cat = 'Red Cat';

// ============Ключевое слово let====================
// let a = 10;

// ==========================================
// console.log("the value of cat is ", cat);
// let cat = 'Red Cat';

//  ReferenceError: can't access lexical declaration
// `cat' before initialization
// ==========================================

// console.log("the value of a is ", a);

// {
//     let a = 3;
//     console.log("the value of a inside block is ", a);
// }

// console.log("the value of a outside block is ", a);


// console.log(1 / 2); /* возвращает 0.5 */
// console.log(1 / 2 == 1.0 / 2.0); /* возвращает true */

// ===============declaring variables=============

// let a = 10;
// let b = 3;
// let c = 15;
// let d = '5';
// let e = 'My name';
// let f = 'Maybe';

// ============Ключевое слово const====================
// const NAME_ARR = [];
// const NAME = 'Maybe';
// NAME_ARR.push('My name');
// NAME_ARR.push(NAME);
// console.log(NAME_ARR[0], ' is ', NAME_ARR[1]);

// ============Группировка сообщений====================

// Вы можете использовать console.group() для создания indented groups в выводе консоли.

// ====================Addition======================

// console.group('Addition');
// console.log(a + b); // 13
// console.log(a + d); // 105
// console.log(e + ' ' + f);
// console.log(e += ' is the Fly Cat');
// console.groupEnd();


// ==============Оформление сообщений===================

// можете использовать спецификатор формата "%c" для стилизации консольных сообщений:

console.log("%cMy stylish message", "color: red; font-style: italic");

// =========Ошибки округления=============
// if ( а + Ь == 0.3 ) { 
//   // не делайте так !
//   alert ( "You got 0.3 . " );
// }
  
console.log("Никогда %cне делайте так!", "color: red; font-size: 24px; background-color: yellow; padding: 2px;");

// ====================Incrementing======================
// a++;
// b--;
// --b;
// c += a;
// console.group('Incrementing');
// console.log(a); // 11   
// console.log(b); // 1
// console.log(c); // 25
// console.groupEnd();

// ====================Присваивание======================
// var x = 30,
//     y = 3;

// console.log("Присваивание со сложением x += y", x += y);
// console.log("Присваивание с вычитанием x-=y x=x-y", x -= y);
// console.log("Присваивание с умножением x *= y x = x * y", x *= y);
// console.log("Присваивание с делением x /= y x = x / y", x /= y);
// console.log("Присваивание по модулю x %= y x = x % y", x %= y);

// =============declaring strings========================

// var srt1 = 'this is my string',
//     srt2 = 'my second string',
//     srt3 = "my name is chris";

// ===============declaring numbers========================

// let num1 = 10,
//     num2 = 500,
//     num3 = 3.14;

// ===============booleans (truthy / falsy)==================

// let b1 = true,
//     b2 = false;


// ==================objects========================
// const user = {
//     name: 'Chris',
//     username: 'chrisoncode'
// };

// ======================arrays======================

// const users = ['chris', 'nick', 'holly'];
// const luckyNumbers = [1, 43, 54, 132];
// const whatever = ['chris', 1, 'holly'];

// ====================typeof=======================

// console.log(typeof (message));

// console.log(typeof (b1));
// console.log(typeof (num3));
// console.log(typeof (users));
// console.log(typeof (user));

// console.log(typeof (null));

// console.log(typeof (function () {}));


// ======================undefined==================
// var messageUndifined;
// console.log(messageUndifined == undefined);

// =====================null========================
// var car = null; // пull
// alert(typeof car); // "object "

// =================isNaN===============================
// console.log(isNaN(NaN)); // true
// console.log(isNaN(10)); // false
// console.log(isNaN("10")); // false
// console.log(isNaN("Ыuе")); // true
// console.log(isNaN(true)); // false


// ========================convert========================
// Унарный оператор «плюс» работает так же, как функция Number().

// let test = (+"1.1") + (+"1.1"); // 2.2

// parseInt("0xAF", 16); //175
// var num = parseFloat("1234blue");
// var num4 = parseFloat("22.5");

// =======Octal literals are not allowed in strict mode. (W115)=========
// var xb = 01010101,
//     yb = 10101010;

// console.log("Присваивание с побитовым AND x&=y x=x&y", xb &= yb);
// console.log("Присваивание с побитовым XOR x^=y x=x^y", xb ^= yb);
// console.log("Присваивание с побитовым OR x|=y x=x|y", xb | yb);


// var xb = 01010101;
// console.log("Присваивание с левым сдвигом x<<=y xb = xb<<y", xb <<= y);
// console.log("Присваивание с правым сдвигом xb>>=y xb = xb >> y", xb >>= y);

// Line is too long. (W101)
// console.log("Присваивание с беззнаковым сдвигом вправо xb>>>=y xb=xb>>> y", xb >>>= y);

// var message = "Hello world !";
// var messageAsBoolean = Boolean(message);

// ====================boolean operators=======================
// var a1 = true && true; // t && t возвращает true
// var a2 = true && false; // t && f возвращает false
// var a3 = false && true; // f && t возвращает false
// var a4 = false && (3 == 4); // f && f возвращает false
// var a5 = "Cat" && "Dog"; // t && t возвращает Dog
// var a6 = false && "Cat"; // f && t возвращает false
// var a7 = "Cat" && false; // t && f возвращает false
// var o1 = true || true; // t || t возвращает true
// var o2 = false || true; // f || t возвращает true
// var o3 = true || false; // t || f возвращает true
// var o4 = false || (3 == 4); // f || f возвращает false
// var o5 = "Cat" || "Dog"; // t || t возвращает Cat
// var o6 = false || "Cat"; // f || t возвращает Cat
// var o7 = "Cat" || false; // t || f возвращает Cat

// var n1 = !true; // !t возвращает false
// var n2 = !false; // !f возвращает true
// var n3 = !"Cat"; // !t возвращает false
// let anything1 = false && anything // "короткое замыкание" с результатом false.
// let anything2 = true || anything // "короткое замыкание" с результатом true.
