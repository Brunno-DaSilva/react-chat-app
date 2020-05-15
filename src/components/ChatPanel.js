import React, { Component } from "react";

class SendMessageForm extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>Here is the form</h1>
        </form>
      </div>
    );
  }
}

const Message = ({ message }) => {
  return <li>{message.text}</li>;
};

const MessageList = ({ messages }) => (
  <ul>
    {Object.keys(messages)
      .map((messageKey) => ({
        ...messages[messageKey],
        id: messageKey,
      }))
      .map((message) => (
        <Message key={message.id} message={message} />
      ))}
  </ul>
);

const ChatPanel = (props) => {
  return (
    <div>
      <MessageList messages={props.messages} />
      <SendMessageForm />
    </div>
  );
};

export default ChatPanel;
