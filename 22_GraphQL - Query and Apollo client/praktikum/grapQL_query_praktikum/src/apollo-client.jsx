import { ApolloClient, InMemoryCache } from "@apollo/client";


const apolloClient = new ApolloClient({
    uri: "https://stirred-rhino-39.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret":"2T083plTMGttLOXsgGkiRGPW3DPK8ChI49T3g3xy7QbUbvIFyPgJ5o3GTXMYfZTj"
    }
});

export default apolloClient;