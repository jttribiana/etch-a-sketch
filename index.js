const drawBtn = document.createElement('button');
const eraseBtn = document.createElement('button');
const resetBtn = document.createElement('button');

drawBtn.textContent = "Draw";
eraseBtn.textContent = "Erase";
resetBtn.textContent = "Reset";

const listBtn = document.createElement('li');
const buttons = document.getElementById('buttons');
buttons.appendChild(listBtn);
listBtn.appendChild(drawBtn);
listBtn.appendChild(eraseBtn);
listBtn.appendChild(resetBtn);




function createGrid (){

    const container = document.getElementById('container');
    const containerSize = 400;
    let n = 16;
    let itemSize = containerSize/n;

    for (let i = 0; i < n*n; i++){
        const box = document.createElement('div');
        box.className ="box";
        container.appendChild(box);

        box.style.height = `${itemSize}px`
        box.style.width = `${itemSize}px`


        drawBtn.addEventListener("click", function divBlue (){
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = 'blue';
            })
        } )

        eraseBtn.addEventListener("click", function divErase (){
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = '';
            })
        } )

        resetBtn.addEventListener("click", function divReset (){
            box.style.backgroundColor = '';
                
        } )
        
}
}

createGrid ();



//1. create new n
//2. rainbow color
//3. fix ui