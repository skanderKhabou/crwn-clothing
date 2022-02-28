import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignUp from "../../components/sign-up/sign-up.component";

import SignIn from "../../components/sign-in/sign-in.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    {" "}
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  </div>
);

export default SignInAndSignUpPage;
