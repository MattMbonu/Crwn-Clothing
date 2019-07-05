import React from "react";
import PropTypes from "prop-types";
import CustomButton from "../button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      {cartItems.map(item => (
        <CartItem item={item} />
      ))}
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired
};
const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });
export default connect(mapStateToProps)(CartDropdown);
