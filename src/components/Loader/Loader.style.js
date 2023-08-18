import { Box, styled } from "@mui/material";

export const LoaderContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  height: "calc(100vh - 112px)",
}));

export const LoaderItem = styled(Box)(() => ({
  position: "absolute",
}));
