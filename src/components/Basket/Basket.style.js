import { SwipeableDrawer, styled } from "@mui/material";

export const BasketDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  ".MuiPaper-root.MuiDrawer-paper": {
    width: "100%",
    maxWidth: 600,
    padding: theme.spacing(5),
    boxSizing: "border-box"
  },
}));
