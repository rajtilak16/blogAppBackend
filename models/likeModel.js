const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Posts"
        },
        user:{
            type:String,
            required:[true,"Please provide a name"]
        },
})

module.exports = mongoose.model("Likes",likeSchema);