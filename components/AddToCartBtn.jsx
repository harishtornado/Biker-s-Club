"use client";

import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "./ui/use-toast";

const AddToCartBtn = ({
  btnStyles,
  text,
  icon,
  name,
  currency,
  description,
  price,
  id,
  images,
  price_id,
}) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

  const bike = {
    id,
    currency,
    name,
    description,
    price,
    images,
    price_id,
  };
  return (
    <button
      className={btnStyles}
      onClick={() => {
        addItem(bike);
        toast({
          title: `${name} has been added to the Cart`,
        });
      }}
    >
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
