// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write(i );
//   }

// }
// for (let i = 0; i <= 10; i++){
//     console.log(i*2)
// }

// for (let i = 1; i <= 20; i++){
//     console.log(i)
// }

// for (let i = 10; i >= 1; i--){
//     console.log(i*2)
// }
// let sum = 0
// for (let i = 1; i <= 10; i++){
//     console.log(sum+=i)
// }

// for (let i = 1; i <= 10; i++){
//     console.log(i*2)
// }
// for (let i = 1; i <= 20; i++){
//     if (i % 2 == 0) {
//         for (let j = 1; j <= 10; j++){
//             console.log(i*j)
//         }
//     } else {
//         for (let j = 10; j >= 1; j--){
//             console.log(i*j)
//         }
//     }
// }

// let a = 'mom';
// let c = '';
// for (let i = a.length - 1; i > -1; i--) {
//   c += a[i];
// }
// console.log(c);
// if (a === c) {
//   console.log('yes');
// } else {
//   console.log('no');
// }
// ======while even=============
// let a = [3, 4, 5, 6, 2, 31, 12];
// let even = 0;
// while (even < a.length) {
//   if (a[even] % 2== 0) {
//     console.log(a[even]);
//   }
//   even ++
// }

// let a = [3, 4, 5, 6, 2, 31, 12];
// let index = 0;
// let maxnumber = a[0];
// while (index < a.length) {
//   if (a[index]> maxnumber) {
//    (maxnumber=a[index]);
//   }
//   index++
// }
// console.log(maxnumber)

// for (let i = 1; i <= 10; i++){
//     console.log(i*i)
// }

// for (let i = 1; i <= 10; i++){
//     console.log("ram")
// }

// for (let i = 1; i <= 5; i++){
//     console.log(i*5)
// }
// let factorial = 1;
// for (let i = 5; i > 0; i--){
//     factorial *=i

// }
// console.log(factorial)

// convert number to string=====
// let age = 22;
// let fname = 'rinki';
// age = age + '';
// console.log(typeof age);

// convert string  to  number=====
// let mynumber = "10";
// console.log(typeof +  mynumber)
// ===string concatenation==========
// let fname = 'rinki';
// let lname = 'boora';
// let fullname = fname + " "+ lname;
// console.log(fullname);

// convert string  to  number=====
// let fname = '17';
// let lname = '10';
// let fullname = +fname + +lname;
// console.log(fullname);

//
// template strig========
// let age = 18;
// let fname = 'rinki';
// let full = `my name is ${fname} and my age is ${age}`;
// console.log(full)

// if else==========

// let age = 19
// if (age >=18) {
//   console.log("yes game")
// }
// else {
// console.log("no game")
// }
// let num = 5;
// if (num % 2 == 0) {
//   console.log("even")
// }
// else {
//   console.log("odd")
// }

// let age = 16;
// let darink;
// if (age >= 15) {
//   darink="coffee"
// }
// else {
//   darink="milk"
// }
//  console.log(darink)
// ternary operator========
// let age = 7
// let darink = age >= 5 ? "coffee" : "mlik"
// console.log(darink)
// and => && operator=================
// let age = 22;
// let fname = 'Rinki';
// if (age >= 18 && fname[0] === 'R') {
//   console.log('name start with R and above 18');
// }
// or => ||operator=================
// let age = 22;
// let fname = 'Rinki';
// if (age >= 18 || fname[0] === 'r') {
//   console.log('yes');
// }
// else {
//   console.log("no")
// }

// nested if else================
// let winningnumber = 19;
// let userguess = +prompt('guess a number');
// if (userguess === winningnumber) {
//   console.log('your guess is rigth');
// } else {
//   if (userguess < winningnumber) {
//     console.log('to low');
//   } else {
//     console.log('to high');
//   }
// }
// let winningnumber = 4
// let userguess = 19
// if (userguess === winningnumber) {
//   console.log("guess is rigth")
// }
//   else if (userguess < winningnumber) {
//     console.log("to low")
//   }
//   else {
//     console.log("to high")
//   }
// let day = 6;
// if (day === 0) {
//   console.log('sunday');
// } else if (day === 1) {
//   console.log('monday');
// } else if (day === 2) {
//   console.log('tuesday');
// } else if (day === 3) {
//   console.log('wednesday');
// } else if (day === 4) {
//   console.log('thrusday');
// } else if (day === 5) {
//   console.log('friday');
// } else if (day === 6) {
//   console.log('saturday');
// } else {
//   console.log('invalid day');
// }

