import React, {useState} from "react";
import Button from "./Button";
import TaskInput from "./TaskInput";

function TaskDisplay({task, updateTaskList, deleteTask}) {
    const [newDescription, setNewDescription] = useState("");
    const [editMode, setEditMode] = useState(false);

    const colorCode = task.isDone ? "text-green-500" : "text-red-500";

    const editAction = () => {
        setNewDescription(task.desc);
        setEditMode(true);
    }

    const updateTask = () => {
        const newTask = {...task};
        newTask.desc = newDescription;
        updateTaskList(newTask);
        setNewDescription("");
        setEditMode(false);
    }

    const markComplete = () => {
        const newTask = {...task};
        newTask.isDone = true;
        updateTaskList(newTask);
    }

    const editButton = <div><Button onClick={editAction} label={"Edit"}/> </div>;

    const editor = <TaskInput label={"Update Task"}
                              onChange={(e)=>setNewDescription(e.currentTarget.value)}
                              value={newDescription}
                              buttonAction={updateTask}/>

    return (
        <div className={"border-2 py-5 mb-5"}>
            <div className={`${colorCode} border-b-2 border-dotted pb-3 px-3 mb-3`}>#{task.id}
                {task.isDone ? "" :
                    <span className={"mx-2"}><Button label={"Done!"} onClick={markComplete}/></span>
                }
                <span className={"mx-2"}><Button label={"Delete"} onClick={() => deleteTask(task)}/></span>
            </div>
            <div className={"px-3"}>{task.desc}
                { editMode ?  editor : editButton }
            </div>


        </div>
    )
}


export default TaskDisplay;