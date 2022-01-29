import { useSelector } from "react-redux";
import MainHeader from "@/components/mainHeader/MainHeader";
import MainHero from "@/components/mainHero/MainHero";
import ProductCategory from "@/components/productCategory/ProductCategory";
import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";
import ProductList from "@/components/productList/ProductList";

import styles from "./main.module.scss";

export default function Main() {
  const product = useSelector((state) => state.product);
  console.log(product);

  return (
    <main>
      <MainHeader />
      <MainHero />
      <div className={styles.productCategoryWrapper}>
        <ProductCategory />
      </div>
      <div className={styles.featuredProductsWrapper}>
        <FeaturedProducts />
      </div>
      <ProductList />
    </main>
  );
}
