// graphql.js
import {ApolloClient, InMemoryCache} from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
const link = new RestLink({
    uri: 'https://full-cobra-66.deno.dev/api',

});
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

export default client;
