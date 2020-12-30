const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    options:{
        type:String,
        required:true
    },
    dates:{
        type:Date,
        required:true
    }
});
const Info=mongoose.model('todo',todoSchema);
module.exports=Info;