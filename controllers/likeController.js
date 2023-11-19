const Post = require("../models/postModel");
const Like = require("../models/likeModel");
const { deleteModel } = require("mongoose");

exports.likePost = async (req,res) => {
    try{
        const {user, post} = req.body;
        const like = new Like({
            user,post
        });

        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new:true});

        res.json({
            post: updatedPost,
        });
   }
    catch(error){
        return res.status(400).json({
            error: "Error while liking post",
        });
    }
};

exports.unlikePost = async (req,res) => {
    try{
        const {like,post} = req.body;

        const deleteLike = await Like.findOneAndDelete({post:post,_id:like});

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes: deleteLike._id}}, {new:true});

        res.json({
            post:updatedPost,
        });
        
    }
    catch(error){
        return res.status(400).json({
            error: "Error while unliking post likes",
        });
    }

}