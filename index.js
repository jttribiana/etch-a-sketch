

const mainContainer = document.getElementById('main');


const inputDiv = document.getElementById('inputDiv');
let input = document.createElement("input");
inputDiv.appendChild(input);

inputDiv.style.marginTop = "15px";
input.style.height = "30px";
input.style.weight = "10px";



const title = document.querySelector('h1');

const drawBtn = document.createElement('button');
const eraseBtn = document.createElement('button');
const resetBtn = document.createElement('button');
const resizeBtn = document.createElement("button");

input.setAttribute("type", "text");

drawBtn.textContent = "Draw";
drawBtn.style.padding = "10px";
drawBtn.style.margin = "0px 10px 40px 10px";


eraseBtn.textContent = "Erase";
eraseBtn.style.padding = "10px";
eraseBtn.style.margin = "20px 10px";

resetBtn.textContent = "Reset";
resetBtn.style.padding = "10px";
resetBtn.style.margin = "0px 10px 40px 10px";

resizeBtn.textContent = "Resize";
resizeBtn.style.padding = "10px";
resizeBtn.style.margin = "0px 10px 40px 10px";

const buttons = document.getElementById('buttons');

buttons.appendChild(drawBtn);
buttons.appendChild(eraseBtn);
buttons.appendChild(resetBtn);
buttons.appendChild(resizeBtn);



mainContainer.appendChild(title);
mainContainer.appendChild(container);
mainContainer.appendChild(inputDiv);
mainContainer.appendChild(buttons);


let n = 16;



resizeBtn.addEventListener('click', resizeGrid);

function resizeGrid (){
    let inputValue = Number(input.value);
        const container = document.getElementById('container');
        container.innerHTML = '';
    
        if (inputValue > 100 || inputValue < 1 ){
            n = 5;
            alert ("Choose values between 1-100");
        } else {n = inputValue}
        createGrid ();
}


        function createGrid (){


            const container = document.getElementById('container');
            const containerSize = 400;
            let itemSize = containerSize/n;
        
            for (let i = 0; i < n*n; i++){
        
                const box = document.createElement('div');
                box.className ="box";
                container.appendChild(box);
        
                box.style.height = `${itemSize}px`
                box.style.width = `${itemSize}px`
        
        
                drawBtn.addEventListener("click", function divBlue (){
                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = '#403d3e';
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


