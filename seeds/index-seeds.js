const seedFakeUsers = require('./user-seeds');
const seedFakePosts = require('./post-seeds');
const seedFakeComments = require('./comment-seeds');
const seedFakeLiked = require('./liked-seeds');


const sequelize = require('../config/connection');

const seedEverything = async () => {
    await sequelize.sync({force: true});
    await seedFakeUsers();
    await seedFakePosts();
    await seedFakeComments();
    await seedFakeLiked();

    process.exit(0);
};

seedEverything();