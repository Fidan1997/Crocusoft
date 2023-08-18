import { SwipeableDrawer, Box, styled } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

export const BasketDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  ".MuiPaper-root.MuiDrawer-paper": {
    width: "100%",
    maxWidth: 600,
    padding: theme.spacing(5),
    boxSizing: "border-box",
  },
}));

export const EmptyBasketContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

export const EmptyBasketIcon = styled(RemoveShoppingCartIcon)(({ theme }) => ({
  width: 80,
  height: 80,
  marginBottom: theme.spacing(2),
}));
