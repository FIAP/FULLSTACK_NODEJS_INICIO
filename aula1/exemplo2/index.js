const fs = require('fs');

fs.writeFileSync('fiap-nodejs.txt', 'Exemplo async curso FullStack!');

console.log('init');

fs.readFile('fiap-nodejs.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

console.log('end');
