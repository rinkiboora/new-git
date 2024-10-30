// function a(number1, number2) {
//   console.log(number1 + number2);
// }
// a(3,4)\

// function x(fname, lname) {
//     let a={
//         "fname":fname,
//         "lname":lname
//     }
//     return a;
// }

// console.log(x('rinki', 'boora'));

// function sum(math, eng, hindi) {
//     var a = math + eng + hindi;
//     return a
// }
// var totol = sum(80, 80, 80)
// console.log(totol)

// function sayhello() {
//   console.log('hello');
// }
// function sayhi() {
//   console.log('hi');
// }
// function add(num1, num2, collback) {
//   console.log(num1 + num2);
//   collback();
// }
// let a = 10;
// let b = 20;
// add(a, b, sayhello);
// add(30, 5, sayhi);

// function print(name){
//     function hello() {
//         console.log("hello" + " " + name);
//     }
//     return hello;
// }
// let a = print("rinki")
// a()

// function add(a, b) {
//     return a+b
// }
// console.log(5+5)
// function add2() {
//     return a+b

// }
// console.log(2 + 2)
// function add3() {
//     return a+b

// }
// console.log(3+6)

// function marks(hindi, eng, math, music, sci) {
//   var a = hindi + eng + math + music + sci;
//   return a;
// }
// var b = marks(100, 100, 100, 100, 100);
// console.log(b);
// function pracentage(tm) {
//   var c = tm / 500 * 100;
//   return c;
// }
// var d = pracentage(b);
// console.log(d)

// function fname(fname) {
//     function lname(lname) {
//         function age() {
//             let a = 18
//             console.log(fname)
//             console.log(lname);
//               console.log(a);
//         }
//         return age()
//     }
//     return lname("boora")

// }
// fname("rinki")

// function fname(fname) {
//     function lname(lname) {
//         function age() {
//             let a = 18;
//             console.log(fname)
//             console.log(lname);
//             console.log(a)
//         }
//         return age()

//     }
//     return lname("shrama")
// }
// fname("riya")

// function fname(fname) {
//   function lname(lname) {
//     function age(age) {
//       function city(city) {
//         function email() {
//           let a = "rinkiboora1121@mail.com";
//           console.log(fname);
//           console.log(lname);
//           console.log(age);
//           console.log(city);
//           console.log(a)
//         }
//         return email()
//       }
//       return city('hiser');
//     }
//     return age(18);
//   }
//   return lname('boora');
// }
// fname('rinki');

// let seyhello = () => console.log('hello rinki');
// seyhello()

// let seyhello = () => "hiii rinki"
// console.log(seyhello())

// function simple(age) {
//   if (age < 18) {
//     console.log("first");
//   } else {
//     console.log("asdf");
//       console.log(age);
//       return age

//   }
// }
// function chek(name, age) {
//   console.log('before');
//   simple(10);
//   console.log('after');
//   console.log(`hello ${name},your are ${simple(age)} yeaes old`);
// }
// chek('ram', 64);

// let ram = function (r, s, s) {
//     console.log(r,s,s)
// }
// ram("asdf", 34, 43)
// ram(s = "123", r = "43", s = "54")

//  fun even nmuber==================>
// function even(number) {
//   if (number % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(even(6))

// function add(number1, number2) {
//     console.log(number1+number2)
// }
// add(4,4)
// function fname(fname) {
//   function lname(lname) {
//     function age(age) {
//       console.log(fname);
//       console.log(lname);
//       console.log(age);
//     }
//     return age(18);
//   }
//   return lname("boora");
// }
// return fname("rinki");

// function findtarget(array, target) {
//   for (let i = 0; i < array.lenght; i++) {
//       if (array[i] === target) {
//            return i;
//       }

//   }
//   return -1;
// }
// const myarray = [1, 4, 6, 7, 5];
// const ase = findtarget(myarray, 7)
// console.log(ase)

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ============function expession===================
// const even = function (number) {
//   if (number % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(even(6));

// const sumthreenumber = function (number1, number2, number3) {
//     return number1+number2+number3
// };
// const ase = sumthreenumber(5, 5, 5)
// console.log(ase)
// // =============== arow function==============
// function app() {
//     const myfun = () => {
//       console.log("my fist function")
//     };
//     // const addtow = (num1, num2)=>{
//     //     return num1 + num2
//     // }
//     // const mul = (num1, num2) => num1 * num2
//     // console.log("my 2nd function")
//     myfun()
//     console.log(addtow(5 , 5))
//       console.log(mul( 2,2));

