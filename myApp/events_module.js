var eventEmitter=require('events');

class MYEventEmitter extends eventEmitter{}

var myEventEmitter=new MYEventEmitter();
myEventEmitter.on('event',()=>console.log("Event is fired"));

myEventEmitter.emit('event');
myEventEmitter.emit('event'); 