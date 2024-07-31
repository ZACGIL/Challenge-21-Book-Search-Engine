const { User, Book } = require('../models');
const { signToken, AuthentificationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('savedBooks');
        }
    }
}

module.exports = resolvers;