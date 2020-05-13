import React, { Component } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import SideBar from "./components/SideBar";
import { auth } from "./fire";
import "bulma/css/bulma.css";

class App extends Component {
  state = {
    isLoggedIn: false,
    email: "",
    uid: null,
  };

  handleSignUp = ({ email, password }) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => console.error(err));
  };

  handleLogin = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        const { email, uid } = user;
        this.setState({
          isLoggedIn: true,
          email: user.user.email,
          uid: user.user.uid,
        });
      })
      .catch((err) => console.error(err));
  };

  logout = (e) => {
    auth.signOut().then(() => {
      this.setState({
        email: "",
        uid: null,
        isLoggedIn: false,
      });
    });
  };
  render() {
    return (
      <div className="columns vh-100">
        <SideBar logout={this.logout} />
        <div className="column hero">
          <div className="hero-body">
            <div className="columns is-centered">
              <div className="column is-half">
                <SignUpForm onSignUp={this.handleSignUp} />
                <LoginForm onLogin={this.handleLogin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