// array============
// let fruits = ['apple', 'mango', 'grapes']
// console.log(fruits)
// fruits[1] = "banana"
// console.log(fruits)
// ++++++++++++++++++++++++
// let fruits = ["apple", "mango", "grapes"]
// console.log(typeof fruits)

// =====push============
// push last me add krta h
// let fruits = ["apple", "mango", "grapes"]
// console.log(fruits)
// fruits.push("banana")
// console.log(fruits)
// =======pop==========
// last me delete krta h
// let fruits = ['apple', 'mango', 'grapes'];
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// =======shift=====
// fest me delete krta h
// let fruits = ['apple', 'mango', 'grapes'];
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// ============unshift=========
// fest me add krta h====
// let fruits = ['apple', 'mango', 'grapes'];
// console.log(fruits);
// fruits.unshift("banana");
// console.log(fruits);
// ======array lengtn========
// let fruits = ['apple', 'mango', 'grapes',"banana"];
// console.log(fruits[fruits.length - 2])
// ========================
// let fruits = ['apple', 'mango', 'grapes', 'banana'];
// for (let i = 0; i <= fruits.length; i++){
//     console.log(fruits[i])
// }
// while loop array ===============
// const fruits = ["apple", "banana", "kiwi"]
// let i = 0
// while (i < fruits.length) {
//     console.log(fruits[i].toUpperCase())
//     i++
// }
// for of loop array==========
// const fruits = ["apple", "banana", "kiwi", "mango","fruits"]
// for (let fruit of fruits) {
//      console.log(fruit)
//  }
// for of loop array==========
// const fruits = ["apple", "banana", "kiwi", "mango", ]
// for (let index in fruits){
//     console.log(fruits[index])
// }
// =========objects=========
// let prson={
//     name: "rinki",
//     class:"b.a"
// }
// console.log(prson.name)
// let prson={
//     name: "rinki",
//     class:"b.a"
// }
// console.log(prson.name)
// prson.phn_no = "70869407345"
// console.log(prson)
// const key = 'email';
// const prson = {
//   name: 'rinki',
//   class: 'b.a',
// };
// console.log(prson);
// prson[key] = 'rinkiboora@email.com';
// console.log(prson);

// const prson = {
//   name: 'rinki',
//     class: 'b.a',
//   email:"rinkiboora@email.com"
// };
// for ( let key in prson) {
//     console.log( key +"= "+ prson[key])
// }
// const band = {
//   bandname: 'led zepplin',
//   famoussong: 'stairway to heavan',
// };
// const bandname = band.bandname;
// const famoussong = band.famoussong;
// console.log(bandname, famoussong);

// object k ander array==========
// const users = [
//   { userid: 1, fname: "pinki", class: "b.a" },
//   { userid: 2, fname: "ankita", class: "m.a" },
//   { userid: 3, fname: "subham", class: "b.c" }
// ];
// for (let user of users) {
//   console.log(user.userid)
// }

// const users = [
//   { userid: 1, fname: 'pinki', cls: 'b.a' },
//   { userid: 2, fname: 'ankita', cls: 'm.a' },
//   { userid: 3, fname: 'subham',cls : 'b.c' },
// ];
// const [{ fname }, , {cls}] = users;
// console.log(fname)
// console.log(cls)
// function*********************
// function townumbersum (number1,number2) {
//   return number1+number2
// }
// const returnvalue = townumbersum(5, 5)
// console.log(returnvalue)
// &********************************

// function iseven(number) {
//     if (number % 2 === 0) {
//         return true
//     } else {
//         return false
//     }

// }
// console.log(iseven(8))

