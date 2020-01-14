var moment=require('moment');

var calculate={
    sum:()=>{
        console.log("The sum of 3 & 7 is: "+(3+7)+" "+moment(new Date()).toDate());
    },
    mul:()=>{
        console.log("The multiplication of 3 & 7 is: "+(3*7)+" "+moment(new Date()).toDate());
    }
}
module.exports=calculate;