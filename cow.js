const cows = require('cowsay');

const cowpeople=(text) => cows.say({
    text,
    e: '^^',
    T: 'S',
    f: 'USA' 
})

console.log(cowpeople("hello"))

module.exports = cowpeople

