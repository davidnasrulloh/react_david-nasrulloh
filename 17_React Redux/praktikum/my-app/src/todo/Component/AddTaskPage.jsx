import React from "react";
import styles from "../assets/css/Style.module.css";
import { Button, Form, Stack, Spinner } from "react-bootstrap";
import Listask from "../Component/ListTask";

export const AddTaskPage = (
    {
        task,
        handleChangeFormTask,
        handleSubmit,
        handleDeleteTask,
        loading,
        handleChangeCheck,
        setReload
    }
) => {    

    return(
        <>
            <Stack className={styles.bungkus}>
                <Form className={styles.addTask}>
                    <Form.Control type="text" placeholder="Masukkan nama anda" name="title" value={task.title} onChange={(ev)=>handleChangeFormTask(ev)} /> 
                    <Form.Control type="hidden" name="completed" value="false" />
                    <Button className={styles.submit} onClick={handleSubmit}>Submit</Button>
                </Form>
            </Stack>
            {
                loading
                ?
                // <Spinner animation="grow"/>
                <Spinner animation="border" size="lg" role="status" variant="primary"/>
                :
                <div>
                    {
                        task.map((tugas)=>(
                        <Listask key={tugas.id} setReload={setReload} data={tugas} handleChangeCheck={handleChangeCheck} handleDeleteTask={handleDeleteTask} loading={loading}/>
                        ))
                    }
                </div>
            }
        </>

    );
}