import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck, faLock } from "@fortawesome/free-solid-svg-icons";

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
              <div className="control has-icons-left has-icons-right">
                <input
                  placeholder="Email"
                  type="text"
                  value={this.state.email}
                  onChange={this.updateEmail}
                  className="input"
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="icon is-small is-right">
                  {/* <i className="fas fa-check"></i> */}
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              </div>
            </div>

            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.updatePassword}
                  className="input"
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <span className="icon is-small is-right">
                  {/* <i className="fas fa-check"></i> */}
                  <FontAwesomeIcon icon={faCheck} />
                </span>
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
              onClick={this.props.goToSignUp}
            >
              Don't have an account? Sign Up
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
