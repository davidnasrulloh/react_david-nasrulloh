import Header from "./component/Header";
import { taskData } from "../taskData";
import { v4 as uuidv4 } from "uuid";
import styles from "./TodoPage.module.css";
import ListTask from "./component/ListTask";
import AddTask from "./component/AddTask";
import { useState } from "react";

function TodoPage (){

    const [data, setData] = useState(taskData);

    const hapusTask = (id) => {
        setData((oldData) => oldData.filter(tugas => {
            return tugas.id !== id;
        }))
    }

    const tambahTask = (newTugas) => {
        const newTask = {id: uuidv4(), ...newTugas};
        setData((oldData) => [...oldData, newTask]);
    }

    return (
        <div className={styles.todoBody}>
            <Header text="David Nasrulloh"/>
            <AddTask tambahTask={tambahTask} />
            {data.map((tugas) => <ListTask key={tugas.id} data={tugas} hapusTask={hapusTask}/> )}
        </div>
    );
}

export default TodoPage;
