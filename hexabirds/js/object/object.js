// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ==========object==================
// const prson = {
//     name: 'rinki',
//     lname:"boora",
//     age: 19,
//     class:'b.s'
// };
// prson.ph=445678908
// console.log(prson)
// let key = 'email';
// let prson = {
//   name: 'rinki',
//   age: 19,
//   class: 'b.a',
// };
// prson[key] = "rinkiboora@eamil.cam"
// console.log(prson);
// let key = "ph"
// let prson = {
//     name: "pinki",
//     class: "b.s",
//     age: 24
// }
// prson [key]=8607080249
// console.log(prson)
// var a = {
//     fistName: 'rinki',
//     lastName: 'boora',
//     age: 18,
//     cauntey: 'india',

// };
// a.const = 100
// console.log(a)

// var a = {
//   fistname: 'rinki',
//   lastname: 'boora',
//   age: 18
// };
// a.const = 100;
// console.log(a.lastname);

// var a = {
//     fname: "rinki",
//     lname: "boora",
//     age:"19"
// }
// a.const = 2356789
// console.log(a)

// var a = {
//     fistName: 'rinki',
//     lastName: 'boora',
//     age: 18,
//     cauntey: 'india',

// };
// a['const'] = 100
// console.log(a)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// spred opreateor
// const array1 = [1, 2, 3]
// const array2 = [5, 6, 3];
// const newary = [...array1 ,...array2]
// console.log(newary)
// ye array bnata h================>
// const array1 = [12, 44, 5];
// const array2 = [65, 876, 8];
// const newary = [..."34567890234567"]
// console.log(newary)
// const obj = {
//   key1: 'value1',
//   key2: 'value2',
// };
// const obj2 = {
//   key3: 'value3',
//   key4: 'value4',
//   key6: 'value6',
// };
// const newkey = { ...obj, ...obj2 }
// console.log(newkey)

// object destructuring==========================>
// const bad = {
//   fname: 'rinki',
//   lname: 'boora',
//   class: 'b.a',
//   roll: 230,
// };
// let { fname ,...newobj }=bad ;
// console.log(fname)
// console.log(newobj)
// object nasted destructuring==========================>
// const users = [
//   { userid: 1, fname: 'rinki', gender: 'male' },
//   { userid: 1, fname: 'pinki', gender: 'male' },
//   { userid: 1, fname: 'gogi', gender: 'female' },
// ];
// const [{ fname }, , { gender }] = users
// console.log(fname)
// console.log(gender);
// const users = [
//   { userid: 1, fname: 'rinki', gender: 'male' },
//   { userid: 1, fname: 'priynka', gender: 'male' },
//   { userid: 1, fname: 'gagandepraj', gender: 'female' }
// ];
// const [{ userid }, , { fname }] = users
// console.log(userid)
// console.log(fname)
