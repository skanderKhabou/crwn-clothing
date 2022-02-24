import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";
// with router nous permet d'accedeer a history de router nous rend un composant super puissant qui a accés aux attribut de router

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
    // here we pass the size to the class menu-item if there is a size attribute
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
