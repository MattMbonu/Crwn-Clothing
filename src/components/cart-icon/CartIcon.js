import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/actions/cart";
import { selectCartIemsCount } from "../../redux/selector/cart.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItems}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartIemsCount
});

export default connect(
  mapStateToProps,
  { toggleCartHidden }
)(CartIcon);
