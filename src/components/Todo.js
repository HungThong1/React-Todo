import React from "react";
import "./Todo.css";

const Todo = (props) => {
  return (
    <div
      className={`task${props.item.completed ? " complete" : ""}`}
      onClick={() => props.completeTask(props.item.id)}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;