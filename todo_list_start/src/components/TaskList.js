import Task from "./Task";

//from an array of tasks 
const TaskList = ({tasks, onTaskCompletion}) => {

    //for each task we are returning a task component which we save
    const taskComponents = tasks.map(task => {
        return(
            <Task task={task} key={task.id} onTaskCompletion={onTaskCompletion}/> //react needs a unique id 
        )
    })

    return (
        <div className="task-list">
            {taskComponents}
        </div>
    )

}

export default TaskList