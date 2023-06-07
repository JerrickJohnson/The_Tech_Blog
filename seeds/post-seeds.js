const { Post } = require('../models');

const postData = [
  {
    title: 'Title 1',
    post_text: 'Seeded post 1 hopefully this works!',
    user_id: 1,
  },
  {
    title: 'Title 2',
    post_text: 'Seeded post 2 hopefully this works!',
    user_id: 2,
  },
  {
    title: 'Title 3',
    post_text: 'Seeded post 3 hopefully this works!',
    user_id: 2,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;