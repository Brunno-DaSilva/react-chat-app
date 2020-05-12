import React, { Component } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import { auth } from "./fire";

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
      <div>
        <SignUpForm onSignUp={this.handleSignUp} />
        <LoginForm onLogin={this.handleLogin} />
        <button onClick={this.logout}>Logout</button>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        {this.state.isLoggedIn ? (
          <p>You {this.state.email} are logged in</p>
        ) : (
          <p>You are not logged in</p>
        )}
      </div>
    );
  }
}

export default App;
