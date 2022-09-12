import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { GraphApolloLink } from "@graphprotocol/client-apollo";

import * as GraphClient from "../.graphclient";

let client: ApolloClient<NormalizedCacheObject> | null = null;

export default function buildApolloClient(): ApolloClient<NormalizedCacheObject> {
  if (client == null) {
    client = new ApolloClient({
      ssrMode: false,
      link: new GraphApolloLink(GraphClient),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "cache-and-network",
        },
        query: {
          fetchPolicy: "cache-first",
          errorPolicy: "all",
        },
      },
    });
  }

  return client;
}
