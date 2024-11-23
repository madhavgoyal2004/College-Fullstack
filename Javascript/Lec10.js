let button = document.getElementById('btn')

let para = document.getElementById('text')

button.addEventListener('click', ()=>{
    para.innerText = 'hello world'
    
    para.style.color = 'red'
    
    para.style.border = '2px solid green'
})