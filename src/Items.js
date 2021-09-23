import React from "react";
import "./Items.css";

const Items = ({ todoItem, removeItem, item }) => {
  return (
    <li className="todo-item">
      <p>{todoItem}</p>
      <button
        onClick={() => {
          removeItem(item);
        }}
      >
        &#215;
      </button>
    </li>
  );
};

export default Items;