// function fast(anystring) {
//   return anystring[0]
// }
// console.log(fast("rinki"))
// ************************************
// const users=[
//     { fname: 'rvi', age: 22, class: 'b.s' },
//     { fname: 'prveen', age: 18, class: '11th' },
//     { fname: 'kavin', age: 17, class: '10th' }
//   ];
// users.forEach(function (user){
//     console.log(user.fname)
//    })
// ***********************************
// function hello(fname, lname) {
//     console.log("hello" + " " + fname + " " + lname)
// }
// hello("gogi","boora")
// ***********************************
// function fullname(fname, lname) {
//     var a = fname + " " + lname
//     return a
// }
// var fn = fullname("prisa", "shandu")
// console.log(fn)
// *****************************
// function sum(math, hindi, eng) {
//     var s = math + hindi + eng;
//     return s
// }
// var total = sum(25, 55, 67)
// console.log(total)
// *************************************
//  *****************at****************
// let a=[2,3,4,6,8,9]
// console.log(a.at(0))
// ********concat********
// let a = [22, 44, 66]
// let b = [99, 11, 77]
// console.log(a.concat(b))
// ========= find method=========
// const myarray = ["hello", "dog", "byyy", "doui"]
// function islangth(string) {
//     return string.length === 3
// }
// const as = myarray.find(islangth)
// console.log(as)
// =========iterables=========
// const fname = 'rinki';
// for (let a of fname) {
//   console.log(a);
// }
// =======array like object=========
// const fname = 'sutiya';
// console.log(fname.length);
// console.log(fname[2]);
//========== some==========
// ak value 18 bade h to ye true kr dega
// var ages = [22, 14, 10, 21];
// console.log(ages);
// var b = ages.some(checault);
// console.log(b);
// function checault(age) {
//   return age >= 18;
// }
// every============
// abi value badi ho tbi true krga
// var ages = [22, 140, 100, 211];
// console.log(ages);
// var b = ages.every(checault);
// console.log(b);
// function checault(age) {
//   return age >= 18;
// }
// for (let a = 1; a <= 5; a++) {
//   for (let b = 1; b <= a; b++) {
//     document.write(b);
//   }
//   document.write('<br>');
// }
// document.write('<br>');
// for (let a = 1; a <= 5; a++) {
//   for (let b = 1; b <= a; b++) {
//     document.write(a);
//   }
//   document.write('<br>');
// }
// document.write('<br>');
// for (let a = 5; a >= 1; a--) {
//   for (let b = a; b >= 1; b--) {
//     document.write(b);
//   }
//   document.write('<br>');
// }
// var ary = new Array(3);
// for (let g = 0; g < 3; g++) {
//   ary[g] = prompt('enter tha value');
// }
// for (let a = 0; a < 3; a++) {
//   document.write('<br>');
//   document.write(ary[a]);
// }

// ************************************************
//  var a = 100;
//  var b = 400;
//  var c = 300;
//  if (a > b) {
//    if (a > c) {
//      console.log(' a is smoll');
//    }  else {
//   console.log("c is smoll")
// }
// }
//  else if (b > a) {
//    if (b > c) {
//      console.log("b is smoll")
//    }
//    else {
//      console.log("c is smoll")
//    }
//  }
//  else {
//    console.log("c is smoll")
//  }
// ********************************
// let a = [22, 45, 56, 50];
// for (i = 0; i < a.length; i++) {
//   b = 0;
//   if (i == a.length - 1) {
//     b = a[i] + 5;
//   }
// }
// console.log(b);

// *******************************
// advance js+++++++++++++++
// let user = 'rinki boora';
// let marks = 360;
// console.log(`hello ${user}
//      your marks is
//             ${marks}`);
// let user = "hello"
// let n = "rinki"
// console.log(` ${user} ${n} welcome to hixabirds`)
// **************************************************
// let fname = 'rinki';
// let lname = 'boora';
// function fullname(fname, lname) {
//   return `${fname} ${lname}`;
// }
// let hello = `hello ${fullname(fname, lname)}`;
// console.log(hello)

// arrow function**********************
// let welcome = (name) => {
//   return `hello $ welcome ${name}`;
// };
// console.log(welcome("gogi boora"));
// (((((((((((((((((((((((((((())))))))))))))))))))))))))))
// let hello = (fullname) => {
//      return `welcome to hixabirds ${fullname}`
// }
// console.log(hello( "sutu boora"))

// (((((((((((((((((((((((())))))))))))))))))))))))
// let welcome = (name) => `welcome to hisar  ${name}`;
// console.log( welcome("hello rinki"));
// 0000000000000000000000000000000

// function sum(name, ...ages) {
//   console.log(name);
//   console.log(ages);
// }
// sum('rinki boora', 30, 30, 78, 90);

// function sum(name, ...ages) {
//   let sum = 0;
//   for (let i in ages) {
//     sum += ages[i];
//   }
//   console.log(name);
//   console.log(sum);
// }
// sum('rinki boora', 30, 30);

// function sum() {
//   let sum=0
//   for (let i in arguments) {
//   sum+=arguments[i]
//   }
//   console.log(sum)
// }
// sum(20,10,10)

// Object literals==========
// let fname = 'rinki';
// let lname = 'boora';
// let obj = {
//   fname,
//   lname,
// };
// console.log(obj);

// let n = 'studant';
// var obj = {
//   [n + 'name']: 'rinki boora',
//   course:"b.a",
//   detail: function () {
//     return `${this.studantname} is studant of ${ this.course}`;
//   },
// };
// console.log(obj.detail());
// function hello(fname, lname) {
//   var a = fname +" " + lname
//   return a
// }
// console.log(hello("rinki" ,"boora"))
// ======================================
// function sum(math, eng, hindi) {
//   var s = math + eng + hindi;
//   return s;
// }
// function prsant(tt) {
//   var per = (tt / 300) * 100;
//   console.log(per);
// }
// var total = sum(80, 80, 80);
// prsant(total

