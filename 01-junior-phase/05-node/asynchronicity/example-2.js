var start = new Date;
setTimeout(function(){
  var end = new Date;
  console.log('Time elapsed:', end - start, 'ms');
}, 500);

while (new Date - start < 1000) {
  // console.log('new date', new Date);
};

console.log(new Date - start);
console.log('will I run before or after the while loop?');
console.log('will I run before or after the setTimeout cb?');
