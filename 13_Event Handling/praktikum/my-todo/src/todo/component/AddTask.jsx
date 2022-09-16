import React, { Component, useState } from "react";
import styles from "./ListTask.module.css";

class AddTask extends Component {
    
    state = {
        title: "",
        completed: false
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = this.state.title;

        if(formIsNotEmpty){
            const newTugas = { 
                title: this.state.title,
                completed: this.state.completed,
            }

            this.props.tambahTask(newTugas);
            this.setState({
                title:"",
                completed: false
            })
        } else {
            alert("task masih ada yang kosong");
        }
    }

    render(){
        return(
            <div onSubmit={()=>{}} className={styles.bungkus}>
                <div className={styles.addTask}>
                    <input type="text" placeholder="Masukkan nama anda" name="title" value={this.state.title} onChange={this.onChange} /> 
                    <input type="hidden" name="completed" value="false" />
                    <button onClick={this.handleSubmit}>submit</button>
                </div>
            </div>
        );
    }
}

export default AddTask;