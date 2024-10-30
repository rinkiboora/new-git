// var header_tital = document.getElementById('header_tital');
// header_tital.textContent = 'rinki boora';

// header.style.borderBottom = '10px solid red';
// list-items*************************
// var itema = document.getElementsByClassName('list-item');
// itema[1].textContent = 'animastio';
// itema[2].textContent = 'motion graphics';
// itema[3].style.fontWeight = 'bold';
// itema[1].style.color = 'red';
// itema[0].style.background = 'yellow';
// for (let i = 0; i < itema.length; i++) {
//   itema[i].style.background = 'yellow';
// }
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = 'red';
// }

// var even = document.querySelectorAll('li:nth-child(even)');
// for (var i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = 'yellow';
// }

// // querySelector;**************
// // querySelectorAll;*************

// var hadline = document.querySelector('#tagline');
// hadline.style.color = 'yellow';

// // tag Element******************
// var input = document.querySelector('input');
// input.value = 'enter you name';

// var button = document.querySelector('input[type="submit"]');
// button.style.backgroundColor = 'red';
// button.style.color = 'yellow';
// button.value = 'send';

// let a = document.querySelector('h1');

// a.addEventListener('click', function () {
//   a.innerHTML = 'sutiya boora';
//   a.style.color = 'blue';
//   a.style.backgroundColor = 'black';
// });

// var bulb = document.querySelector('#bulb');
// var btn = document.querySelector('button');

// var flag = 0;

// btn.addEventListener('click', function () {
//   if (flag == 0) {
//     bulb.style.backgroundColor = 'red';
//     console.log('cliocked');
//     flag = 1;
//   } else {
//     bulb.style.backgroundColor = 'white';
//     console.log('no cliked');
//     flag = 0;
//   }
// });

// let item1 = document.getElementById('items2');
// let a = item1.getElementsByTagName('li');
// for (let i = 2; i < a.length; i += 3) {
//   a[i].style.backgroundColor = 'blue';
// }
// ******************even odd*****************

// let item = document.getElementById('items');
// let even = item.getElementsByTagName('li');
// for (let i = 0; i < even.length; i++) {
//   if (i % 2 == 0) {
//     even[i].style.backgroundColor = 'red';
//   } else {
//     even[i].style.backgroundColor = 'yellow';
//   }
// }

// let h = document.getElementsByClassName('helo');
// h[0].style.color = 'red';

// ****************aad remove*************
// var istatus = document.querySelector('h2');
// var btn = document.querySelector('#add');
// var check = 0;
// btn.addEventListener('click', function () {
//   if (check == 0) {
//     istatus.innerHTML = 'Friends';
//     istatus.style.color = 'green';
//     btn.innerHTML = 'Remove Frnd';
//     check = 1;
//   } else {
//     istatus.innerHTML = 'Stranger';
//     istatus.style.color = 'red';
//     btn.innerHTML = 'Add Frnd';
//     check = 0;
//   }
// });

// **************love****************
// let con = document.querySelector('#container');
// let love = document.querySelector('i');
// con.addEventListener('dblclick', function () {
//   love.style.transform = 'translate(-50%, -50%) scale(1)';
//   love.style.opacity = 0.8;
//   love.style.color = 'red';
//   setTimeout(function () {
//     love.style.transform = 'translate(-50%, -50%) scale(0)';
//   }, 1000);
//   setTimeout(function () {
//     love.style.transform = 'translate(-50%, -50%) scale(0)';
//   }, 2000);
// });

// cursor pointer******************

// var main = document.querySelector('#main');
// let crsr = document.querySelector('.cursor');
// main.addEventListener('mousemove', function (dets) {
//   crsr.style.left = dets.x + 'px';
//   crsr.style.top = dets.y + 'px';
// });

// var a = document.querySelectorAll('h2');
// a[0].style.color = 'red';
// a[0].style.backgroundColor = 'yellow';

// let b = document.getElementsByClassName('a');
// b[0].style.color = 'red';

