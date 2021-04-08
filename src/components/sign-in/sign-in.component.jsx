import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import "./sign-in.styles.scss";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: "",
        password: "",
      }); //clear the form at the end.
    } catch (error) {
      alert(error.message);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <spam>Sign in with your email and password</spam>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            required
            type="email"
            label="Email"
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            value={this.state.password}
            required
            type="password"
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit" value="submit form">
              Sign in
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              type="button"
              isGoogleSignIn
            >
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
