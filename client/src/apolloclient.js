import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { withClientState } from 'apollo-link-state'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'

/* NEW NEW NEW */
import { createUploadLink } from 'apollo-upload-client';
import { BatchHttpLink } from 'apollo-link-batch-http'
/* NEW NEW NEW */


const appCache = new InMemoryCache()

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
})

const stateLink = withClientState({
  cache: appCache
})

let options = {
    uri: 'http://localhost:8080/graphql',
    credentials: 'include'
}

const httpLink = ApolloLink.split(
    operation => operation.getContext().hasUpload,
    createUploadLink(options), 
    new BatchHttpLink(options)
)


const apolloClient = new ApolloClient({
    link: ApolloLink.from([errorLink, stateLink, httpLink]),
    cache: appCache
  })
  
  export default apolloClient