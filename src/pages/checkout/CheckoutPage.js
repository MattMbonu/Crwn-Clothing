import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/selector/cart.selectors";
import StripeButton from "../../components/stripe-button/StripeButton";
import "./checkout.styles.scss";

const CheckoutPage = ({ items, total }) => {
  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </header>
      {items.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">TOTAL ${total}</div>
      <StripeButton price={total} />
      <div className="test-warning">
        *Please use the following test Credit Card for payments*
        <br />
        4242 4242 4242 4242 - Exp 01/20 - CVV: 123
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  total: selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);
