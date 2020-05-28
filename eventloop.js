console.log('before');

process.nextTick(() => {
    console.log('tick!');
});

console.log('after');