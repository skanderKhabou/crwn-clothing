import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

// import SHOP_DATA from "./shop.data.js";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

export default ShopPage;
