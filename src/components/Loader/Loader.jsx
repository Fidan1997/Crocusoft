import { CircularProgress } from "@mui/material";
import { LoaderContainer, LoaderItem } from "./Loader.style";
import { logoUrl } from "./../../constants";

export const Loader = () => (
  <LoaderContainer>
    <LoaderItem
      height={60}
      component={"img"}
      src={
        logoUrl
      }
    />
    <LoaderItem>
      <CircularProgress size={96} />
    </LoaderItem>
  </LoaderContainer>
);

export default Loader;
