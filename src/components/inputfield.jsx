import React, { Component } from "react";

class Inputfield extends Component {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
  };

  render() {
    return (
      <form className="inputfield" onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" placeholder="Habit" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default Inputfield;
