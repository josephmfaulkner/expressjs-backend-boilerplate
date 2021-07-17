import AppConfig from './_config';
import { ApolloServer ,ApolloServerExpressConfig } from 'apollo-server-express';
import * as express from "express";


const main = async () => {
  const listeningPort : string = AppConfig.LISTENING_PORT();
  const apolloServerConfig  : ApolloServerExpressConfig = await AppConfig.APOLLOSERVEREXPRESS_CONFIG();

  const expressServer = express();
  const apolloServer = new ApolloServer(apolloServerConfig);
  await apolloServer.start(); 

  apolloServer.applyMiddleware({
    app: expressServer, 
    path: '/graphql',
    cors: false 
  });

  expressServer.listen(listeningPort, () => {
    console.log(`Server is listening on port ${listeningPort}/graphql`);
    return;
  });

};

main().catch((error)=>{
  console.error(error);
});
