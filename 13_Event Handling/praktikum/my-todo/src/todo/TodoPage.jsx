import Header from "./component/Header";
import { taskData } from "../taskData";
import { v4 as uuidv4 } from "uuid";
import styles from "./TodoPage.module.css";
import ListTask from "./component/ListTask";
import AddTask from "./component/AddTask";
import { Component } from "react";

class TodoPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: taskData
        }
    }

    hapusTask = (id) => {
        const newListTask = this.state.data.filter((item) => item.id !== id);

        this.setState({data : newListTask})
    }

    tambahTask = (newTugas) => {
        const newTask = {id: uuidv4(), ...newTugas};

        this.setState({data: [...this.state.data, newTask]});
    }

    ubahCheck(index) {
        const updatedData = [...this.state.data];
        updatedData[index].completed = !updatedData[index].completed;
        this.setState({
            data: updatedData
        });
    }

    render(){
        return (
            <div className="todoBody">
                <Header text="David Nasrulloh"/>
                <AddTask tambahTask={this.tambahTask} />
                {this.state.data.map((tugas, idx) => <ListTask key={idx} ubahCheck={() => this.ubahCheck(idx)} completed={tugas.completed} data={tugas} hapusTask={this.hapusTask}/> )}
            </div>
        )
    }
}

export default TodoPage;
