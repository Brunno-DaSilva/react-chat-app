import React, { Component } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";
import { auth } from "./fire";
import "bulma/css/bulma.css";

class App extends Component {
  state = {
    isLoggedIn: false,
    email: "",
    uid: null,
    room: {
      hh12: {
        title: "General",
        author: "bruno.dasilva@gmail.com",
        created: Date.now(),
      },
      jj34: {
        title: "Jokes",
        author: "bruno.dasilva@gmail.com",
        created: Date.now(),
      },
    },
    selectedRoom: "hh12",
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
    console.log(this.state);
    return (
      <div className="columns vh-100">
        <SideBar logout={this.logout} />
        <MainContainer>
          <SignUpForm onSignUp={this.handleSignUp} />
          <LoginForm onLogin={this.handleLogin} />
        </MainContainer>
      </div>
    );
  }
}

export default App;
