import React, { Component, createRef } from "react";
import styled from "styled-components";

const List = styled.ul`
  height: 480px;
  border: 2px solid black;
  overflow: auto;
`;

const ListItem = styled.li`
  border: 2px solid black;
`;

export default class MessageFeed extends Component {
  listRef = createRef();

  state = {};

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.items !== this.props.items) {
      const { scrollHeight, scrollTop, offsetHeight } = this.listRef.current;
      const distanceToBottom = scrollHeight - (scrollTop + offsetHeight);
      return { shouldScroll: distanceToBottom < 10 };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot && snapshot.shouldScroll) {
      this.listRef.current.scrollTop = this.listRef.current.scrollHeight;
    }
  }

  render() {
    return (
      <List ref={this.listRef}>
        {this.props.items.map((item) => (
          <ListItem key={item.id}>
            <p>{item.text}</p>
            <p>
              <b>Posted at:</b>
              {new Date(item.createdAt).toLocaleString()}
            </p>
          </ListItem>
        ))}
      </List>
    );
  }
}
