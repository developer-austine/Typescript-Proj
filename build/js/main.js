"use strict";
/* Data Types */
// let myName : string = 'Alex';
// let meaningOfLife: number;
// let isLoading: boolean;
// let album: any;
// meaningOfLife = 42;
// myName = 'Austine';
// isLoading = true;
// album = 5150
// const sum = (a : number, b : string) => {
//     return a + b
// }
// let postID : string | number
// let isActive: number | boolean 
// let re : RegExp = /\w+/g
/* ARRAYS AND OBJECTS */
//Arrays;
// let stringArr = ['one', 'hey', 'Austine']
// let guitars = ['strat', 'Les Paul', 5150]
// let mixedData = ['EVH', 1984, true]
// stringArr[0] = 'Kavata'
// stringArr.push('Castor')
// guitars[0] = 1984
// guitars.unshift('Kavata')
// let test = []
// let bards: string[] = []
// //tuple
// let myTuple : [string, number, boolean] = ['Dave', 42, true]
// //objects
// let myObj: object
// myObj = [];
// console.log(typeof myObj)
// myObj = bards
// myObj = {}
// const exampleObj = {
//     prop1: 'Austine',
//     prop2: true,
// }
// exampleObj.prop1 = 'John'
// interface Guitarist  {
//     name ?: string,
//     active : boolean,
//     albums: (string | number)[]
// }
// let evh: Guitarist = {
//     name: 'Eddie',
//     active: false,
//     albums: [1984, 5150, 'OU812']
// }
// let jp: Guitarist = {
//     name: 'Jimmie',
//     active: true,
//     albums: ['I', 'II', 'IV']
// }
//making properties optional 
// const greetGuitarist = (guitarist : Guitarist) =>  {
//     return `Hello ${guitarist.name}`;
// }
// console.log(greetGuitarist(jp))
//Enums
// "Unlike most typesript features, Enums re not a tpe-level addition to javascript but something added to the lnguage at runtime"
// enum Grade {
//     U = 1,
//     D,
//     C,
//     B,
//     A,
// }
// console.log(Grade. U)
//type Aliases
// type sringorNumber = string | Number
// type stringorNumberArray =  ( string | number )[]
// type Guitarist = {
//     name: string,
//     active : boolean,
//     albums: (string | number) []
// }
// type userId
//functions 
let myName = 'Austine';
let userName;
userName = 'Any';
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
/* =======================  When to use Interface and  Type =============== */
// interface are use when we are dealing with more of classes 
//type aliases are used when thinking of functions and other basic types
//optional parameters for functions
const addAll = (a, b, c) => {
    //we use typeguard that narows down  type assigne to a variable. Here is how we impliment this.
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// c is a default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3)); // we use undefined in place of a because by default if we jyst put 3, typescript will automatically assign tht 3 to the variable a. 
//Rest Paaeterss
const total = (...nums) => {
    return nums.reduce((prev, current) => prev + current);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
