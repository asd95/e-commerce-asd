import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors.js";

import CollectionPreview from '../collection-preview';
import "./collection-overview.scss";

const CollectionOverview = ({ collections }) => {
  const items = collections.map(({ id, ...props }) => {
    return <CollectionPreview key={id} {...props} />;
  });
  return <div className="collection-overview">{items}</div>;
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
