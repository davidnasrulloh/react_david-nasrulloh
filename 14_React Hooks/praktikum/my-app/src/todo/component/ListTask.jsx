import styles from "./ListTask.module.css";
import checked from "../img/checkbox-checked-svgrepo-com.svg";
import unchecked from "../img/checkbox-unchecked-svgrepo-com.svg";

function ListTask({task}) {
    const coret = task.completed;

    return (
        <div className={styles.container}>
            <div className={styles.containerCard}>
            {
                coret ? (
                    <div className={styles.card}>
                        <img src={checked} alt="" />
                        <p style={{ textDecoration: "line-through" }} >{task.title}</p>
                        <button>delete</button>
                    </div>
                ) : (
                    <div className={styles.card}>
                        <img src={unchecked} alt="" />
                        <p>{task.title}</p>
                        <button>delete</button>
                    </div>
                )
            }
        </div>
        </div>
    );
}

export default ListTask;