import Link from "next/link";
import { useSelector } from "react-redux";

export default function Main() {
  const product = useSelector((state) => state.product);
  console.log(product);

  return (
    <main>
      {/* <h1>{count}</h1> */}
      <Link href="/productDetail">
        <a>Go To product detail</a>
      </Link>
    </main>
  );
}
