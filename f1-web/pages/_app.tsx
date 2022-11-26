import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "../styles/Header.scss";
import "../styles/Content.scss";
import "../styles/Drivers.scss";
import "../styles/Latest.scss";
import "../styles/NavContent.scss";
import "../styles/Schedule.scss";
import "../styles/Standings.scss";
import "../styles/Teams.scss";
import "../components/Content/MoreNews/MoreNews.scss";
import "../components/Rankings/Ranking/ranking.scss";
import "../components/Topic/Topic.scss";
import "../pages/post/post.scss";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  resolvers: {},
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
