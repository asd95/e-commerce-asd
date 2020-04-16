import React from "react";
import CollectionOverview from "../../collection-overview";
import CollectionPage from "../../collection";
import { Route, Switch } from "react-router-dom";

import "./shop-page.scss";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Switch>
        <Route path={`${match.path}`} exact component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          render={({ match }) => {
            const { collectionId } = match.params;
            return <CollectionPage collectionId={collectionId} />;
          }}
        />
      </Switch>
    </div>
  );
};

export default ShopPage;
