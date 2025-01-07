



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

//draw


//// erase

//reset


///increment/decrement

