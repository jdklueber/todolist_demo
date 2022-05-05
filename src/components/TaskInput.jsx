import React from "react";
import Button from "./Button";

function TaskInput({value, onChange, updateTaskList}) {

    return (
        <div className={"w-1/2 border-2 mx-auto p-5 mt-20"}>
            <label className={"block text-sm font-medium text-gray-700"}>Task:</label>
            <input type={"text"} value={value} onChange={onChange}
                         className={"shadow-sm border-gray-300 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"}
            />
            <Button onClick={updateTaskList} label={"Add Task"}/>
        </div>
    )
}


export default TaskInput;