/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import {
  ImageList,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectColor } from "./../../store/reducers/colorSlice";
import { setOpen, addBasket } from "./../../store/reducers/basketSlice";
import { ColorPicker } from "../index";
import {
  ProductContainer,
  ProductImgContainer,
  ProductImgListItem,
  ProductInfo,
  ProductView,
  ProductCard,
  ProductImage,
  ProductDescription,
  ProductDescriptionItem,
  ProductButton,
} from "../Product.style";

export const ProductDetails = ({ product, colorId }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { colorList } = useSelector(selectColor);
  const [activeImage, setActiveImage] = useState(null);

  const isMediumOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const images = useMemo(
    () => product.images.filter((image) => image.colorId === colorId),
    [colorId, product.images]
  );

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  return (
    <ProductContainer container columnSpacing={6} key={product.id}>
      <ProductImgContainer item md={2} xs={12}>
        <ImageList
          gap={16}
          sx={{ m: 0 }}
          {...(isMediumOrLarger ? { cols: 1 } : { cols: 5, rows: 1 })}
        >
          {images.map((item) => (
            <ProductImgListItem
              isActive={item.id === activeImage?.id}
              component={Button}
              key={item.id}
              onClick={() => setActiveImage(item)}
            >
              <img src={item.image} alt={`image${item.id}`} />
            </ProductImgListItem>
          ))}
        </ImageList>
      </ProductImgContainer>
      <ProductView item md={10} xs={12}>
        <ProductCard>
          <Link to={`/${product.id}/${colorId}`}>
            <ProductImage image={activeImage?.image} />
          </Link>
        </ProductCard>
      </ProductView>
      <ProductInfo item xs={12}>
        {product.isNew && (
          <Typography variant="button" fontWeight={600} color={"#e01e3c"}>
            NEW
          </Typography>
        )}
        <Typography variant="h4" fontWeight={600}>
          {product.name}
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          ${product.price}
        </Typography>
        <ColorPicker
          {...{
            activeColor: colorId,
            setActiveColor: (color) => navigate(`/${product.id}/${color}`),
            colorIds: product.colorIds,
          }}
        />
        <Typography variant="h6">
          Color:{" "}
          <Typography component="span" variant="h6" fontWeight={600}>
            {colorList.find((color) => color.id === colorId)?.title}
          </Typography>
        </Typography>
        <ProductDescription>
          {product.descriptions.map((description) => (
            <ProductDescriptionItem key={description.id}>
              <Typography variant="h6" fontWeight={300}>
                {description.title}
              </Typography>
            </ProductDescriptionItem>
          ))}
        </ProductDescription>
        <ProductButton
          onClick={() => {
            dispatch(addBasket({ ...product, colorId }));
            dispatch(setOpen(true));
          }}
        >
          <AppleIcon />
          <Typography variant="button" ml={2}>
            Add to bag
          </Typography>
        </ProductButton>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductDetails;
