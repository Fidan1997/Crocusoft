import { Box, Typography } from "@mui/material";
import { NotFoundText } from "./NotFound.style";

export const NotFound = () => {
  return (
    <Box>
      <Typography variant="h1" fontWeight={700}>
        404
      </Typography>
      <NotFoundText variant="h5" sx={{}}>
        Page not found
      </NotFoundText>
    </Box>
  );
};

export default NotFound;
