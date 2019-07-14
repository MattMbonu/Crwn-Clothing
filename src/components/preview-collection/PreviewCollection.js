import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/CollectionItem";
import "./collection-preview.styles.scss";

const PreviewCollection = ({ title, items, history }) => {
  return (
    <div
      onClick={() => history.push(`/shop/${title.toLowerCase()}`)}
      className="collection-preview"
    >
      <h1 className="title">
        {" "}
        <span className="title-text">{title.toUpperCase()}</span>{" "}
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(PreviewCollection);
