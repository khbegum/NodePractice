var Logger =require('./loggerEvent');
var logger=new Logger();
logger.on('message',(data)=>console.log("called Listener",data))
logger.log('Hweau');