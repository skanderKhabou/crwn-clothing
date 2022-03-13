import React from "react";
import "./shop-page.styles.scss";

import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
// import SHOP_DATA from "./shop.data.js";

const ShopPage = ({ match }) => (
  // we can access to match history because the shop page is nested in the route so it passes match location and history into this component as props
  // match to display the actual path
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
