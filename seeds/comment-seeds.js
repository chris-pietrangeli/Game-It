const {Comment} = require('../models');

const fakecommentdata = [
    {
        comment_text: "Im down to play!!",
        user_id: "7",
        post_id: "1",
    },
    {
        comment_text: "What did you have in mind?",
        user_id: "1",
        post_id: "2",
    },
    {
        comment_text: "It's way better than the old ones!",
        user_id: "6",
        post_id: "3",
    },
    {
        comment_text: "Let me log on and I will play with you!",
        user_id: "10",
        post_id: "4",
    },
    {
        comment_text: "I LOVE THE NEW HALO!!!",
        user_id: "4",
        post_id: "5",
    },
    {
        comment_text: "Halo hands down!",
        user_id: "8",
        post_id: "6",
    },
    {
        comment_text: "Lets pull an all nighter!!",
        user_id: "3",
        post_id: "7",
    },
    {
        comment_text: "I'm you man!!",
        user_id: "2",
        post_id: "8",
    },
    {
        comment_text: "Right here!!",
        user_id: "12",
        post_id: "9",
    },
    {
        comment_text: "I built a sweet world! Wanna join?",
        user_id: "5",
        post_id: "10",
    },
    {
        comment_text: "Who needs people when we have video games!!!",
        user_id: "9",
        post_id: "11",
    },
    {
        comment_text: "I'm all for Super Smash Bros!!",
        user_id: "11",
        post_id: "12",
    },
];

const seedFakeComments = () => Comment.bulkCreate(fakecommentdata);

module.exports = seedFakeComments;