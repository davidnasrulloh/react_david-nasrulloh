import styles from "./ListTask.module.css";

function Header({text}) {
    return (
        <div className={styles.header}>
            <h1>todos {text}</h1>
        </div>
    );
}

export default Header;