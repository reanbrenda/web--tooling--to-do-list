import React from 'react';

function TodoItem({ todo }) {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.text}</span>
    </div>
  );
}

export default TodoItem;