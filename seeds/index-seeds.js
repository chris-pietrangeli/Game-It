const seedFakeUsers = require('./user-seeds');
const seedFakeComments = require('./comment-seeds');
const seedFakePosts = require('./post-seeds');
const seedFakeLiked = require('./liked-seeds');


const sequelize = require('../config/connection');

const seedEverything = async () => {
    await sequelize.sync({force: true});
    await seedFakeUsers();
    await seedFakeComments();
    await seedFakePosts();
    await seedFakeLiked();

    process.exit(0);
};

seedEverything();