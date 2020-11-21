import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../store/Source/selectors";
import { setProducts } from "../../store/Products/actions";
import "../../App.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const data = useSelector(getData);

  useEffect(() => {
    data.content && dispatch(setProducts(data.content.products));
  }, [data, dispatch]);

  return (
    <div>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          size={50}
          placeholder="Find a product.."
        />
      </div>
    </div>
  );
}
