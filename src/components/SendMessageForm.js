import React, { Component } from "react";

class SendMessageForm extends Component {
  state = {
    text: "",
  };

  onMessageSend = (e) => {
    e.preventDefault();

    const message = {
      created: Date.now(),
      text: this.state.text,
      author: this.props.uid,
      roomId: this.props.roomId,
      email: this.props.email,
    };

    this.props.sendMessage(message);

    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onMessageSend}>
          <div className="control is-half">
            <input
              type="text"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
              className="input"
              placeholder="Message here"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SendMessageForm;
