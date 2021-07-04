function helloWorld() {
  console.log('hello world!');
}


function iLikeDogsAndWorlds() {
  console.log('I like dogs');
  helloWorld();
  console.log('i like cats');
}

iLikeDogsAndWorlds();

// V8 - executes your code in a function one line at a time from top to bottom
// CALLSTACK
// what gets ADDED to the callstack and how the callstack deals with function calls is last in first out


// CALLSTACK




// console.log('hello world')
// helloWorld()
// iLikeDogsAndWorlds() - line 11
//run callstack-examplejs
