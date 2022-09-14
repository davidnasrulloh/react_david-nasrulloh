import React, { useState } from "react";
import styles from "./ListTask.module.css";

function AddTask(props) {
    
    const [data, setData] = useState({
        title: "",
        completed: "false",
    })

    const onChange = e => {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        const formIsNotEmpty = data.title;

        if(formIsNotEmpty){
            const newTugas = { 
                title: data.title,
                // completed: data.completed,
            }

            props.tambahTask(newTugas);
            setData({
                title:"",
                completed: "false"
            })
        } else {
            alert("task masih ada yang kosong");
        }
    }

    return(
        <div onSubmit={()=>{}} className={styles.bungkus}>
            <div className={styles.addTask}>
                <input type="text" placeholder="Masukkan nama anda" name="title" value={data.title} onChange={onChange} /> 
                <input type="hidden" name="completed" value="false" />
                <button onClick={handleSubmit}>submit</button>
            </div>
        </div>
    );
}

export default AddTask;