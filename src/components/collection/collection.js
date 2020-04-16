import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { selectShopCollections } from "../../redux/shop/shop.selectors";
import { selectCollections } from "../../redux/shop/shop.selectors";
import CollectionItem from "../collection-item";

import "./collection.scss";

const CollectionPage = ({ collection }) => {
  // const collectionItem = cartItems.find(item => item.routeName === collection);
  // const items = collectionItem.items.map(item => (
  //   <CollectionItem key={item.id} item={item} />
  // ));
  const { items, title } = collection;
  const collectionsItems = items.map(item => <CollectionItem key={item.id} item={item} />);
  return (
    <div className="collection-page">
      {/* <h2>{collectionItem.title}</h2> */}
      {/* {items} */}
      <h2 className="title">{title}</h2>
      <div className="items">{collectionsItems}</div>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectShopCollections
// });

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