// ======odd==========
// let data = [3, 5, 7, 8, 2, 9]
// function odd(a) {
//   for (let i of a) {
//     if (i % 2 == !0) {
//       console.log(i);
//     }
//   }
// }
// odd(data)

//*********even********** */
// let hlo = [4, 2, 5, 7, 8,6,9,12]
// function even(b) {
//   for (i of b) {
//     if (i % 2 == 0) {
//       console.log(i)
//     }
//   }
// }
// *********************************
// let hlo = [2, 4, 6, 3, 8, 5]
//   let even = (b) => {

//     for (i of b) {
//       if (i % 2 == 0) {
//     console.log(i)
//   }
//     }
// }
// even(hlo)

// let a = [3, 5, 7, 8, 1]
// let odd = (b) => {
//   for (i of b) {
//     if (i % 2 == !0) {
//       console.log(i)
//     }
//   }
// }
// odd(a)

//

// ************************************

// let hlo = [10, 2, 5, 7, 20,6,15,12]
// function a(b) {
//   for (i of b) {
//     if (i % 5 == 0) {
//       console.log(i)
//     }
//   }
// }
// a(hlo)

// **************************************
// function app() {
//   const myfun = () => {
//     console.log("my funtion")
//   }
//   const hello = (nam1,nam2) => {
//     return nam1 + nam2;
//   }
//   const hii = ( number1 , number2) => {
//     return number1*number2
//   }
//   myfun()
//   console.log(hii(2, 4))
//   console.log(hello(10,5))
// }
// app()

// =================================
// function fname(fname) {
//   function lname(lname) {
//     function age(age) {
//       console.log(fname);
//       console.log(lname);
//       console.log(age);
//     }
//     return age(18)
//   }
//   return lname("boora");
// }
// return fname("rinki");
// *******************************
// function number() {
//   for (let i = 0; i <= 50; i++){
//     if (i % 5 == 0) {
//       console.log(i)
//     }
//   }

// }
// number()
// ***************************************
// let hello =() => "wlecome"
//   console.log(hello())

// let helo = (a, b) => {
//   return (a+b)
// }
// console.log(helo(3,3));

// let helo = (a, b) => a + b;
// console.log(helo(8,8));
// *********************************
// let hello = function () {
//     console.log("rinki")
// }
// hello()

// (a) => {
//   return a + 100;
// };
// let result = a+100;
// console.log(result());
// console.log(atob("eee"));

// const ss = (a) => a + 100;
//  console.log(ss(5))
// ***********************
//  const ff=(a, b) => a + b + 100;
// const a = 4;
// const b = 2;
// console.log(ff(4,2))

// *************************
//  const fn=(a, b) => {
//   const chuck = 42;
//   return a + b + chuck;
// };
// console.log(fn(7,9));
// *********************************
// const func = (x,y) => x * y;
// console.log(func(5, 5))

// const func = (x) => x * x;
// const func2 = (x, y) => {
//   return x + y;
// };
// console.log(func(5, 5))
// console.log(func2(5, 5));

// ***************************
// function map(f, a) {
//   const result = new Array(a.length);
//   for (let i = 0; i < a.length; i++) {
//     result[i] = f(a[i]);
//   }
//   return result;
// }

// const cube = function (x) {
//   return  x * x;
// };

// const numbers = [0, 1, 2, 3, 5];
// console.log(map(cube, numbers));

// ***************************************
// function addSquares(a, b) {
//     function square(x) {
//         return x + x;
//     }
//     return  square(a) + square(b)

// }
// console.log(addSquares(2,3))
// ***************************

// function a(x) {
//     function b(y){
//         function c(z) {
//             console.log(x + y + z);
//         }
//         c(10)
//     }
//     b(10)
// }
// a(10)
// *****************************
// function hello(a, b) {
//   b = typeof b !== 'undefined' ? b : 2;
//   return a * b;
// }
// console.log(hello(2));
// *********************************
// const square = function (number) {
//   return number * number;
// };
// const x = square(4); //
// console.log(x);
// *********************************
// const hello=(number) => number * number
// const x = hello(5)
// console.log(x)
// *****************************
// function outside() {
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// console.log(outside()(3));
// function even(number) {
//   if (number % 2 == 0) {
//     return true
//   }
//   else {
//     return false
//   }
// }
// console.log(even(6))


let number = [9, 4, 7, 56, 12, 9, 10];
 let number2=[]
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    if (number[i] % 2 == 0) {
        number2.push(number[i])
    }
}
console.log(number2);



