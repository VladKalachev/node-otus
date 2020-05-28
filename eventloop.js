// console.log('before');

// process.nextTick(() => {
//     console.log('tick!');
// });

// console.log('after');
setTimeout(() => {
    console.log('setTimeout');
}, 0)

setImmediate(() => {
    console.log('setImmediate');
});


