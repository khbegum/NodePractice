var event=require('events');
var eventEmitter=new event.EventEmitter();
eventEmitter.on('clicked',(button)=>{
    console.log(button+'is clicked');

})
eventEmitter.emit('clicked','button1');