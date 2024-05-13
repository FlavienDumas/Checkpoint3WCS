import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include"
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link : link
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <div id="mainContent" style={{
        position: 'fixed',
        top: 125,
        width: '100%',
        height: 'calc(100vh - 125px)'
      }}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
