const {Liked} = require('../models');

const fakelikeddata = [
    {
        id: "",
        user_id:"",
        post_id:"",
    },
    {
        id: "",
        user_id:"",
        post_id:"",
    },
    {
        id: "",
        user_id:"",
        post_id:"",
    },
    {
        id: "",
        user_id:"",
        post_id:"",
    },
    {
        id: "",
        user_id:"",
        post_id:"",
    },
    {
        id: "",
        user_id:"",
        post_id:"",
    },
    {
        id: "",
        user_id:"",
        post_id:"",
    },
    {
        id: "",
        user_id:"",
        post_id:"",
    },
    {
        id: "",
        user_id:"",
        post_id:"",
    },
    {
        id: "",
        user_id:"",
        post_id:"",
    },
    {
        id: "",
        user_id:"",
        post_id:"",
    },
    
];

const seedFakeLiked = () => Liked.bulkCreate(fakelikeddata);

module.exports = seedFakeLiked;