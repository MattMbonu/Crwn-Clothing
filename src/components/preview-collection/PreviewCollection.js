import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./collection-preview.styles.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherprops }) => (
            <CollectionItem key={id} {...otherprops} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
