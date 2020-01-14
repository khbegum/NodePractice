const mongo=require('mongodb').MongoClient;
const client=require('socket.io').listen(4000).sockets;

//connect to mongo
mongo.connect('mongodb://localhost:27017/mongochat',function(err,db){
    if(err)
    throw err;
    console.log('Mongodb is connected');
    //connect to socket.io
    //const db=client.db('mongochat')
    client.on('connection',function(socket){
let chat=db.collection('chats');
//create function to send status
sendStatus=function(s){
    socket.emit('status',s);
}
//get chats from mongo collection
chat.find({}).limit(100).sort({_id:1}).toArray(function(err,res){
if(err)
throw err;
//emit msgs
socket.emit('output',res);
});
//handle input event
socket.on('input',function(data){
    let name=data.name;
    let message=data.message;
    if(name==''||message=='')
    //send error msg
sendStatus('please send message')
else{
    chat.insert({name:name,message:message},function(){
        client.emit('output',[data]);
        //send status objects
        sendStatus({
            message:'Message sent',
            clear:true
        })
    })
}

})
//handle clear
socket.on('clear',function(data){
    //remove all chats from collection
    chat.remove({},function(){
        //emit cleared
        socket.emit('cleared');
    })
})
    });
});