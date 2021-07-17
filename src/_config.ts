import { ApolloServer, ApolloServerExpressConfig, ServerRegistration } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'; 
import { GraphQLSchema } from "graphql";
import { createSchema } from './graph-ql';

class AppConfig {

    public static LISTENING_PORT(): string {
        const listeningPort = process.env.PORT || '3080';  
        return listeningPort;
    }

    public static async APOLLOSERVEREXPRESS_CONFIG(): Promise<ApolloServerExpressConfig> {
        
        let graphQlSchema : GraphQLSchema = await createSchema();  
        
        const apolloServerExpressConfig = {
            schema: graphQlSchema,
            plugins: [
                ApolloServerPluginLandingPageGraphQLPlayground({})
            ] 
        };
        return apolloServerExpressConfig ;  
    }

}

export default AppConfig;