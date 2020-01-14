var fs=require('fs');
//-----------Synchronous proccess to read and write from a file
// var readSg=fs.readFileSync('note.txt','utf8');
// console.log(readSg);
// fs.writeFileSync('note2.txt',readSg);
//------------Asynchronous process to read and write from a file
var readss=fs.readFile('note.txt','utf8',(err,data)=>{
    if(err)
    return console.error(err);
    console.log(data);
});
console.log('this file is to read');
// fs.writeFile('note3.txt','note.txt',(err,data)=>{
//     if(err)
//     return console.error(err);
//     console.log('Success');
// })
fs.appendFile('note.txt','how do you do ?',(err,data)=>{
  if(err)
  return console.error(err);
  console.log('Success');
})
//to delete any file
//fs.unlink('note3.txt');
//to chec whether file exits
// var fileName='note3.txt'
// try {
//     if (fs.exists(fileName,(exists)=>{
//       console.log(exists?fs.unlink(fileName):'file doesnot exist');}))

    // })) {
    //   //file exists
     
    // console.log('hi')}
    //   else
    //   console.log('file doesnot exist');
    
    
  //   catch(err) {
  //   console.error(err)
  // }
  //to create any directory or folder
  //fs.mkdirSync('node');
  //to create file inside the folder which is created now
//   fs.writeFileSync('./node/hello.txt',"hello",(err,data)=>{
//     if(err)
//     return console.error(err);
//     console.log('Success');
// })
//to delete any folder
//fs.rmdirSync('node');//it cannot be done bcoz it is having hello.txt file after deleting that file we can delete that directory
// fs.unlink('./node/hello.txt',()=>{
//     fs.rmdirSync('node');
// })
//rename file
fs.rename('note.txt','note3.txt',(err,data)=>{
  if(err)
  return console.error(err);
  console.log('Success');
})