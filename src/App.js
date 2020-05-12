import React, { Component } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import { auth } from "./fire";

class App extends Component {
  state = {
    isLoggedIn: false,
    email: "",
  };

  handleSignUp = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => console.error(err));
  };

  handleLogin = (email) => {
    this.setState({
      isLoggedIn: true,
      email,
    });
    console.log("App", this.state);
  };

  render() {
    return (
      <div>
        <SignUpForm onSignUp={this.handleSignUp} />
        <LoginForm onLogin={this.handleLogin} />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
