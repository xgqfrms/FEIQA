// https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/DocumentFragment

// import css
// Vitual_DOM
// import js
// fetch data & insert into Vitual_DOM
// render Vitual_DOM to DOM

var d = document.createDocumentFragment();

d.appendChild(document.getElementsByTagName("LI")[0]);

d.childNodes[0].childNodes[0].nodeValue = "Milk";

document.getElementsByTagName("UL")[0].appendChild(d);


