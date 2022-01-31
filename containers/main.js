import { useSelector } from "react-redux";
import MainHeader from "@/components/mainHeader/MainHeader";
import MainHero from "@/components/mainHero/MainHero";
import ProductCategory from "@/components/productCategory/ProductCategory";
import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";
import ProductList from "@/components/productList/ProductList";
import CartPanel from "@/components/cartPanel/CartPanel";

import styles from "./main.module.scss";

export default function Main() {
  // const product = useSelector((state) => state.product);

  return (
    <div>
      <main>
        <MainHeader />
        <MainHero />
        <section className={styles.productCategorySection}>
          <ProductCategory />
        </section>
        <FeaturedProducts />
        <section className={styles.productListSection}>
          <ProductList />
        </section>
      </main>
      <aside>
        <CartPanel />
      </aside>
    </div>
  );
}
