import checked from "../assets/img/checkbox-checked-svgrepo-com.svg";
import unchecked from "../assets/img/checkbox-unchecked-svgrepo-com.svg";
import "../assets/css/ListTask.css"
import { todo } from "../../api";

const ListTask = (
    {
        data, 
        handleDeleteTask,
        setReload
    }
) => {
    let coret = data.completed;

    const handleChangeCheck = async (ev) => {
        ev.preventDefault();
        const idTask = ev.target.id;
        const nameTask = (data.title);
        const completedTask = data.completed;

        await todo.put(idTask, {
            title: nameTask,
            completed: !completedTask
        });
        setReload();
    }

    return (
        <div className="listBungkus">
            <div className="mb-2 cardItems w-100 card">
                <div className="card-body w-100">
                    <div className="d-flex">
                        <button className="checkItems">
                            <img  id={data.id} onClick={handleChangeCheck} src={coret ? checked : unchecked} alt=""/>
                        </button>
                        <div className="align-self-center titleItems">
                            <span id="title"  style={ coret ? { textDecoration: "line-through"} : {textDecoration: ""} }>{data.title}</span>
                        </div>
                        <div className="w-100 d-flex justify-content-end">
                            <button className="delete deleteItems" id={data.id} onClick={handleDeleteTask} type="submit">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListTask;