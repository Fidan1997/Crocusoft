import { Box, styled } from "@mui/material";

export const LoaderContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  height: "100vh"
}));

export const LoaderItem = styled(Box)(() => ({
  position: "absolute",
}));
