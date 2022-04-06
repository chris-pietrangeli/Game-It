const {Post} = require('../models');

const fakepostdata = [
    {
        user_id: "",
        id: "",
        post_message: "",
        created_at: "",
        updated_at: "",
    },
    {
        user_id: "",
        id: "",
        post_message: "",
        created_at: "",
        updated_at: "",
    },
    {
        user_id: "",
        id: "",
        post_message: "",
        created_at: "",
        updated_at: "",
    },
    {
        user_id: "",
        id: "",
        post_message: "",
        created_at: "",
        updated_at: "",
    },
    {
        user_id: "",
        id: "",
        post_message: "",
        created_at: "",
        updated_at: "",
    },
    {
        user_id: "",
        id: "",
        post_message: "",
        created_at: "",
        updated_at: "",
    },
    {
        user_id: "",
        id: "",
        post_message: "",
        created_at: "",
        updated_at: "",
    },
    {
        user_id: "",
        id: "",
        post_message: "",
        created_at: "",
        updated_at: "",
    },
    {
        user_id: "",
        id: "",
        post_message: "",
        created_at: "",
        updated_at: "",
    },
];

const seedFakePosts = () => Post.bulkCreate(fakepostdata);
module.exports = seedFakePosts;