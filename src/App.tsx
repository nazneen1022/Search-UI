import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDatafromJSON } from "./store/Source/actions";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import ProductList from "./Components/ProductList";

function App() {
  const dispatch = useDispatch();

  const [display, setDisplay] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchText = (value: string) => {
    setSearchText(value);
  };

  const handleDisplay = (value: boolean) => {
    if (value === false && searchText.length <= 2) setDisplay(value);
    else {
      if (searchText.length > 2) setDisplay(value);
    }
  };

  useEffect(() => {
    // set to display the dropdown list only when search string
    // is of minimun 2 characters
    if (searchText.length > 2) setDisplay(true);
    else setDisplay(false);
  }, [searchText]);

  useEffect(() => {
    dispatch(fetchDatafromJSON());
  }, [dispatch]);

  return (
    <div>
      <div className="navbar">
        <div className="title">Deal</div>
        <SearchBar
          show={handleDisplay}
          searchText={searchText}
          setSearchText={handleSearchText}
        />
        <div className="navbar-links"></div>
      </div>
      <div>{display && <ProductList searchText={searchText} />}</div>
    </div>
  );
}

export default App;
