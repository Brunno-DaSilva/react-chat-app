import React, { Component } from "react";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";

const ChatPanel = (props) => {
  return (
    <div>
      <MessageList messages={props.messages} />
      <SendMessageForm />
    </div>
  );
};

export default ChatPanel;
