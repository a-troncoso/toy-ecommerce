import Head from "next/head";
import OrderContainer from "@/containers/OrderContainer";

export default function Order() {
  return (
    <>
      <Head>
        <title>Amiibo | Orden creada</title>
      </Head>
      <OrderContainer />
    </>
  );
}
