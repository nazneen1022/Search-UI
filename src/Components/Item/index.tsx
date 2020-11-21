import React from "react";
import { Details } from "../../models/product";
import "../../App.css";

type Props = {
  productDetails: Details;
};

export default function Item(props: Props) {
  console.log("props:", props);
  return <div className="content">test</div>;
}
