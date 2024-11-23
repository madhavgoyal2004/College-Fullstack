// Event Delegation -> it is a design pattern.

// calculator have a button
// add event listner at parent not at child then reduce the size of code.

// let container = document.getElementsByClassName('container')[0];
// let output = document.getElementsByClassName('output')[0];

// let res = '';
// container.addEventListener('click', (e)=>{
//     // console.log(e);
//     if(e.target.tagName == 'BUTTON'){
//         let value = e.target.textContent;
//         if(value === '='){
//             output.textContent = eval(res);
//             res = '';
//         }
//         else{
//             res  = res +  value;
//             output.textContent = res;
//         }
//         console.log(value);
//     }

// })

// Event capturing, Event targeting, event bubbling

let container3 = document.getElementById('container3');
let container2 = document.getElementById('container2');
let container1 = document.getElementById('container1');
container3.addEventListener('click', ()=>{
    alert('container 3 is clicked');
})
container2.addEventListener('click', ()=>{
    alert('container 2 is clicked');
    
})
container1.addEventListener('click', ()=>{
    alert('container 1 is clicked');
})