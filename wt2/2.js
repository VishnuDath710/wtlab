const fs=require("fs");
const filepath='test.txt'
fs.readFile(filepath,'utf8',(err,data)=>{
    if(err){
        console.log("failed to read file");
    }
    else{
        console.log(`data:${data}`)
    }
})