// }
// app()

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ==========prototype===============
// function home() {}
// let add = {
//   name: 'rinki',
//   roll: 321,
//   class: 'b.a',
// };
// home.prototype.han = add;
// console.log(home.prototype);
// function add(fname, cls) {
//   let obj = {
//     name: fname,
//     class: cls,
//   };
//   return obj;
// }
// console.log(add('ankita', 3));
// const person = {
//   name: 'rinki',
// };
// const student = {
//   roll: 13,
//   class: '12th',
//   __proto__: person,
// };
// console.log(student);

// function home(name, roll, cls) {
//   const a = {
//     name: name,
//     roll: roll,
//     cls: cls,
//   };
//   return a;
// }

// console.log(home('rinki', 203, '12th'));
// home();

// function fname(fname) {
//   function lname(lname) {
//     function roll(roll) {
//       console.log(roll, arguments);
//     }
//     roll(111, 333,666);
//   }
//   lname('boora');
//   console.log(fname, arguments);
// }
// fname('rinki', 'pinki',"priynka");

// 0000000000000000000000000000000000000000
// function sum(name, ...args) {
//   let sum = 0;
//   for (let i in args) {
//     sum += args[i];
//   }
//   console.log(sum);
// }
// sum("hello",30,20,10)

// ***************************
// function sum(name, ...args) {
//  console.log(`hello ${name}`);
//   let sum = 0
//   for (let i in args) {
//     sum += args[i];

//   }
//   console.log(sum);
// }
// sum("how are u",10,10,5)
// ***********************************
// function sum(...args) {
//   let sum = 0
//   for (let i in args) {
//     sum +=args[i]
//   }
//   console.log(sum);
// }
// sum(10,10,10,10)
//  coll*****************

// const user1 = {
//   fname: 'rinki',
//   lname: 'boora',
// };
// const user2 = {
//   fname: 'subham',
//   lname: 'sankla',
// };
// const person = {
//   fullname: function () {
//     return this.fname + ' ' + this.lname;
//   },
// };

// console.log(person.fullname.call(user2));

// function hello(a, b) {
//     return a + b;
// }
// let say = hello.call(this, 50, 50)
// console.log(say);
// const user1={
//   fname: "muskan",
//   roll: 222,
//   age: 18,
//   class:"10th"
// }
// const user2 = {
//   fname: 'mahi',
//   roll: 221,
//   age: 19,
//   class: '11th',
// };
// const user3 = {
//   fname: 'swati',
//   roll: 211,
//   age: 19,
//   class: '12th',
// };
// const person = {
//   fullname: function () {
//     return this.fname +" "+ this.roll +" "+ this.age +" "+ this.class
//   }
// }
// console.log(person.fullname.call(user3));

// const user1 = {
//   fname: 'rinki',
//   lname: 'boora',
//   age: 18,
// };

// *********************************

// const user2 = {
//   fname: 'pinki',
//   lname: 'boora',
//   age: 24,
// };
// const user3 = {
//   fname: 'priynka',
//   lname: 'boora',
//   age: 22,
// };
// const person = {
//   fullname: function () {
//     return this.fname + ' ' + this.lname + ' ' + this.age;
//   },
// };
// console.log(person.fullname.call(user1));

// *******************************************
// const a = {
//   fname: "rinki",
//   lname: "boora",
//   age: 19,
//   roll:333
// }
// const b={
//   fname: "priynka",
//   lname: "shandu",
//   age: 20,
//   roll: 111
// }
// const c = {
//   fname: "pinki",
//   lname: "shandu",
//   age: 21,
//   roll: 444
// }
// const person = {
//   fullname:function () {
//     return this.fname + " " + this.lname + " " + this.age + " " + this.roll

//   }
// }
// console.log(person.fullname.call(a));

// const person1 = {
//   firstName: 'Mary',
//   lastName: 'Doe',
// };
// const person = {
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
// };
// console.log(person.fullName.apply(person1));

const user1 = {
  name: 'rinki',
  roll: 22,
  slary: 15000,
};

const user2 = {
  name: "subham",
  roll: 32,
  slary: 12000
  
}
const person = {
  about: function () {
    console.log(this.name);
  },
  hello: function (month) {
    console.log(month*this.slary);
  }
}
let show = person.hello.bind(user1)
show(2)