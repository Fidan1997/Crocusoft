import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectProduct } from "./../store/reducers/productSlice";
import { ProductItem } from "../components";

const Products = () => {
  const { productList } = useSelector(selectProduct);

  return (
    <Box>
      {productList?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Box>
  );
};

export default Products;
