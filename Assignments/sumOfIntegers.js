var fs=require('fs');
var input=fs.createReadStream('numbers.txt','utf8',(err,data)=>{
    if(err)
    throw err;
    sum=0;
    
    //  for(i=0;i<data.length;i++){
    //     sum+=data[i];
    //     console.log(sum);
    // }
    
})
var r1=require('readline').createInterface({
input:input,

})
r1.on('line',(line)=>{

    console.log(line.length)
})