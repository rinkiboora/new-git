// ===============map function==================

// var ary = [11, 9, 4, 6];
// var b = ary.map(test);
// console.log(b)
// function test(x) {
//     return x * 10;
// }

// let ary = [20, 10, 30, 40];
// var b = ary.map(test);
// console.log(b);
// function test(x) {
//   return x + 10;
// }

// var ary = [
//   { fname: 'rinki', lname: 'boora' },
//   { fname: 'riya', lname: 'sharma' },
//   { fname: 'payal', lname: 'gill' },
// ];
// var b = ary.map(test);
// console.log(b);
// function test(x) {
//   return x.fname + ' ' + x.lname;
// }

// var valeu = [
//   { fname: 'janvi', lname: 'sharma', class: '11th', age: 18 },
//   { fname: 'payl', lname: 'gill', class: '12th', age: 19 },
//   { fname: 'dipansi', lname: 'poonu', class: '10th', age: 17 },
//   { fname: 'jyoti', lname: 'swami', class: '11th', age: 19 },
//   { fname: 'pinki', lname: 'shandu', class: '12th', age: 20 },
// ];

// var a = valeu.map(test);
// console.log(a)
// function test(x) {
//   return x.fname + ' ' + x.lname + ' ' + x.class + ' ' + x.age;
// }

// let a = ["ram","rahul","ankit"]
// let newary = a.map(
//     function (x) {
//         return x + " " + "singh"
//     }

// )
//  console.log(newary);

// let a = ["ram", "syam", "ankit"]
// let newary = a.map(
//     function (x) {
//         return x+" "+ "kumar"
//     }

// )
// console.log(newary)

// const add = [1, 2, 3, 4, 5, 6, 7, 8]
// const add2 = add.map((num) => num + 10)
// console.log(add2)

// const add = ["ram", "rahul", "ankit",]
// const add2 = add.map((nem) => nem + " " + "sing")
// console.log(add2)
// const user = [
//   { fname: 'rinki', class: '12th', roll: 12 },
//   { fname: 'pinki', class: '11th', roll: 14 },
//   { fname: 'priynka', class: '10th', roll: 17 },
// ];
// const usersname = user.map((user)=>{
// console.log(user.class)
// });

// reduce-------------------------->

// function add(a, b) {
//     return a+b
// }
// let b=add(9+2,2)
// console.log(b)

// function add(a, b) {
//     return a+b
// }
// let b = add(5 + 5+ 5 + 5,5)
// console.log(b)

// function map(a,b) {
//     return a*b
// }
// let b = map(5 * 4, 2)
// console.log(b)
// function fun(a, b) {
//     return a-b
// }
// let b = fun(7 - 3, 2)
// console.log(b)

// function fun(a, b){
//     return a*b
// }
// let b = fun(2 * 7, 5)
// console.log(b)

// function add(a, b) {
//     return a+b
// }
// let a =[5+3,2,5]
// let b = a.reduce(add)
// console.log(b)

// function add(a, b) {
//     return a+b
// }
// let a = [5 + 2, 3, 2]
// let b = a.reduce(add)
// console.log(b)

// function newnmber (a, b){
//     return a*b
// }
// let a = [5 * 2, 2]
// let b = a.reduce(newnmber)
// console.log(b)

// function s(a, b){
//     return a-b
// }
// let a = [9 - 3, 2]
// let b = a.reduce(s)
// console.log(b)

// function add(a, b) {
//     return a/b
// }
// let a = [6,2,2]
// let b = a.reduce(add)
// console.log(b)

//

// filter------------------------->
// const mynmbus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newnmbus = mynmbus.filter((num) => num > 4);
// console.log(newnmbus);

// const mynmbus = [11, 13, 56,7, 15, 10,5,9,]
// const newnmbus = mynmbus.filter((num) => num <10)
// console.log(newnmbus)
// //
// ========even number===============

// const a = [1, 4, 2, 6, 4, 8, 3, 7]
// const b = a.filter((c) => {
// return c % 2 == 0;
// })
// console.log(b)
// ========odd number============

// const a = [2, 3, 8, 9, 7, 10, 4, 6]
// const b = a.filter((c) => {
//     return c % 2 != 0;

// })
// console.log(b)
// function myfunc(a, b,...c) {
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`c is ${c}`);
// }
// myfunc(2,3,5,4,7,6)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// /========find =================

// const myarray = ['hello', 'cat', 'dog', 'lion'];
// function lengt(string) {
//   return string.length === 3;
// }
// const ase = myarray.find(lengt)
//  console.log(ase)
// const user = [
//   { userid: 1, userfname: 'pyal' },
//   { userid: 2, userfname: 'mansi' },
//   { userid: 3, userfname: 'ankita' },
//   { userid: 4, userfname: 'geeta' },
//   { userid: 5, userfname: 'muskan' },
// ];
// const myuser = user.find((user) => {
//   return user.userid===2
// });
// console.log(myuser)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ===============every==================
// const usercart = [
//   { product: 1, proundname: 'moble', price: 12000 },
//   { product: 2, proundname: 'tv', price: 22000 },
//   { product: 3, proundname: 'laptop', price: 15000 },
// ];
// const ase = usercart.every((item) => item.price<30000);
// console.log(ase)

//=========== map===========
// const preson = new Map();
// preson.set('fname', 'pyal');
// preson.set('age', '19');
// preson.set('1', 'one');
// console.log(preson.get("age"));

// const add = new Map();
// add.set('fname', 'subham');
// add.set('age', '21');
// add.set('roll', '203');
// for (let key of add.keys()) {
//     console.log(key)
// }
// function preson() {
//   console.log(`preson name is ${this.fname} and ${this.age}`);
// }
// const preson1 = {
//   fname: 'amit',
//   age: 19,
//   abuot: preson,
// };
// const preson2 = {
//   fname: 'prveen',
//   age: 21,
//   abuot: preson,
// };
// const preson3 = {
//   fname: 'kavin',
//   age: 18,
//   abuot: preson,
// };
// preson1.abuot()
// preson2.abuot();
// preson3.abuot();
