const dumbledore = {
  name: 'Albus Dumbledore',
  memory: 'the time I met Tom Riddle, what a smart and dangerous child he was!'
};

// console.log('dirname', __dirname);
// console.log('filename', __filename);

console.log('I am in dumbledoreland');
// module.exports is your return keyword
// module.exports = dumbledore;

// exports = {
//   dumbledore
// };


// const exports = module.exports; // they are both pointing to the same reference in memory

// if you wanted to use exports: you would want to attach it to the original object
// module.exports => you can reassign to anything you want, because this IS the property that should be exported/exposed from any file.

// exports.dumbledore = dumbledore;
// module.exports.dumbledore = dumbledore;
exports = {dumbledore}; //
// console.log('module.exports === exports?', module.exports === exports);
module.exports = {dumbledore};
// const a = {};
// const b = a;
// b = { c: 1};


// console.log('the exports variable', exports);

/*
module.exports = {
  dumbledore: {
    name: 'Albus Dumbledore',
    memory: 'the time I met Tom Riddle, what a smart and dangerous child he was!'
  }
}
*/


// module.exports = 'hello';

// console.log('module', module);
