"use strict";


let btn = document.createElement('button');
let btnText = document.createTextNode('Click me');
let classAtr = document.createAttribute('class');

classAtr.value = 'btn';
btn.setAttributeNode(classAtr);


// console.log(btnText);

btn.appendChild(btnText);

btn.setAttribute("id", "my-btn");

btn.removeAttribute('id');



console.log(btn);

// document.body.appendChild(btn);
let parFirts = document.getElementById('parFirst');
parFirts.appendChild(btn);

parFirts.removeChild(btn);