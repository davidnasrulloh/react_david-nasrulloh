import Header from "./component/Header";
import TodoCard from "./component/TodoCard";

export default function TodoPage({tasks}) {
    return (
        <>
            <Header text="David Nasrulloh"/>
            
            {tasks.map((task)=> <TodoCard task={task} /> )}
        </>
    );
}