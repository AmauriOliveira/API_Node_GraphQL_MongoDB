import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

function startServer({ typeDefs, resolvers }) {
  mongoose.connect('mongodb://localhost:27017graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const server = new ApolloServer({ typeDefs, resolvers });

  server
    .listen()
    .then(({ url, port }) =>
      console.log(`🔥 Server Started at ${url}, port ${port}`)
    );
}

export default startServer;
