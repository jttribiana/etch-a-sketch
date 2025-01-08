

let itemSize = containerSize/n;
const container = document.getElementById('container');
const containerSize = 400;
let n = 20;

const drawnBtn = document.createElement('button');
drawnBtn.textContent = "draw";
container.appendChild(drawnBtn);


drawnBtn.addEventListener("click",drawSketch )

function drawSketch(){
    let box;
    for (let i = 1; i <= n*n; i++ ){
        box = document.createElement('div');
        box.className ="box";
        container.appendChild(box);


        box.style.height = `${itemSize}px`
        box.style.width = `${itemSize}px`

        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'blue';
        })
}
return box ()

}


//to do-> make function that would draw pixels when click button

/*

const drawnBtn = document.createElement('button');
drawnBtn.textContent = "draw";
container.appendChild(drawnBtn);


drawnBtn.addEventListener("click",drawSketch )

*/

//// erase

//reset


///increment/decrement

