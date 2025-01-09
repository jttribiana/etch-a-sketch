


/*working function code

function createGrid (){
    const container = document.getElementById('container');
    const containerSize = 400;
    let n = 16;
    let itemSize = containerSize/n;

    for (let i = 1; i < n*n; i++){
        const box = document.createElement('div');
        box.className ="box";
        container.appendChild(box);

        box.style.height = `${itemSize}px`
        box.style.width = `${itemSize}px`



        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'blue';
        })
}
}

createGrid ();


//making drawbutton


const drawBtn = document.createElement('button');
drawBtn.textContent = "Draw";
const listBtn = document.createElement('li');
const buttons = document.getElementById('buttons');
buttons.appendChild(listBtn);
listBtn.appendChild(drawBtn);


drawBtn.addEventListener("click", function createGrid (){

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

        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'blue';
        })
}
})

createGrid ();

*/

const drawBtn = document.createElement('button');
drawBtn.textContent = "Draw";
const listBtn = document.createElement('li');
const buttons = document.getElementById('buttons');
buttons.appendChild(listBtn);
listBtn.appendChild(drawBtn);


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
        
}
}

createGrid ();





/* On going problems,
1. the last div doesnt become blue when hovered


///add event listener using button
const drawnBtn = document.createElement('button');
drawnBtn.textContent = "draw";
container.appendChild(drawnBtn);


drawnBtn.addEventListener("click",createGrid())


//to do-> make function that would draw pixels when click button

/*


*/

//// erase

//reset


///increment/decrement

