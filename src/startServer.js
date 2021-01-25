import { ApolloServer, PubSub } from 'apollo-server';
import mongoose from 'mongoose';

function startServer({ typeDefs, resolvers }) {
  mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const pubSub = new PubSub();

  const server = new ApolloServer({ typeDefs, resolvers, context: { pubSub } });

  server
    .listen()
    .then(({ url }) => console.log(`🔥 Server Started at ${url} 🔥`));
}

export default startServer;
