import {
  Box,
  Grid,
  List,
  ListItem,
  ImageListItem,
  Button,
  styled,
} from "@mui/material";

const shouldForwardProp = (props) => !["isActive"].includes(props);

export const ProductContainer = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(8),
}));

export const ProductImgContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: theme.spacing(5),
}));

export const ProductImgListItem = styled(ImageListItem, {
  shouldForwardProp,
})(({ isActive, theme }) => ({
  padding: 0,
  overflow: "hidden",
  border: `1px solid ${isActive ? theme.palette.primary.main : "#ddd"}`,
  borderRadius: theme.spacing(1),
}));

export const ProductView = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: theme.spacing(5),
}));

export const ProductInfo = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  marginTop: theme.spacing(5),
}));

export const ProductCard = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  background: theme.palette.primary.light,
  borderRadius: theme.spacing(4),
}));

export const ProductImage = styled(Box)(({ image, height, theme }) => ({
  width: "100%",
  height: height ?? 360,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat no-repeat",
  backgroundPosition: "center center",
  backgroundImage: `url(${image})`,
  backgroundColor: theme.palette.primary.light,
  backgroundBlendMode: "multiply",
}));

export const ProductDescription = styled(List)(({ theme }) => ({
  listStyleType: "disc",
  padding: `${theme.spacing(5)} 0 ${theme.spacing(5)} ${theme.spacing(2)}`,
  marginBottom: theme.spacing(1),
}));

export const ProductDescriptionItem = styled(ListItem)(() => ({
  display: "list-item",
  py: 0,
}));

export const ProductButton = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(1.6)} ${theme.spacing(5)}`,
  borderRadius: theme.spacing(3.6),
  background: theme.palette.primary.main,
  border: `2px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.light,
  transition: "all 0.6s",
  "&:hover": {
    background: "transparent",
    color: theme.palette.primary.main,
  },
}));
