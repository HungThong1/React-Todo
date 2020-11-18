import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const taskList = [
  {
    task: "todo",
    id: Date.now(),
    completed: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList,
    };
  }

  addTask = (e, item) => {
    e.preventDefault();
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      taskList: [...this.state.taskList, newTask],
    });
  };

  completeTask = (taskId) => {
    this.setState({
      taskList: this.state.taskList.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      taskList: this.state.taskList.filter((task) => !task.completed),
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h2>Todo List</h2>
        <TodoList
          taskList={this.state.taskList}
          completeTask={this.completeTask}
        />
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />        
      </div>
    );
  }
}

export default App;
