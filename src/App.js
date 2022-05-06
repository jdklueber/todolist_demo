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
        setNewTaskDesc("");            //Reset the task inputter
        setNextId(nextId + 1);         //Increment the next ID
    }

    const updateATask = (updatedTask) => {
        const newTaskList = [...taskList];                  //Copy it
        for (let i = 0; i < newTaskList.length; i++) {      //Find the task
            if (newTaskList[i].id === updatedTask.id ) {
                newTaskList[i] = updatedTask;               //Replace with the new one
                break;                                      //Exit the for loop
            }
        }

        setTaskList(newTaskList);                           //Update the state
    }

    const deleteTask = (task) => {
        const newTaskList = taskList.filter( e => e.id !== task.id);  //Filter out the deleted task
        setTaskList(newTaskList);                                     //Update the state
    }

  return (
    <div>
       <TaskInput value={newTaskDesc}
                  onChange={(e) => {setNewTaskDesc(e.currentTarget.value)}}
                  buttonAction={addATask}
                  label={"Add Task"}
       />
        <TaskList taskList={taskList} updateATask={updateATask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
