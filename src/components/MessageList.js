import React from "react";

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

export default MessageList;
