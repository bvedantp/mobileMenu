import './style.scss';

let bodi = document.querySelector('body');

export default function addMobileNav(arrayofitems){
    let outWrapper = document.createElement('div');
    outWrapper.classList.add('outside-wrapper');
    let leftSide = document.createElement('div');
    leftSide.classList.add('left-side');
    let rightSide = document.createElement('div');
    rightSide.classList.add('right-side');
    let launcher = document.createElement('button');
    launcher.id = 'menu-launcher';
    launcher.innerText = '+';

    bodi.appendChild(outWrapper);
    outWrapper.appendChild(leftSide);
    outWrapper.appendChild(launcher);
    outWrapper.appendChild(rightSide);

    for(let i=0;i<arrayofitems.length;i++){
        if( i%2 == 0 ) {
            let a = document.createElement('a');
            a.setAttribute('href', '#');
            a.innerText = `${arrayofitems[i]}`;
            leftSide.appendChild(a);
        } else {
            let b = document.createElement('a');
            b.setAttribute('href', '#');
            b.innerText = `${arrayofitems[i]}`;
            rightSide.appendChild(b);
        }
    }

    launcher.addEventListener('click',()=> {
        outWrapper.classList.toggle('opacity-red');
        leftSide.classList.toggle('animate');
        rightSide.classList.toggle('animate');
        launcher.classList.toggle('rotate');
    })
}

//addMobileNav(['one', 'one', 'one', 'one', 'one', 'one', 'one', 'one']);