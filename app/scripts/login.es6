const description = 'This file use ES6 features! :D';

console.log('This is the login file!');
console.log(`Description : ${description}`);

function login(user, pass) {
    if (user === 'admin' && pass === 'coco') {
        console.log('Heyyy you rulz 😎');
    } else {
        console.log('Wrongggg... this is not valid ❌');
    }
}

login('admin', 'cocox');