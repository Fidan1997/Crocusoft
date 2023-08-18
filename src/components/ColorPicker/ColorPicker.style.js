import { Box, RadioGroup, styled } from "@mui/material";

export const ColorIcon = styled(Box)(({ color }) => ({
  width: 28,
  height: 28,
  background: color,
  borderRadius: "50%",
}));

export const ColorCheckedIcon = styled(Box)(({ color }) => ({
  width: 24,
  height: 24,
  background: color,
  borderRadius: "50%",
  border: "2px solid #fff",
  outline: `2px solid ${color}`,
}));

export const ColorContainer = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(3)} 0`,
}));

export const ColorGroup = styled(RadioGroup)(() => ({
  justifyContent: "center",
}));
