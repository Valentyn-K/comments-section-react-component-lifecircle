import React, { Component } from "react";
import { v1 as uuidv1 } from "uuid";
import styled from "styled-components";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Modal from "../Modal/Modal";
import faker from "faker";
import Chat from "../Chat/Chat";

const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

export default class App extends Component {
  state = {
    //comments
    comments: [],
    //modal
    isModalOpen: false,
  };
  //comments
  addComment = (text) => {
    const comment = {
      id: uuidv1(),
      text,
      createdAt: new Date().toISOString(),
    };

    this.setState((prevState) => ({
      comments: [...prevState.comments, comment],
    }));
  };

  componentDidMount() {
    const persistedComments = localStorage.getItem("comments");
    if (persistedComments) {
      this.setState({
        comments: JSON.parse(persistedComments),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
    console.log("this.state:", this.state);

    if (prevState.comments !== this.state.comments) {
      localStorage.setItem("comments", JSON.stringify(this.state.comments));
    }
  }
  //*********/
  //modal
  openModal = () => this.setState({ isModalOpen: true }, console.log("OPEN"));

  closeModal = () =>
    this.setState({ isModalOpen: false }, console.log("CLOSE"));
  //***********/
  render() {
    return (
      <Container>
        <Chat />
        <button onClick={this.openModal}>OPEN MODAL</button>
        {this.state.isModalOpen && (
          <Modal onCloseModal={this.closeModal}>
            <h1>Modal content</h1>
            <p>{faker.lorem.sentence()}</p>
            <button onClick={this.closeModal}>CLOSE MODAL</button>
          </Modal>
        )}
        <VideoPlayer />
        <CommentForm onAddComment={this.addComment} />
        <CommentList items={this.state.comments} />
      </Container>
    );
  }
}
