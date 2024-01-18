import mongoose from "mongoose";
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    class:{
        type:String,
        // required:true,
        
    },
    Rollno:{
        type:String,
        // required:true,
        
    },
    section:{
        type:String,
        required:true,
        
    }, 
    age:{
        type:Number,
        required:true
    }
    ,
    gender:{
        type:String,
        required:true,
    }

})
const Student=mongoose.model("Student",studentSchema);
export default Student