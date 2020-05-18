import React, { Component } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";
import ChatPanel from "./components/ChatPanel";
import { auth, messageRef } from "./fire";
import "bulma/css/bulma.css";

class App extends Component {
  state = {
    isLoggedIn: false,
    wantsToLogin: false,
    email: "",
    uid: null,
    rooms: {
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
    messages: {
      m100: {
        author: "asdasd65465as4da321sd",
        email: "bruno.dasilvab@gmail.com",
        roomId: "hh12",
        text: "Ciao bella, me piace parlare italiano",
        created: Date.now(),
      },
      m200: {
        author: "sdsdsdaad3d213321658asd",
        email: "test@test.com",
        roomId: "hh12",
        text: "Ciao bella, Me piace parlare italiano",
        created: Date.now(),
      },
    },
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { email, uid } = user;
        this.setState({
          email,
          uid,
          isLoggedIn: true,
        });
      }
    });
  }
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

  setRoom = (id) => {
    this.setState({
      selectedRoom: id,
    });
  };

  sendMessage = (message) => {
    console.log("App", message);
    messageRef.push(message);
  };

  render() {
    return (
      <div className="columns vh-100 is-gapless ">
        <SideBar
          logout={this.logout}
          rooms={this.state.rooms}
          selectedRoom={this.state.selectedRoom}
          setRoom={this.setRoom}
        />

        {this.state.isLoggedIn ? (
          <MainContainer>
            <ChatPanel
              messages={this.state.messages}
              roomId={this.state.selectedRoom}
              email={this.state.email}
              uid={this.state.uid}
              sendMessage={this.sendMessage}
            />
          </MainContainer>
        ) : (
          <MainContainer>
            {this.state.wantsToLogin ? (
              <LoginForm
                onLogin={this.handleLogin}
                goToSignUp={() => this.setState({ wantsToLogin: false })}
              />
            ) : (
              <SignUpForm
                onSignUp={this.handleSignUp}
                goToLogin={() => this.setState({ wantsToLogin: true })}
              />
            )}
          </MainContainer>
        )}
      </div>
    );
  }
}

export default App;
