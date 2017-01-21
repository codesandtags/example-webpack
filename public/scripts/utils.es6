console.log('This is the utils file');

const esparta = document.querySelector('.warrior');
const addAnimation = (event) => {
    event.target.style.animationDuration = '1s';
    event.target.style.animationName = 'changewidth';
    event.target.style.animationIterationCount = 5;
    event.target.style.animationDirection = 'alternate';
    console.log('added style!');
};

const removeAnimation = (event) => {
    event.target.style.animationName = '';
};

esparta.addEventListener('click', addAnimation);
esparta.addEventListener('dblclick', removeAnimation);