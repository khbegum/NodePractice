var EventEmitter=require('events');
//const uuid=require('uuid');
class Logger extends EventEmitter{

    log(msg){
     this.emit('message',{msg})
    }
}
module.exports=Logger
