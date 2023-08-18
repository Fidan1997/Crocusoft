/* eslint-disable react/prop-types */
import { useState } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ColorPicker } from "./../index";
import {
  ProductContainer,
  ProductInfo,
  ProductView,
  ProductCard,
  ProductImage,
  ProductDescription,
  ProductDescriptionItem,
  ProductButton,
} from "../Product.style";

export const ProductItem = ({ product }) => {
  const [activeColor, setActiveColor] = useState(product.colorIds[0]);

  const image = product.images.find(
    (image) => image.colorId === activeColor
  ).image;

  return (
    <ProductContainer container columnSpacing={6} key={product.id}>
      <ProductView item md={5} xs={12}>
        <ProductCard>
          <Link to={`/${product.id}/${activeColor}`}>
            <ProductImage image={image} />
          </Link>
          <ColorPicker
            {...{
              activeColor,
              setActiveColor,
              colorIds: product.colorIds,
            }}
          />
        </ProductCard>
      </ProductView>
      <ProductInfo item md={7} xs={12}>
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
        <ProductDescription>
          {product.descriptions.map((description) => (
            <ProductDescriptionItem key={description.id}>
              <Typography variant="h6" fontWeight={300}>
                {description.title}
              </Typography>
            </ProductDescriptionItem>
          ))}
        </ProductDescription>
        <Link to={`/${product.id}/${activeColor}`}>
          <ProductButton>
            <Typography variant="button">View details</Typography>
          </ProductButton>
        </Link>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductItem;
