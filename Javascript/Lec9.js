// DOM Manipulation
// DOM- Document Object Model
// if you have a index.html , so much element present in this file.
// if changes in html tree is DOM Manipulation

// 4 steps
// 1. How to select html element in js.(method)
// 2. How to change html element/content using js
// 3. How to apply css using js
// 4. How to apply event on element

// select element in js
// 1. getElement by ID, 2. getElementByClassName(), 3. getElementByTagName(), 4. getElementByQuerySelectorAll(), 5. getElementByQuerySelector

// let button = document.getElementsByTagName('button')

// let button = documet.getElementsById('btn')
// let button = document.getElementsByClassName('btn')
let button = document.querySelector('#btn')
let para = document.querySelectorAll('#para')
console.log(button, para)

//2 change content / html
// innerhtml, style

// 3 change and apply css
// style
