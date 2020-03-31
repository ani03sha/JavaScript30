const dogs = [
    {
        name: 'Snickers',
        age: 2
    }, 
    {
        name: 'hugo',
        age: 8
    }
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

document.addEventListener("DOMContentLoaded", () => {
    // Regular
    console.log('Hello, World!');

    // Interpolated
    console.log('Hello, I am a %s', '🍿');

    // Styled
    console.log('%c I am a styled text', 'font-size: 30px; background-color: orange');

    // warning!
    console.warn('OH NOOO');

    // Error :|
    console.error('Shit!')

    // Info
    console.info('Crocodiles eat 3-4 people a year');

    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong');

    // Viewing DOM Elements
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name} and it is ${dog.age} years old!`);
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Anirudh');
    console.count('Anirudh');
    console.count('Sharma');
    console.count('Anirudh');
    console.count('Sharma');
    console.count('Anirudh');
    console.count('Sharma');

    // timing
    console.time('Fetching data');
    fetch('https://api.github.com/users/ani03sha')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('Fetching data');
            console.log(data);
    });

    // table
    console.table(dogs);

    // clearing
    console.clear();

});