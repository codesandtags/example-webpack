const description = 'This file use ES6 features! :D';
const errorMessage = 'This is an error';

console.log('This is the login file!');
console.log(`Description : ${description}`);

let login = function(user, pass) {
    if (user === 'admin' && pass === 'coco') {
        console.log('Heyyy you rulz 😎');
    } else {
        console.log('Wrongggg... this is not valid ❌');
    }
};

export {login};