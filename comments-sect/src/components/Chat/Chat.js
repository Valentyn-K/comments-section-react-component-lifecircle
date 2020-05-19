import React, { Component } from "react";
import styled from "styled-components";
import { v1 as uuidv1 } from "uuid";
import ChatEditor from "./ChatEditor";
import MessageFeed from "./MessageFeed";

const ChatContainer = styled.div`
  width: 640px;
  margin: 0 auto;
`;

export default class Chat extends Component {
  state = { messages: [] };

  addMessages = (text) => {
    const message = {
      id: uuidv1(),
      text,
      createdAt: new Date().toISOString(),
    };

    this.setState((prevState) => ({
      messages: [...prevState.messages, message],
    }));
  };

  render() {
    return (
      <ChatContainer>
        <ChatEditor onAddmessage={this.addMessages} />
        <MessageFeed items={this.state.messages} />
      </ChatContainer>
    );
  }
}
