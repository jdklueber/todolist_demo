import React from "react";

function TaskDisplay({task}) {
    const colorCode = task.isDone ? "text-green-500" : "text-red-500";


    return (
        <div className={"border-b-2 p-5"}>
            <div className={colorCode}>#{task.id}</div>
            <div>{task.desc}</div>
        </div>
    )
}


export default TaskDisplay;