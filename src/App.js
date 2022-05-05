import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import {useState} from "react";

function App() {
    const [taskList, setTaskList] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const updateTaskList = () => {
        const newTaskList = [...taskList];  //Copy the original state
        const task = {
            id: taskList.length + 1, //THIS IS VERY LAZY! Be careful if the list shrinks, ID's can repeat!
            desc: taskInput,
            isDone: false
        }

        newTaskList.push(task);             //Mutate it
        setTaskList(newTaskList);           //Store it
        setTaskInput("");             //Store the other bit
    }

  return (
    <div>
       <TaskInput value={taskInput}
                  onChange={(e) => {setTaskInput(e.currentTarget.value)}}
                  updateTaskList={updateTaskList}/>
        <TaskList taskList={taskList}/>
    </div>
  );
}

export default App;
