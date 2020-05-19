import React, { Component } from "react";
// import styled from "styled-components";
import faker from "faker";

export default class CommentForm extends Component {
  state = {
    text: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddComment(
      this.state.text !== "" ? this.state.text : faker.lorem.sentence()
    );

    this.setState({ text: "" });
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleChange} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
