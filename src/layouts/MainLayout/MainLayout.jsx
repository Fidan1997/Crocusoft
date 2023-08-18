import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProduct,
  getProductList,
  reset as resetProductList,
} from "./../../store/reducers/productSlice";
import {
  selectColor,
  getColorList,
  reset as resetColorList,
} from "./../../store/reducers/colorSlice";
import { Loader, Navbar } from "../../components";
import { Container } from "./MainLayout.style";

export const MainLayout = () => {
  const dispatch = useDispatch();
  const { isLoading: colorLoading } = useSelector(selectColor);
  const { productList } = useSelector(selectProduct);
  const productLoading = productList === null;

  const isLoading = productLoading || colorLoading;

  useEffect(() => {
    dispatch(getProductList());
    dispatch(getColorList());
    return () => {
      dispatch(resetProductList());
      dispatch(resetColorList());
    };
  }, [dispatch]);

  return (
    <>
      <Navbar isLoading={isLoading} />
      <Container>{isLoading ? <Loader /> : <Outlet />}</Container>
    </>
  );
};

export default MainLayout;
