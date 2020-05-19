import React, { Component, createRef } from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalDiv = styled.div`
  padding: 16px;
  max-width: 480px;
  width: 100%;
  min-height: 320px;
  background-color: #fff;
`;

export default class Modal extends Component {
  backdropRef = createRef();

  handleKeyPress = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    this.props.onCloseModal();
  };

  handleBackdropClick = (e) => {
    console.log("this.backdropRef--->", this.backdropRef);
    const { current } = this.backdropRef;
    if (current && e.target !== current) return;
    this.props.onCloseModal();
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <Backdrop ref={this.backdropRef} onClick={this.handleBackdropClick}>
        <ModalDiv>{this.props.children}</ModalDiv>
      </Backdrop>
    );
  }
}
