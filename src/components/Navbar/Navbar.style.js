import { Toolbar, styled } from "@mui/material";

export const NavbarToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: 1320,
  width: "100%",
  margin: "0 auto",
  boxSizing: "border-box"
}));
