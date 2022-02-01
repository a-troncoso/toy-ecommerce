import { useEffect } from "react";
import { useSelector } from "react-redux";
import MainHeader from "@/components/mainHeader/MainHeader";
import MainHero from "@/components/mainHero/MainHero";
import ProductCategory from "@/components/productCategory/ProductCategory";
import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";
import ProductList from "@/components/productList/ProductList";
import CartPanel from "@/components/cartPanel/CartPanel";
import { useDispatch } from "react-redux";
import { fetchAllProductsAction } from "@/store/product/productActions";
import { fetchAllCategoriesAction } from "@/store/category/categoryActions";

import styles from "./main.module.scss";

export default function MainContainer() {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // console.log("state", state);

  const product = useSelector((state) => state.product);
  const category = useSelector((state) => state.category);
  console.log("product", product);
  // const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchAllProductsAction());
    dispatch(fetchAllCategoriesAction());
  }, [dispatch]);

  return (
    <div>
      <main>
        <MainHeader />
        <MainHero />
        <section className={styles.productCategorySection}>
          <ProductCategory categories={category.all} />
        </section>
        <FeaturedProducts products={product.featured} />
        <section className={styles.productListSection}>
          <ProductList products={product.all} />
        </section>
      </main>
      <aside>
        {/* <CartPanel
          products={cart.products}
          subtotalAmount={cart.subtotal}
          dispatchCost={cart.dispatchCost}
        /> */}
      </aside>
    </div>
  );
}
