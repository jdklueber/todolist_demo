import React from "react";
import TaskDisplay from "./TaskDisplay";

function TaskList({taskList, updateATask, deleteTask}) {

    return (
        <div className={"w-1/2 mx-auto mt-10"}>
            <h1 className={"text-4xl my-5"}>To Do</h1>
            <div className={"ml-20"}>
                {taskList.length ?
                    taskList.map(e => <TaskDisplay key={e.id}
                                                   task={e}
                                                   updateATask={updateATask}
                                                   deleteTask={deleteTask}/>)
                    : "No tasks yet!"
                }
            </div>
        </div>

    )
}


export default TaskList;