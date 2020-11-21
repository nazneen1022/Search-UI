import React from "react";
import { useSelector } from "react-redux";
import { Product } from "../../models/product";
import { getProducts } from "../../store/Products/selectors";

import "../../App.css";
import Item from "../Item";
type Props = {
  searchText: string;
};

export default function ProductList(props: Props) {
  const products = useSelector(getProducts);

  // Filtered products based on search term
  // Use this code in real-time scenario
  /*
  const filteredProducts = products.filter((product: Product) => {
    const productTitle = product.details.generalized_title.toLowerCase();
    return productTitle.indexOf(props.searchText.toLowerCase()) !== -1;
  });

  console.log("filteredProducts:", filteredProducts);
  */

  return (
    <div>
      {products && (
        <div className="search-items">
          {products.map((product: Product) => (
            <div className="card" key={product.details.id}>
              <Item productDetails={product.details} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
