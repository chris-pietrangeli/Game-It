const {Comment} = require('../models');

const fakecommentdata = [
    {
        id: "",
        comment_text: "",
        user_id: "",
        post_id: "",
        created_at: "",
        updated_at: "",
    },
    {
        id: "",
        comment_text: "",
        user_id: "",
        post_id: "",
        created_at: "",
        updated_at: "",
    },
    {
        id: "",
        comment_text: "",
        user_id: "",
        post_id: "",
        created_at: "",
        updated_at: "",
    },
    {
        id: "",
        comment_text: "",
        user_id: "",
        post_id: "",
        created_at: "",
        updated_at: "",
    },
    {
        id: "",
        comment_text: "",
        user_id: "",
        post_id: "",
        created_at: "",
        updated_at: "",
    },
    {
        id: "",
        comment_text: "",
        user_id: "",
        post_id: "",
        created_at: "",
        updated_at: "",
    },
    {
        id: "",
        comment_text: "",
        user_id: "",
        post_id: "",
        created_at: "",
        updated_at: "",
    },
    {
        id: "",
        comment_text: "",
        user_id: "",
        post_id: "",
        created_at: "",
        updated_at: "",
    },
    {
        id: "",
        comment_text: "",
        user_id: "",
        post_id: "",
        created_at: "",
        updated_at: "",
    },
    {
        id: "",
        comment_text: "",
        user_id: "",
        post_id: "",
        created_at: "",
        updated_at: "",
    },
    {
        id: "",
        comment_text: "",
        user_id: "",
        post_id: "",
        created_at: "",
        updated_at: "",
    },
];

const seedFakeComments = () => Comments.bulkCreate(fakecommentdata);

module.exports = seedFakeComments;