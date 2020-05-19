import React, { Component } from "react";
import { findByLabelText } from "@testing-library/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck, faLock } from "@fortawesome/free-solid-svg-icons";
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
      <section className="columns" style={isCentered}>
        <div className="box column is-three-quarters">
          <h1 className="title is-4 dark-gray-text">Sign Up Form</h1>
          <form onSubmit={this.onSubmit}>
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
                  <FontAwesomeIcon
                    style={
                      this.state.password
                        ? { color: "#00d1b2" }
                        : { color: "tomato" }
                    }
                    icon={faEnvelope}
                  />
                </span>
                <span className="icon is-small is-right">
                  {/* <i className="fas fa-check"></i> */}
                  <FontAwesomeIcon
                    style={
                      this.state.password ? { color: "#00d1b2" } : { color: "" }
                    }
                    icon={faCheck}
                  />
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
                  <FontAwesomeIcon
                    style={
                      this.state.password
                        ? { color: "#00d1b2" }
                        : { color: "tomato" }
                    }
                    icon={faLock}
                  />
                </span>
                <span className="icon is-small is-right">
                  {/* <i className="fas fa-check"></i> */}
                  <FontAwesomeIcon
                    style={
                      this.state.password ? { color: "#00d1b2" } : { color: "" }
                    }
                    icon={faCheck}
                  />
                </span>
              </div>
            </div>
            <button
              placeholder="Username"
              type="submit"
              className="button is-fullwidth button-blue"
            >
              Creat User
            </button>
          </form>

          <div className="btn-container">
            <a
              role="button"
              className="a-login-text"
              onClick={this.props.goToLogin}
            >
              Already a member ? Login
            </a>
          </div>
        </div>
      </section>
    );
  }
}

const isCentered = {
  height: "80vh",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#0325413d",
  borderRadius: "0.3rem",
};

export default SignUpForm;
