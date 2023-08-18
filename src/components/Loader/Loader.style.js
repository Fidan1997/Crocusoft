import { Box, styled } from "@mui/material";

const shouldForwardProp = (props) => !["fullHeight"].includes(props);

export const LoaderContainer = styled(Box, { shouldForwardProp })(
  ({ fullHeight }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: fullHeight ? `100vh` : `calc(100vh - 112px)`,
  })
);

export const LoaderItem = styled(Box)(() => ({
  position: "absolute",
}));
