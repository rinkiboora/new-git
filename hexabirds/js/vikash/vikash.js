// function home() {
//   sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(home(2, 3, 4));

// +++++++++++++++++++++++++
// function bignt() {
//   let sum = arguments[0];
//   for (let i = 0; i < arguments.length; i++) {
//     if (sum < arguments[i]) {
//       sum = arguments[i];
//     }
//   }
//   return sum;
// }
// console.log(bignt(1,3,4));

// function small() {
//     let sum = arguments[0]
//     for (let i = 0; i < arguments.length; i++){
//         if (sum > arguments[i]) {
//             sum = arguments[i]
//         }
//     }
//     return sum
// }
// console.log(small(8,7,10,4))

// // ======flat or flatmap=========
// let data = [1, 3, 4, 5,[ [48, 76, 9]], 5, 9];
// let val = data.flat(2);
// console.log(val);

// let arr = [45, 23, 21];

// let a = arr.map((value) => {
//   console.log(value);
//   return value+1
// })
// console.log(a);

let arr2 = [45, 23, 2, 0, 3, 5];
let a2 = arr2.filter((a) => {
  return a>10
});
console.log(a2);

// let arr3 = [12,5];
// let newarr3 = arr3.reduce((h1, h2) => {
//   return h1 + h2;
// });
// console.log(newarr3);
