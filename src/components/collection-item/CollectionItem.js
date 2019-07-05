import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../button/CustomButton";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/actions/cart";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addCartItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default connect(
  null,
  { addCartItem }
)(CollectionItem);
