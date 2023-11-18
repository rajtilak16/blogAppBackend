const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Posts"
    },
    user:{
        type:String,
        required:[true,"Please provide a name"]
    },
    body:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Comments",commentSchema);