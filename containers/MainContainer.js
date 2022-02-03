import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainHeader from "@/components/mainHeader/MainHeader";
import MainHero from "@/components/mainHero/MainHero";
import ProductCategory from "@/components/productCategory/ProductCategory";
import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";
import ProductList from "@/components/productList/ProductList";
import CartPanel from "@/components/cartPanel/CartPanel";
import { fetchAllProductsAction } from "@/store/product/productActions";
import { fetchAllCategoriesAction } from "@/store/category/categoryActions";
import { updateSubtotalAmount } from "@/store/cart/cartActions";

import styles from "./main.module.scss";

export default function MainContainer() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const product = useSelector((state) => state.product);
  const category = useSelector((state) => state.category);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchAllProductsAction());
    dispatch(fetchAllCategoriesAction());
  }, []);

  useEffect(() => {
    dispatch(updateSubtotalAmount(cart.products));
  }, [cart.products]);

  const handleClickCategory = (category) => {
    setSelectedCategory(category.type);
  };

  return (
    <div>
      <main>
        <MainHeader />
        <MainHero />
        <section className={styles.productCategorySection}>
          <ProductCategory
            categories={category.all}
            onClickCategory={handleClickCategory}
          />
        </section>
        <FeaturedProducts products={product.featured} />
        <section className={styles.productListSection}>
          <ProductList products={product.all} category={selectedCategory} />
        </section>
      </main>
      <aside>
        <CartPanel
          products={cart.products}
          subtotalAmount={cart.subtotalAmount}
          dispatchCost={cart.dispatchCost}
        />
      </aside>
    </div>
  );
}
