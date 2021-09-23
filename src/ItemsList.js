import React from "react";
import Items from "./Items";
import "./ItemsList.css";

const ItemsList = ({ addedItems, removeItem }) => {
  return (
    <ul className="todo-list">
      {addedItems.map(item => (
        <Items
          key={Math.random() * 100}
          todoItem={item}
          removeItem={removeItem}
          item={item}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
