const {Post} = require('../models');

const fakepostdata = [
    {
        user_id: "1",
        post_message: "Looking for people to play Apex legends with"
    },
    {
        user_id: "2",
        post_message: "Anyone wanna play games tonight?"
    },
    {
        user_id: "2",
        post_message: "How does everyone like the new Call Of Duty?"
    },
    {
        user_id: "3",
        post_message: "Looking for players in Elden Ring."
    },
    {
        user_id: "3",
        post_message: "Just played the new Halo Holy crap!!!!!"
    },
    {
        user_id: "4",
        post_message: "What is the best video game ever made in your opinion?"
    },
    {
        user_id: "5",
        post_message: "Who the heck wants to play some games!!!!"
    },
    {
        user_id: "6",
        post_message: "In need of 1 player for Fortnight at 7pm"
    },
    {
        user_id: "7",
        post_message: "Where all my gamers at!!????"
    },
    {
        user_id: "7",
        post_message: "Who wants to play Mincraft?"
    },
    {
        user_id: "7",
        post_message: "Video games are my best friend!!!"
    },
    {
        user_id: "7",
        post_message: "What is your favorite game to play right now?"
    }
    
];

const seedFakePosts = () => Post.bulkCreate(fakepostdata);
module.exports = seedFakePosts;