import styles from "../assets/css/ListTask.module.css";
import checked from "../assets/img/checkbox-checked-svgrepo-com.svg";
import unchecked from "../assets/img/checkbox-unchecked-svgrepo-com.svg";
// import { useState } from "react";

const ListTask = ({data, hapusTask, ubahCheck}) => {
    let coret = data.completed;

    return (
        <div className={styles.container}>
            <div className={styles.containerCard}>
                <div className={styles.card}>
                    <button>
                        <img id="myCheck" onClick={ubahCheck} src={coret ? checked : unchecked} alt="" />
                    </button>
                    <p id="title" style={ coret ? { textDecoration: "line-through"} : {textDecoration: ""} }>{data.title}</p>
                    <button onClick={()=>{hapusTask(data.id)}} className={styles.delete}>delete</button>
                </div>
            </div>
        </div>
    );
}

export default ListTask;