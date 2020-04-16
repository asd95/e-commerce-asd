import React from "react";
import "./custom-button.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...restProps }) => {
  const isGoogleSignInStyle = isGoogleSignIn ? "google-sign-in" : "";
  const invertedStyle = inverted ? "inverted" : "";
  return (
    <button
      className={`${invertedStyle} ${isGoogleSignInStyle} custom-button`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
