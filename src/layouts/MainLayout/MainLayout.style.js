import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  maxWidth: 900,
  margin: "0 auto",
  padding: theme.spacing(3),
}));
