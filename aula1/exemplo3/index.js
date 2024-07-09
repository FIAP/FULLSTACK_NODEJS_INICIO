console.log('init');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});

process.nextTick(() => {
    console.log('nextTick');
});

console.log('end');
