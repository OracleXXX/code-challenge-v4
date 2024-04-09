import Head from "next/head";
import { Container } from "@interchain-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="64rem" attributes={{ py: "$14" }}>
      <Head>
        <title>UI and State Challenge-GX</title>
          {/*SEO*/}
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
{/*      <Footer />*/}
    </Container>
  );
}
