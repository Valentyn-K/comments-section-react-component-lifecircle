import React, { Component } from "react";
import faker from "faker";

export default class ChatEditor extends Component {
  state = { text: "" };

  handleSubmitForm = (e) => {
    e.preventDefault();

    this.props.onAddmessage(
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
        <form onSubmit={this.handleSubmitForm}>
          <textarea onChange={this.handleChange} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
