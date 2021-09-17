import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div className="list-wrapper">
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
