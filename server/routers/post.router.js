const express = require('express');
const router = express.Router();
const Post = require('../models/posts.models');
const User = require('../models/users.models');

// @router api/post
// @desc POST post
// @access Private
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savaPost = await newPost.save();
        res.status(200).json({ success: true, message: 'Create post has successfully', savaPost });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
})

// @router api/posts/:id
// @desc PUT post
// @access Private
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json({ success: true, message: 'Post has been updated' });
        } else {
            res.status(403).json({ success: false, message: 'The post has been updated' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'You can updated only your post' });
    }
})

// @router api/posts/:id
// @desc DELETE post
// @access Private
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json({ success: true, message: 'Post has been delete' });
        } else {
            res.status(500).json({ success: false, message: 'You can delete only your post' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
})

// @router api/posts/:id/like or api/posts/:id/dislike
// @desc PUT post
// @access Private
router.put('/:id/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json({ success: true, message: 'Post has been liked' });
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json({ success: true, message: "Post has been disliked" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal serevr error' });
    }
})

// @router api/posts/:id
// @desc GET post
// @access Private
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({ success: true, message: 'Post has been found', post });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
})

// @router api/posts/timeline/all
// @desc GET post
// @access private
router.get('/timeline/:userId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const postUser = await Post.find({ userId: currentUser._id });
        const friendPost = await Promise.all(
            currentUser.followings.map(friendId => {
                return Post.find({ userId: friendId })
            })  
        );
        res.status(200).json(postUser.concat(...friendPost));
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
})

// @router api/profile/:username
// @desc GET users all post
// @access private
router.get('/profile/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const posts = await Post.find({ userId: user._id });
        
        res.status(200).json({ success: true, message: 'complete', posts });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
})

module.exports = router;