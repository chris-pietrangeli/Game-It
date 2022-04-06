const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');
const seedPosts = require('./post-seeds');
const seedLiked = require('./liked-seeds');


const sequelize = require('../config/connection');

const seedEverything = async () => {
    await sequelize.sync({force: true});
    await seedUsers();
    await seedComments();
    await seedPosts();
    await seedLiked();

    process.exit(0);
};

seedEverything();