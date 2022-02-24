import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS_DATA from "./sections.data.js";
// import { Route, Switch, Link } from "react-router-dom";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
