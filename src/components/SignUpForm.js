import React, { Component } from "react";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
  };

  updateEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  updatePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.onSignUp(email, password);
  };
  render() {
    return (
      <div>
        <h1>Sign Up Form</h1>

        <form onSubmit={this.onSubmit}>
          <input
            placeholder="Email"
            type="text"
            value={this.state.email}
            onChange={this.updateEmail}
          ></input>
          <input
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.updatePassword}
          ></input>
          <button placeholder="Username" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
