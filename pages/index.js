import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Main from "@/containers/Main";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Amiibo | E-commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </Layout>
  );
}
