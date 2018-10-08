var express = require('express');
var router = express.Router();
var ctrlPots =require('../controllers/posts.controllers');

router.route('/posts').get(ctrlPots.postsGetAll);
router.route('/posts/:postId').get(ctrlPots.postsGetOne);
router.route('/posts/newpost').post(ctrlPots.postsAddOne);

module.exports=router;