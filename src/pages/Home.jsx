import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, ProductsBlock, SortPopup } from "../components";
import { setSortCategory, setSortBy } from "../redux/actions/filter";
import { fetchProducts } from "../redux/actions/products";
import { addItemToCart } from "../redux/actions/cart";
import ProductsLoadingBlock from "../components/Products/ProductsLoadingBlock";

const caregoryNames = [
  "Saint Laurent",
  "Giorgio Armani",
  "Dior",
  "Versace",
  "Chanel",
];
const sortitems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];
function Home() {
  const items = useSelector(({ products }) => products.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ products }) => products.isLoaded);
  const { sortBy, category } = useSelector(({ filters }) => filters);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts(sortBy, category));
  }, [sortBy, category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setSortCategory(index));
  }, []);

  const onClickSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const addProductToCart = (obj) => {
    dispatch(addItemToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClick={onSelectCategory}
          items={caregoryNames}
        />

        <SortPopup
          activeSortType={sortBy.type}
          items={sortitems}
          onClickSortBy={onClickSortBy}
        />
      </div>
      <h2 className="content__title">Все товары</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => (
              <ProductsBlock
                onClickAddItem={addProductToCart}
                key={item.id}
                addedCount={
                  cartItems[item.id] && cartItems[item.id].items.length
                }
                {...item}
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <ProductsLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
