import Head from "next/head";
import Link from "next/link";
import Layout from "components/layout";
import GlobalStyles from "styles/globalStyles";

import "normalize.css/normalize.css";

export default function Home() {
  return (
    <Layout className="container">
      <Head>
        <title>Amiibo | E-commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/productDetail">
          <a>Go To product detail</a>
        </Link>
      </main>

      <GlobalStyles />
    </Layout>
  );
}
