import React from "react";
import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";

import { ReactComponent as Logo } from "../../assets/google.svg";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  // componentDidMount() {
  //   console.log("i m mounted");
  // }

  // componentDidUpdate() {
  //   console.log("Changed");
  // }

  // componentWillUnmount() {
  //   console.log("I Will be Removed Bye");
  // }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    // this.setState((prev)=>({...prev,name:value}))
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="title">Sign in with your email & password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              {" "}
              Sign in
            </CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign in with{" "}
              <span className="logo-container">
                <Logo className="logo" />
              </span>
              oogle
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
