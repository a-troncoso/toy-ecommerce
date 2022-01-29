import Head from "next/head";
import Layout from "components/layout";
import Main from "containers/main";
import GlobalStyles from "styles/globalStyles";

import "normalize.css/normalize.css";

export default function Home() {
  return (
    <Layout className="container">
      <Head>
        <title>Amiibo | E-commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />

      <GlobalStyles />
    </Layout>
  );
}
