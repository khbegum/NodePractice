var express=require('express');
var app=express();
app.set('view engine','ejs');
//GET,POST,PUT,DELETE
app.get("/",(req,res)=>{
    //res.send("this is home page");
    //to send any file to browser
    res.sendFile(__dirname+"/index.html");
})
app.get("/about",(req,res)=>{
    //res.send("this is about page")
    //to send any file to browser
    res.sendFile(__dirname+'/about.html')
})
// var student={
//     1:"Khairu",
//     2:"Sree Lekha",
//     3:"Rahul",
//     4:"Mahesh"
// }
var student={
    1:{name:"Khairu",
        subjects:["Angular","React","Java"]},
    2:{name:"Sree Lekha",
    subjects:["Angular 5","React","c"]},
    3:{name:"Rahul",
    subjects:["c#","c","Java"]},
    4:{name:"Mahesh",
    subjects:["Angular","React","c#"]}
}
app.get("/student/:id",(req,res)=>{
    res.render('student',{name:student[req.params.id].name,subjects :student[req.params.id].subjects
                                                         ,id:req.params.id})
   // res.send("show student id "+student[req.params.id])
})
app.listen(3000,()=>{
    console.log("server is running on 3000");
})