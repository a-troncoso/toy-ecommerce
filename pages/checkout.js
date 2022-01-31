import Head from "next/head";
import CheckoutContainer from "@/containers/CheckoutContainer";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Amiibo | Checkout</title>
      </Head>
      <CheckoutContainer />
    </>
  );
}
