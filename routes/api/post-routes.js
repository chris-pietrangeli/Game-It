// const sequelize = require('../../config/connection');
// const router = require('express').Router();
// const { Post, User, Liked, Comment } = require('../../models');

// // get all post messages
// router.get('/', (req, res) => {
//     console.log('======================');
//     Post.findAll({
//         attributes: [
//             'id', 
//             'post_message', 
//             'created_at',
//             [sequelize.literal('(SELECT COUNT(*) FROM liked WHERE post.id = liked.post_id)'), 'liked_count']
//         ],
//         order: [['created_at', 'DESC']],
//         include: [
//             {
//                 model: Comment,
//                 attributes: [
//                     'id', 
//                     'comment_text', 
//                     'post_id',
//                     'user_id',
//                     'created_at'
//                 ],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             },
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     })
//         .then(dbPostData => res.json(dbPostData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// //get a single post
// router.get('/:id', (req, res) => {
//     Post.findOne({
//         where: {
//             id: req.params.id
//         },
//         attributes: [
//             'id',
//             'post_message',
//             'created_at',
//             [sequelize.literal('(SELECT COUNT(*) FROM liked WHERE post.id = liked.post_id)'), 'liked_count']
//         ],
//         include: [
//             {
//                 model: Comment,
//                 attributes: [
//                     'id', 
//                     'comment_text', 
//                     'post_id',
//                     'user_id',
//                     'created_at'
//                 ],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             },
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     })
//         .then(dbPostData => {
//             if (!dbPostData) {
//                 res.status(404).json({ message: 'No post found with this ID!'});
//                 return;
//             }
//             res.json(dbPostData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


// router.post('/', (req, res) => {
//     Post.create({
//         title: req.body.title,
//         post_url: req.body.post_url,
//         user_id: req.body.user_id
//     })
//         .then(dbPostData => res.json(dbPostData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// router.put('/upvote', (req, res) => {
//     Post.upvote(req.body, { Liked })
//         .then(updatedPostData => res.json(updatedPostData))
//         .catch(err => {
//             console.log(err);
//             res.status(400).json(err);
//         });
// });

// //update post message
// router.put('/:id', (req, res) => {
//     Post.update(
//         {
//             post_message: req.body.post_message
//         },
//         {
//             where: {
//                 id: req.params.id
//             }
//         }
//     )
//         .then(dbPostData => {
//             if (!dbPostData) {
//                 res.status(404).json({ message: 'No post was found with this id' });
//                 return;
//             }
//             res.json(dbPostData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// //delete post
// //Same as users delete it does not work :(??????????????????????????????????????
// router.delete('/:id', (req, res) => {
//     Post.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(dbPostData => {
//             if (!dbPostData) {
//                 res.status(404).json({ message: 'No post found with this ID' });
//                 return;
//             }
//             res.json(dbPostData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });



// module.exports = router;