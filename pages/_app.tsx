import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloProvider,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";

import { buildApolloClient } from "../graphql";
import { useRef } from "react";

export default function TestGraphClientApolloApp({
  Component,
  pageProps,
}: AppProps) {
  const apolloClientRef = useRef<ApolloClient<NormalizedCacheObject>>();
  if (apolloClientRef.current == null) {
    apolloClientRef.current = buildApolloClient();
  }

  return (
    <ApolloProvider client={apolloClientRef.current}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
