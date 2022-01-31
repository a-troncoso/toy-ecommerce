import { useRouter } from "next/router";
import Head from "next/head";
import ProductContainer from "@/containers/ProductContainer";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Amiibo | Product Detail</title>
      </Head>
      <ProductContainer id={id} />
    </>
  );
}
