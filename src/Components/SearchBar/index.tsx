import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../store/Source/selectors";
import { setProducts } from "../../store/Products/actions";
import "../../App.css";

type Props = {
  searchText: string;
  setSearchText: (value: string) => void;
  show: (value: boolean) => void;
};

export default function SearchBar(props: Props) {
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
          size={70}
          placeholder="Find a product.."
          value={props.searchText}
          onChange={(event) => props.setSearchText(event.target.value)}
          onFocus={() => props.show(true)}
          onBlur={() => props.show(false)}
        />
      </div>
    </div>
  );
}
