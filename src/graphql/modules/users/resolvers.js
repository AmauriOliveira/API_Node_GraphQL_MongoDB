import User from '../../../models/User';
import { USER_ADDED } from './channels';

export default {
  User: {
    fullName: (user) => `${user.firstName} ${user.lastName}`,
  },

  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },

  Mutation: {
    createUser: async (_, { data }, { pubSub: pubSubContext }) => {
      const user = await User.create(data);

      pubSubContext.publish(USER_ADDED, {
        userAdded: user,
      });

      return user;
    },
    updateUser: (_, { id, data }) =>
      User.findOneAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id)),
  },

  Subscription: {
    userAdded: {
      subscribe: (obj, args, { pubSub: pubSubContext }) =>
        pubSubContext.asyncIterator(USER_ADDED),
    },
  },
};

// Todos resolvers aceita os três parametros, objetos, argumentos e contexto.
