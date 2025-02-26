"use strict";
//convert to more or less
let a = 'Hello';
let b = a; //less specific
let c = a; // more specific
let d = 'Word';
let e = 'World';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//Be careful becuse typescrit see's no problem here - but a string is returned instead
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
10; //double casting or forced casting
//THE DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
