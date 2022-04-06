const sequelize = require('../config/connection');
const {User, Post} = require('../models');

const fakeuserdata = [
    {
        username: "",
        email: "",
        password: ""
    },
    {
        username: "",
        email: "",
        password: ""
    },
    {
        username: "",
        email: "",
        password: ""
    },
    {
        username: "",
        email: "",
        password: ""
    },
    {
        username: "",
        email: "",
        password: ""
    },
    {
        username: "",
        email: "",
        password: ""
    },
    {
        username: "",
        email: "",
        password: ""
    },
    {
        username: "",
        email: "",
        password: ""
    },
    {
        username: "",
        email: "",
        password: ""
    },
    {
        username: "",
        email: "",
        password: ""
    },
    {
        username: "",
        email: "",
        password: ""
    },
    {
        username: "",
        email: "",
        password: ""
    },
];

const seedFakeUsers = () => User.bulkCreate(fakeuserdata, {individualHooks: true});

module.exports = seedFakeUsers;