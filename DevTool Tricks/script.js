const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 8 },
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#bada55';
    p.style.fontSize = '50px';
}

const p = document.querySelector('p');

// Regular
console.log('bonjour');

// Interpolated
console.log('%s, i am %d %s', 'hi', 23, 'years old');

// Styled
console.log('%c hi there', 'font-size: 18px; color: red;');

// Warnning!
console.warn('oh no');

// Error
console.error('Shit');

// Info
console.info('Some info!');

// Testing
console.assert(1 === 2, "That's wrong");

// Clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
    // console.group(`${dog.name}`);          // fadeOut
    console.groupCollapsed(`${dog.name}`);    // fadeIn
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

// Couting
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// Timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(response => response.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// Table
console.table(dogs);