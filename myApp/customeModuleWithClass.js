class student{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    greeting(){
        console.log(`this is name of the Student ${this.name} and age is ${this.age}`)
    }
}
module.exports=student;