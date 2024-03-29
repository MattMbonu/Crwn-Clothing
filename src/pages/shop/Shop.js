import React from "react";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={Collection}
      />
    </div>
  );
};

export default Shop;
