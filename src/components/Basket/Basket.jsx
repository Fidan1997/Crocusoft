/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "./../../store/reducers/productSlice";
import { selectBasket, setOpen } from "./../../store/reducers/basketSlice";
import { BasketItem } from "../../components";
import { BasketDrawer } from "./Basket.style";

export const Basket = () => {
  const dispatch = useDispatch();
  const { open, basket } = useSelector(selectBasket);
  const { productList } = useSelector(selectProduct);

  const basketProductList = basket.map((basketItem) => ({
    ...basketItem,
    ...productList.find((product) => product.id === basketItem.id),
  }));

  const totalPrice = useMemo(
    () =>
      basketProductList
        .reduce((total, item) => total + item.count * item.price, 0)
        .toFixed(2),
    [basketProductList]
  );

  return (
    <BasketDrawer
      anchor={"right"}
      open={open}
      onClose={() => dispatch(setOpen(false))}
      onOpen={() => dispatch(setOpen(true))}
    >
      <Typography variant="h4" fontWeight={600}>
        Your bag total is ${totalPrice}
      </Typography>
      {basketProductList.map((product) => (
        <BasketItem
          key={`${product.id}-${product.colorId}`}
          product={product}
        />
      ))}
    </BasketDrawer>
  );
};

export default Basket;
