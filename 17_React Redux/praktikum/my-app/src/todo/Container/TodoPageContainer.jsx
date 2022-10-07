import Header from "../Component/Header";
import styles from "../assets/css/TodoPage.module.css";
import AddTaskPageContainer from "./AddTaskPageContainer";


const TodoPageContainer = () => {
    return (
        <div className={styles.todoBody}>
            <Header/>
            <hr />
            <AddTaskPageContainer/>
        </div>
    );
}

export default TodoPageContainer;
