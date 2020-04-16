import React from "react";
import "./sign-in-and-sign-up.scss";
import SignIn from "../../sign-in";
import SignUp from "../../sign-up";

const SignInSignUp = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
