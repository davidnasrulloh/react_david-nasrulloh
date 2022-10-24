import { ApolloClient, InMemoryCache } from "@apollo/client";

import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws/index.js";

const httpLink = new HttpLink({
    uri: "https://stirred-rhino-39.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret":"2T083plTMGttLOXsgGkiRGPW3DPK8ChI49T3g3xy7QbUbvIFyPgJ5o3GTXMYfZTj"
    }
}); 

const wsLink = new WebSocketLink({
    uri: "wss://stirred-rhino-39.hasura.app/v1/graphql",
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                "x-hasura-admin-secret":"2T083plTMGttLOXsgGkiRGPW3DPK8ChI49T3g3xy7QbUbvIFyPgJ5o3GTXMYfZTj"
            }
        }
    }
});

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return(
            definition.kind === "OperationDefinition" && 
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
);

const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

// const apolloClient = new ApolloClient({
//     uri: "https://stirred-rhino-39.hasura.app/v1/graphql",
//     cache: new InMemoryCache(),
//     headers: {
//         "x-hasura-admin-secret":"2T083plTMGttLOXsgGkiRGPW3DPK8ChI49T3g3xy7QbUbvIFyPgJ5o3GTXMYfZTj"
//     }
// });

export default apolloClient;