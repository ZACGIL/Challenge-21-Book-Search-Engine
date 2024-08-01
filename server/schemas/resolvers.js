const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('savedBooks');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('savedBooks');
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('savedBooks');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            user = await User.create({ username, email, password });
            token = signToken(user);
            return { token, user };
        },
        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw AuthentificationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthentificationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, { _id, input }, context) => {
            const user = await User.findOneAndUpdate(
                { _id: _id },
                { $addToSet: { savedBooks: input } },
                { new: true }
            );

            return user;
        },
        removeBook: async (parent, { _id, bookId }, context) => {
            const user = await User.findOneAndUpdate(
                { _id: _id },
                { $pull: { savedBooks: { bookId } } },
                { new: true }
            );

            return user;
        },
    },
};

module.exports = resolvers;