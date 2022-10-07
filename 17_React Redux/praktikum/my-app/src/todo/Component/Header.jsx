import styles from "../assets/css/Style.module.css";
import { Sidebar } from "./Sidebar";
import "../assets/css/Sidebar.css";

function Header({text}) {
    return (
        // toogle
        <div className={styles.header}>
            <div className={styles.topHeader}>
                <Sidebar className="sidebar" />
                <div style={{ width: '100%' }}>
                    <h1>ToDo Yang Tidak Dikerjakan</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;