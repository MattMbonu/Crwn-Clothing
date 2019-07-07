import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  removeSingleItem
} from "../../redux/actions/cart";
import "./checkout-item.styles.scss";

const CheckoutItem = ({
  item,
  addCartItem,
  removeCartItem,
  removeSingleItem
}) => {
  const { name, imageUrl, price, quantity, id } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => removeSingleItem(item)}>
          &#10094;
        </div>
        <span className="value"> {quantity} </span>
        <div className="arrow" onClick={() => addCartItem(item)}>
          &#10095;
        </div>
      </span>

      <div className="remove-button" onClick={() => removeCartItem(id)}>
        &#10007;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  item: PropTypes.object.isRequired,
  addCartItem: PropTypes.func.isRequired,
  removeCartItem: PropTypes.func.isRequired,
  removeSingleItem: PropTypes.func.isRequired
};

export default connect(
  null,
  { addCartItem, removeCartItem, removeSingleItem }
)(CheckoutItem);
