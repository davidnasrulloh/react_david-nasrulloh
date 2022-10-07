import TodoPageContainer from "./todo/Container/TodoPageContainer";
import { Routes, Route } from "react-router-dom";
import AboutApp from "./todo/Component/AboutApp";
import { AboutAuthor } from "./todo/Component/AboutAuthor";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<TodoPageContainer />} />
      <Route path="/about/about-app" exact element={<AboutApp />} />
      <Route path="/about/about-author" exact element={<AboutAuthor />} />
    </Routes>
  );
}

export default App;
