import { Link } from "react-router-dom";
import { AppBar, Box, Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { selectBasket, setOpen } from "./../../store/reducers/basketSlice";
import { Basket } from "./../../components";
import { logoUrl } from "./../../constants";
import { NavbarToolbar } from "./Navbar.style";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector(selectBasket);

  return (
    <AppBar position="sticky" color="secondary">
      <NavbarToolbar>
        <Link to="/">
          <Box height={40} component={"img"} src={logoUrl} />
        </Link>
        <Button color="inherit" onClick={() => dispatch(setOpen(true))}>
          <Badge badgeContent={basket.length} color="primary">
            <ShoppingCartIcon color="primary" />
          </Badge>
        </Button>
        <Basket />
      </NavbarToolbar>
    </AppBar>
  );
};

export default Navbar;
