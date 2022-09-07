import styles from "./TodoCard.module.css";

export default function TodoCard({task}) {
    const coret = task.completed;
    
    return(
        <div className={styles.card}>
            {
                coret ? (
                    <p style={{ textDecoration: "line-through" }} >{task.title}</p>
                ) : (
                    <p>{task.title}</p>
                )
            }
            
        </div>
    );
}