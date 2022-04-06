const sequelize = require('../config/connection');
const {User, Post} = require('../models');

const fakeuserdata = [
    {
        username: "thebigcheese",
        email: "bigcheese@example.com",
        password: "helloworld754"
    },
    {
        username: "spartan885",
        email: "spartan885@example.com",
        password: "helloworld759"
    },
    {
        username: "brutekilla",
        email: "brutekilla@example.com",
        password: "helloworld7532"
    },
    {
        username: "hobbitrunner4482",
        email: "hobbitrunner44@example.com",
        password: "helloworld7285"
    },
    {
        username: "lostsoul876",
        email: "lostsoul87@example.com",
        password: "helloworld7595"
    },
    {
        username: "worldruler975",
        email: "worldruler@example.com",
        password: "helloworld75865"
    },
    {
        username: "shaquille.oatmeal",
        email: "shaquille.oatmeal@example.com",
        password: "helloworld75767"
    },
    {
        username: "Yellowsnowman",
        email: "yellowsnowman@example.com",
        password: "helloworld75490"
    },
    {
        username: "Babushka1",
        email: "babushka1@example.com",
        password: "helloworld754343"
    },
    {
        username: "Badkarma4883",
        email: "badkarma4883@example.com",
        password: "helloworld754766"
    },
    {
        username: "averagestudent5083",
        email: "averagestudent5083@example.com",
        password: "helloworld75895"
    },
    {
        username: "Regina_Phalange",
        email: "regina_phalange@example.com",
        password: "helloworld7541"
    },
];

const seedFakeUsers = () => User.bulkCreate(fakeuserdata, {individualHooks: true});

module.exports = seedFakeUsers;