const { User } = require("../models");

const userData = [
  {
    username: "TimAllen",
    email: "tallen@gmail.com",
    password: "password1234",
  },
  {
    username: "EddieMurphy",
    email: "eddieM@gmail.com",
    password: "password1234",
  },
  {
    username: "ChrisRock",
    email: "crock@gmail.com",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;