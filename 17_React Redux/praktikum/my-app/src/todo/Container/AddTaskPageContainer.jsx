import React, { useState, useEffect } from "react";
import { AddTaskPage } from "../Component/AddTaskPage";
import { todo, getTodo } from "../../api";


const AddTaskPageContainer = () => {
    
    const [task, setTask] = useState([]);
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState({
        title: "",
        completed: "false",
    })

    const setReload = () => {
        setLoading(true);
    }

    const handleChangeFormTask = (ev) => {
        setData({
            ...data, 
            [ev.target.name]: ev.target.value
        })
    }

    useEffect(()=>{
        getTodo()
            .then((res)=> {
                setTask(res);
                console.log(task);
                setLoading(false);
            })
            .catch((err)=>{
                console.log(err);
            });
    },[loading]);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const formIsNotEmpty = data.title;

        if(formIsNotEmpty){
            todo.post("/",{
                title: data.title
            })
        } else {
            alert("task masih ada yang kosong");
        }

        setLoading(true);
    }

    const handleDeleteTask = async (ev) => {
        ev.preventDefault();
        const idTask = ev.target.id;
        await todo.delete(idTask);
        setLoading(true);
    }

    

    return(
        <div>
            <AddTaskPage task={task} loading={loading} setReload={setReload} handleDeleteTask={handleDeleteTask} handleSubmit={handleSubmit} handleChangeFormTask={handleChangeFormTask}/>
        </div>    
    );
}

export default AddTaskPageContainer;