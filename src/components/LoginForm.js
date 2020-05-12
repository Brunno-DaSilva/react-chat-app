import React, { Component } from "react";

class LoginForm extends Component {
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

  login = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Log In Form</h1>
        <form onSubmit={this.login}>
          <input
            placeholder="Email..."
            type="text"
            value={this.state.email}
            onChange={this.updateEmail}
          ></input>
          <input
            placeholder="Password..."
            type="password"
            value={this.state.password}
            onChange={this.updatePassword}
          ></input>
          <button placeholder="Username" type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
