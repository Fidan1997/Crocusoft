import { Typography, styled } from "@mui/material";

export const NotFoundText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  fontWeight: 600,
  textTransform: "uppercase",
  background: (theme) => theme.palette.primary.main,
  color: (theme) => theme.palette.primary.light,
}));
