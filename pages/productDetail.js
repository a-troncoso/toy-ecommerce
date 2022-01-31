import { useRouter } from "next/router";
import Head from "next/head";
import Product from "@/containers/Product";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Amiibo | Product Detail</title>
      </Head>
      <Product id={id} />
    </>
  );
}
