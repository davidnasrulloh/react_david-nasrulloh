import Header from "./component/Header";
// import { taskData } from "../taskData";
import styles from "./TodoPage.module.css";
import ListTask from "./component/ListTask";

function TodoPage ({tasks}){
    return (
        <div className={styles.todoBody}>
            <Header text="David Nasrulloh"/>
            {tasks.map((task) => <ListTask task={task} /> )}
        </div>
    );
}

export default TodoPage;
