import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  split,
} from "@apollo/client";
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { getMainDefinition } from 'apollo-utilities';



const HundleRetry = () => new RetryLink();


//* ---------------- Helper functions that handles error cases --------------- */
const handleErrors = () => {
 return onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
   console.log(graphQLErrors)
    // graphQLErrors.map(({ message}) =>
    //   console.log(
    //     `Graphql Error : ${message}`
    //   )
    // );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
}



// Creates a new Apollo Client
/**
 * @param {string} API_URL, GraphQL api url
 */

export const createApolloClient = (API_URL) => {
  const cache = new InMemoryCache();


  const persist_cache = async () => {
        await persistCache({
        cache,
        storage: new LocalStorageWrapper(window.localStorage),
      });
  }


// Links
  const errorLink = handleErrors();
  const retryLink = HundleRetry();
  const uploadLink = createUploadLink({ uri: API_URL }); // Upload link also creates an HTTP link



  /* Split links, so we can send data to each link
   depending on what kind of operation is being sent */
  const terminatingLink = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    uploadLink
  );

  persist_cache();
/* -------------------------------------------------------------------------- */
  return new ApolloClient({
    link: ApolloLink.from([errorLink, retryLink, terminatingLink]),
    cache :cache,
  });
}






