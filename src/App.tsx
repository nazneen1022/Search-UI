import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDatafromJSON } from "./store/Source/actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDatafromJSON());
  }, [dispatch]);

  return (
    <div>
      <div className="navbar">
        <div className="title">Deal</div>

        <div className="navbar-links"></div>
      </div>
    </div>
  );
}

export default App;
