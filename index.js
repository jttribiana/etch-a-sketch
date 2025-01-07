
//adjust the box grid size based

/*
const container = document.getElementById('container');
let containerSize = 500;
let n = 16;


//creating div

for (let i = 1; i <= size*size; i++ ){
    let box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);

}
*/

const containerSize = 400;
let n = 20;
let itemSize = containerSize/n;
const container = document.getElementById('container');

    for (let i = 1; i <= n*n; i++ ){
        const box = document.createElement('div');
        box.className ="box";
        container.appendChild(box);


        box.style.height = `${itemSize}px`
        box.style.width = `${itemSize}px`

        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'blue';
        })
}


//mousehover 


/*



    box.style.height = `${containerSize/n}px`;
    box.style.width = `${containerSize/n}px`;

const container = document.getElementById("container");
const amount = 5;

for (let i = 1; i < amount; i++ ){
    let newDiv = document.createElement('div').value = "hello";
    container.append(newDiv);
}
*/

//logic for creating a 16*16 grid



//the loop wont stop til we have 16 box

//flexbox adjustment



/*

Things to do in this project

1. button that would pop up the answer of how many squares/grid
the user wanted (max is 100)
2. function that would make the user desired grid pop up

Additional features: 
1. randomize rgb values on each interaction on the square
2. progressive darkening effect of square by 10%-- fully black in ten interactions
*/

/*

mouse hover --

const button = document.createElement('button');
container.appendChild (button);

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = "blue";
})

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '';
})


*/