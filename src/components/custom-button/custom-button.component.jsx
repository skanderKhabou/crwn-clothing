import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    // with the interpolation we make our style dynamic and also we make custom button class as defaul for the css
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
