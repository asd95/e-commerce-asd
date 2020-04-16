import React, { Component } from "react";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

import "./sign-up.scss";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPass: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPass } = this.state;
    if (password !== confirmPass) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDoc(user, { displayName });
    } catch (e) {
      console.error(e);
    }

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPass: ""
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPass } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I don't have account</h2>
        <span>Sign Up with your email or password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Name"
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPass"
            value={confirmPass}
            label="Confirm Password"
            onChange={this.handleChange}
            required
          ></FormInput>
          <CustomButton type="submit"> Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
