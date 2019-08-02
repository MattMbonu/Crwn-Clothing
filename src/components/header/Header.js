import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/selector/user.selectors";
import { selectHiddenCart } from "../../redux/selector/cart.selectors";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink
} from "./header.styles";

const Header = ({ user, isHidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>

        <OptionDiv>
          <a href="mailto:mcmbonu1@gmail.com">Contact</a>
        </OptionDiv>
        {user ? (
          <OptionDiv onClick={() => auth.signOut()} to="/login">
            Log Out
          </OptionDiv>
        ) : (
          <OptionLink to="/login">Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {isHidden ? "" : <CartDropdown />}
    </HeaderContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  isHidden: selectHiddenCart
});
export default connect(mapStateToProps)(Header);