// let a = document.querySelector('.he');
// a.textContent = 'sumbit';
// a.style.color = 'red';
// a.style.backgroundColor = 'yellow';
// a.style.padding = '20px';
// a.style.textAlign = 'center';
// a.style.fontSize = '40px';
// a.style.display = 'inline-block';
// a.style.borderRadius = '20px';
// a.style.cursor = 'pointer';
// a.style.border = '4px solid black';

// let img = document.querySelector('#img');
// img.src = 'sss.png';
// conlsole.log(img);

// ******************************************
// let handing = document.querySelector('.handing');
// handing.classList.add('color');
// ***************************************

// let btn_sb = document.querySelector('#btn_sb');
// btn_sb.textContent = 'send';
// btn_sb.classList.add('btn');
// console.log('btn_sb');
// ****************************************

// let element = document.getElementById('main').getAttribute('class');
// console.log(element);

// let hadding2 = document.querySelector('#hadding1');
// console.log(hadding2.nextElementSibling);

// ******************************************
// let hadding2 = document.querySelector('#hadding2');

// console.log(hadding2.parentElement);

// *******************************************
// let child = document.querySelector('.child');
// console.log(child.lastChild);

// ****************************************
// let child = document.querySelector('.child');
// console.log(child.lastElementChild);
// *******************************************
// let hadding2 = document.querySelector('#hadding5');
// console.log(hadding2.nextElementSibling);
// ***********************************************
// let hadding2 = document.querySelector('#hadding5');
// console.log(hadding2.previousElementSibling);

// let createElement = document.createElement('h2');
// console.log(createElement);
// *********************************
// let newText = document.createTextNode('this is just text');
// console.log(newText);
// ****************************************
// let newComment = document.createComment('this is comment');
// console.log(newComment);

// let newElement = document.createElement('h2');
// let newText = document.createTextNode('this is just text');
// newElement.appendChild(newText);
// *********************************************

// let target = document.getElementById('test');
// let newElement = 'this is hadding';
// target.insertAdjacentElement('beforeend', newElement);
// ************************************************
// let newElement = document.createElement('li');
// let newText = document.createTextNode('hello');
// let target = document.getElementById('list');
// let old = target.children[1];
// target.replaceChild(newText, old);
// ***********************************
// let div = document.querySelector('.child');
// let bt = document.getElementById('btn');

// bt.addEventListener('click', function () {
//   //   alert('hello');
//   div.style.backgroundColor = 'red';
//   div.style.width = '300px';
//   div.style.height = '300px';
//   div.style.rotate = '20deg';
//   div.style.marginTop = '6%';
// });
// **************appendChild***************
// let newElement = document.createElement('h1');
// let newText = document.createTextNode('this is just text');
// newElement.appendChild(newText)
// console.log(newElement);
// console.log(newText);

// let newElement = document.createElement('h2')
// let newText = document.createTextNode('hello sir how are you')
// newElement.appendChild(newText)
// console.log(newElement);
// console.log(newText);
// *******************************************
let bulb = document.querySelector('.crucl');
let btn = document.querySelector('.button');

let num = 0;
btn.addEventListener('click', function () {
  if (num == 0) {
    bulb.style.borderRadius = '50%';
    bulb.classList.toggle('roted_right');

    num = 1;
  } else {
    bulb_right.style.borderRadius = '0%';
    bulb_right.classList.remove('roted_right');
    num2 = 0;
  }
});
// ********************* right*****************************
let bulb_right = document.querySelector('.crucl_right');
let btn_right = document.querySelector('.button_right');
let num2 = 0;
btn_right.addEventListener('click', function () {
  if (num2 == 0) {
    bulb_right.style.borderRadius = '50%';
    bulb_right.classList.toggle('roted_right');
    num2 = 1;
  } else {
    bulb.style.borderRadius = '0%';
    bulb.classList.remove('roted_right');
    num = 0;
  }
});
