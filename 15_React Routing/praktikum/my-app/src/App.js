import TodoPage from "./todo/TodoPage";
import { Routes, Route } from "react-router-dom";
import AboutApp from "./Component/AboutApp";
import { AboutAuthor } from "./Component/AboutAuthor";

function App() {
  // State hook - `useState`
  // const [newItem, setNewItem] = useState("");
  // const [items, setItems] = useState([]);

  // Helper Function
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

  return(
    <Routes>u
      <Route path="/" exact element={<TodoPage />} />
      <Route path="/about/about-app" exact element={<AboutApp />} />
      <Route path="/about/about-author" exact element={<AboutAuthor />} />
    </Routes>
  );
}

export default App;
