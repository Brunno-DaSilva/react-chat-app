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
      <section className="columns" style={isCentered}>
        <div className="box column is-three-quarters">
          <h1 className="title is-4 dark-gray-text dark-gray-text">
            Log In Form
          </h1>

          <form onSubmit={this.login}>
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
              Log in
            </button>
          </form>
          <div className="btn-container">
            <a
              role="button"
              className="a-login-text"
              onClick={this.props.goToLogin}
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginForm;
const isCentered = {
  height: "80vh",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#506b63a2",
  borderRadius: "0.3rem",
};
