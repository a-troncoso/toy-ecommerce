import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

export default function Main() {
  const count = useSelector((state) => state.counter);

  return (
    <main>
      <h1>{count}</h1>
      <Link href="/productDetail">
        <a>Go To product detail</a>
      </Link>
    </main>
  );
}
