import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitItem = (e) => {
    e.preventDefault();
    this.setState({ task: "" });
    this.props.addTask(e, this.state.task);
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          name="task"
          type="text"
          value={this.state.task}
          onChange={this.handleChanges}
        />
        <button>Add Task</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;