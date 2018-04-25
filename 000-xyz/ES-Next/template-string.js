"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @description Tagged Template Literals &  ES6 Template Literals/ ES6 Template Strings
 * @augments ES6 Template Strings & Tags
 * @example
 * @param {*} strings
 * @param {*} name
 * @param {*} age
 *
 */


const highlight = (strings, name, age) => {
    return `
        <div>
            <p>
                ${strings[0]}: <span style="color: #0f0; background: #000;">${name}</span>,
                ${strings[1]}: <span style="color: #0f0; background: #000;">${age}</span>,
                ${strings[2]}.
            </p>
        </div>
    `;
};


let name = "xgqfrms",
    age = 23,
    sentence = highlight`My name is ${name} and ${age} years old.`;
console.log(sentence);

const body = document.querySelector("body");
body.innerHTML = "";
body.insertAdjacentHTML("beforeend", sentence);





// ![image](https://user-images.githubusercontent.com/29531779/39237918-7b8dd652-48af-11e8-87b3-41261f6c0e17.png)

