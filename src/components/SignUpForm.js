import React, { Component } from "react";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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

  updateFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  updateLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>Sign Up Form</h1>

        <form onSubmit={this.props.onSignUp}>
          <input
            placeholder="First Name"
            type="text"
            value={this.state.firstName}
            onChange={this.updateFirstName}
          ></input>

          <input
            placeholder="Last Name"
            type="text"
            value={this.state.lastName}
            onChange={this.updateLastName}
          ></input>

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
