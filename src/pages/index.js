import Head from "next/head";
import Layout from "@/components/layout";
import Main from "@/containers/main";

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
