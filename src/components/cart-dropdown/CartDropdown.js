import React from "react";
import PropTypes from "prop-types";
import CustomButton from "../button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/selector/cart.selectors";
import { toggleCartHidden } from "../../redux/actions/cart";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
export default withRouter(
  connect(
    mapStateToProps,
    { toggleCartHidden }
  )(CartDropdown)
);
