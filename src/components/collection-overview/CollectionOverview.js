import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopDataForPreview } from "../../redux/selector/shop.selectors";
import PreviewCollection from "../preview-collection/PreviewCollection";

import "./collections-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, title, items }) => (
        <PreviewCollection key={id} title={title} items={items} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopDataForPreview
});
export default connect(mapStateToProps)(CollectionOverview);
