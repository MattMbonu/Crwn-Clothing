import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../button/CustomButton";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/actions/cart";
import { setAlert } from "../../redux/actions/alert";

const CollectionItem = ({ item, addCartItem, setAlert }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={() => {
          addCartItem(item);
          setAlert("Item Added!", "success", 1000);
        }}
        inverted
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default connect(
  null,
  { addCartItem, setAlert }
)(CollectionItem);
