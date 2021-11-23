import { useState } from "react";

//adding a new form 

const NewTaskForm = ({onTaskSubmission}) => {

    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");

    //this even will be somebody typing in their box
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        const NewTask = {
            description: description,
            priority: priority,
            completed: false
        }

        onTaskSubmission(NewTask);

        setDescription("");
        setPriority("");
    }

    return (
        <>
            <h2>Add a new task:</h2>
            <form onSubmit={handleFormSubmission}>
                <div className="formElement">
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description" value={description} onChange={handleDescriptionChange}/>
                </div>
                <div className="formElement">
                    <label htmlFor="priority">Priority: </label>
                    <input type="text" id="priority" value={priority} onChange={handlePriorityChange}/>
                </div>
                <div className="formElement">
                    <input type="submit" value="Add Task"/>
                </div>
            </form>
        </>
    )

}

export default NewTaskForm;