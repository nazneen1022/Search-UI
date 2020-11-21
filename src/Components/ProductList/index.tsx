import React from "react";
import { Product } from "../../models/product";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/Products/selectors";

import "../../App.css";
import Item from "../Item";

export default function ProductList() {
  const products = useSelector(getProducts);
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
