import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import {useState} from "react";

function App() {
    const [taskList, setTaskList] = useState([]);
    const [newTaskDesc, setNewTaskDesc] = useState("");
    const [nextId, setNextId] = useState(1);

    const addATask = () => {
        const newTaskList = [...taskList];  //Copy the original state
        const task = {
            id: nextId,
            desc: newTaskDesc,
            isDone: false
        }

        newTaskList.push(task);             //Mutate it
        setTaskList(newTaskList);           //Store it
        setNewTaskDesc("");             //Reset the task inputter
        setNextId(nextId + 1);        //Increment the next ID
    }

    const updateTaskList = (updatedTask) => {
        const newTaskList = [...taskList];
        for (let i = 0; i < newTaskList.length; i++) {
            if (newTaskList[i].id === updatedTask.id ) {
                newTaskList[i] = updatedTask;
                break;
            }
        }

        setTaskList(newTaskList);
    }

    const deleteTask = (task) => {
        const newTaskList = taskList.filter( e => e.id !== task.id);
        setTaskList(newTaskList);
    }

  return (
    <div>
       <TaskInput value={newTaskDesc}
                  onChange={(e) => {setNewTaskDesc(e.currentTarget.value)}}
                  buttonAction={addATask}
                  label={"Add Task"}
       />
        <TaskList taskList={taskList} updateTaskList={updateTaskList} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
