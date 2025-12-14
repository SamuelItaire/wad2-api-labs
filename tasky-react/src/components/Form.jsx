import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
      <form onSubmit={props.submit}>
        
        <label>
          Task title:
          <input type="text" name="title" required onChange={props.change} />
        </label>

        <br />

        <label>
          Due date:
          <input type="date" name="deadline" required onChange={props.change} />
        </label>

        <br />

        <label>
          Details:
          <input type="text" name="description" onChange={props.change} />
        </label>

        <br />

        <label>
          Priority:
          <select name="priority" onChange={props.change}>
            <option value="Low">Low</option>
            <option value="Medium" selected>Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};

export default AddTaskForm;
