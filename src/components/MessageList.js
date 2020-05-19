import React from "react";
import moment from "moment";

const Message = ({ message }) => {
  return (
    <li>
      <div className="columns">
        <p className="column is-three-quarters">{message.text}</p>

        <div className="column">
          <p className="is-light">
            {message.email} {moment(message.created).format("h:mm:a")}
          </p>
        </div>
      </div>
    </li>
  );
};

const StyleMessageBox = {
  height: "80vh",
};

const MessageList = ({ messages }) => (
  <ul id="room-ul" style={StyleMessageBox}>
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
