import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProduct,
  getProduct,
  resetProduct,
} from "./../store/reducers/productSlice";
import { Loader, NotFound, ProductDetails } from "../components";

const Product = () => {
  const dispatch = useDispatch();
  let { id, colorId } = useParams();
  const { product, isLoading: productLoading } = useSelector(selectProduct);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(resetProduct());
    };
  }, [dispatch]);

  return (
    <Box>
      {productLoading ? (
        <Loader />
      ) : product ? (
        <ProductDetails
          key={product.id}
          product={product}
          colorId={Number(colorId)}
        />
      ) : (
        <NotFound />
      )}
    </Box>
  );
};

export default Product;
