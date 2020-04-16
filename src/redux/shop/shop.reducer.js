import SHOP_DATA from "../../components/pages//shop-page/shop-data.js";

const initialState = {
  collections: SHOP_DATA
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
