// var time=0;
// var timer=setInterval(() => {
//   time +=2;

//   console.log(time+"This is how to use global objects");
//   if(time>7)
//   clearInterval(timer);
// }, 2000);
//------------------------
// console.log(__dirname)
// console.log(__filename)
//---------------------------
// const decoder = new TextDecoder('shift_jis');
// let string = '';
// let buffer;
// while (buffer = getNextChunkSomehow()) {
//   string += decoder.decode(buffer, { stream: true });
// }
// string += decoder.decode(); 

let utf8decoder = new (require('util').TextDecoder)('utf-8') // default 'utf-8' or 'utf8'

let u8arr = new Uint8Array([240]);
let i8arr = new Int8Array([-16, -96, -82, -73]);
let u16arr = new Uint16Array([41200, 47022]);
let i16arr = new Int16Array([-24336, -18514]);
let i32arr = new Int32Array([-1213292304]);

console.log(utf8decoder.decode(u8arr));
console.log(utf8decoder.decode(i8arr));
console.log(utf8decoder.decode(u16arr));
console.log(utf8decoder.decode(i16arr));
console.log(utf8decoder.decode(i32arr));