import { Html, Head, NextScript, Main } from "next/document";
import Layout from "@/components/layout/Layout";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Short+Stack&family=Ubuntu:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Layout>
          <Main />
          <NextScript />
        </Layout>
      </body>
    </Html>
  );
}
