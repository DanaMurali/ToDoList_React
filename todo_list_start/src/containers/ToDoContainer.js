import {useState, useEffect} from 'react';
import todos from "../todos";
import TaskList from "../components/TaskList";
import NewTaskForm from '../components/NewTaskForm';

const ToDoContainer = () => {

    const [tasks, setTasks] = useState([]);

    const getTaskData = () => {
        fetch("http://localhost:8080/tasks")
            .then(response => response.json())
            .then(data => setTasks(data));
    }

    useEffect(getTaskData, []);

    const addNewTask = (newTask) => {
        //newTask.id = tasks.length + 1; //new task form has no idea how many tasks are already there so we add 1
        //creating brand new array with already existing tasks
        //setTasks([...tasks, newTask]); 
        fetch("http://localhost:8080/tasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(getTaskData);
    }

    const updateTaskCompletion = (id) => {
        console.log("updating task" + id);
        //the first thing in the array will have id 1 so just minusing it
        //const taskToUpdate = tasks[id-1];
        const taskToUpdate = tasks.find(task => task.id === id)
        taskToUpdate.completed = true;

        fetch(`http://localhost:8080/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(taskToUpdate)
        })
            .then(getTaskData);
    }

    return (
        //condition that checks if I have anything in my task array
        tasks.length > 0 ?
        <>
            <NewTaskForm onTaskSubmission={addNewTask}/>
            <hr/>
            <TaskList tasks = {tasks} onTaskCompletion={updateTaskCompletion}/>
        </>    
        :
        <p>loading...</p>
       
    )

}

export default ToDoContainer;
