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
    this.props.onSignUp(this.state);
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="box">
        <h1 className="title is-4">Sign Up Form</h1>

        <form onSubmit={this.onSubmit}>
          <div className="field">
            <div className="control">
              <input
                placeholder="Email"
                type="text"
                value={this.state.email}
                onChange={this.updateEmail}
                className="input"
              ></input>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.updatePassword}
                className="input"
              ></input>
            </div>
          </div>
          <button
            placeholder="Username"
            type="submit"
            className="button is-fullwidth is-primary"
          >
            Creat User
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
