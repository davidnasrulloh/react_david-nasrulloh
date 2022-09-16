// import React, { useState } from "react";
// import { taskData } from "./taskData";
import TodoPage from "./todo/TodoPage";

function App() {
  // // State hook - `useState`
  // const [newItem, setNewItem] = useState("");
  // const [items, setItems] = useState([]);

  // // Helper Function
  // function addItem() {
  //   if (!newItem) {
  //     alert("Masukkan task baru");
  //     return;
  //   }

  //   const item = {
  //     id: Math.floor(Math.random() * 1000),
  //     value: newItem,
  //   };

  //   setItems((oldData) => [...oldData, item]);
  //   setNewItem("");
  // }

  // function deleteItem(id) {
  //   const newArray = items.filter((item) => item.id !== id);
  //   setItems(newArray);
  // }

  return (
    <TodoPage />
  );
}

export default App;
