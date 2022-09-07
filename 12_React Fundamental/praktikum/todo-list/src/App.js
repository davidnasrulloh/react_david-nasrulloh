import TodoPage from './todo/TodoPage';
import { taskData } from "./taskData";

function App() {
  return (
    <TodoPage tasks={taskData} />
  );
}

export default App;
