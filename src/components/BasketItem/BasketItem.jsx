/* eslint-disable react/prop-types */
import { ButtonGroup, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { selectColor } from "./../../store/reducers/colorSlice";
import {
  setOpen,
  addBasket,
  removeBasket,
} from "./../../store/reducers/basketSlice";
import {
  ProductContainer,
  ProductInfo,
  ProductView,
  ProductCard,
  ProductImage,
} from "../Product.style";
import { ColorIcon } from "./../ColorPicker/ColorPicker.style";
import colorData from "./../../../data/colorData.json";

export const BasketItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { colorList } = useSelector(selectColor);

  const image = product.images.find(
    (image) => image.colorId === product.colorId
  ).image;

  const color =
    colorData[colorList.find((color) => color.id === product.colorId).id];

  return (
    <ProductContainer container columnSpacing={3} key={product.id}>
      <ProductView
        item
        xs={3}
        onClick={() => {
          dispatch(setOpen(false));
          navigate(`/${product.id}/${product.colorId}`);
        }}
      >
        <ProductCard size="small">
          <ProductImage image={image} size="small" />
        </ProductCard>
      </ProductView>
      <ProductInfo item xs={6}>
        <Typography variant="h6" fontWeight={600}>
          {product.name}
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          ${product.price}
        </Typography>
      </ProductInfo>
      <ProductInfo
        item
        xs={3}
        sx={{
          alignItems: "flex-end",
        }}
      >
        <ColorIcon color={color} />
        <ButtonGroup size="small" sx={{ mt: 3, mb: 1 }}>
          <Button onClick={() => dispatch(addBasket(product))}>
            <AddIcon />
          </Button>
          {<Button>{product.count}</Button>}
          {
            <Button onClick={() => dispatch(removeBasket(product))}>
              <RemoveIcon />
            </Button>
          }
        </ButtonGroup>
        <Typography variant="body1" fontWeight={600} textAlign="right">
          ${(product.price * product.count).toFixed(2)}
        </Typography>
      </ProductInfo>
    </ProductContainer>
  );
};

export default BasketItem;
