import React from "react";
import { Details } from "../../models/product";
import "../../App.css";

type Props = {
  productDetails: Details;
};

export default function Item(props: Props) {
  return (
    <div className="content">
      {props && (
        <a href={props.productDetails.url}>
          <img src={props.productDetails.image} alt="noimage" />
          <p>
            {props.productDetails.generalized_title}
            <br />
            <span>{props.productDetails.brand_name}</span>
          </p>
        </a>
      )}
    </div>
  );
}
