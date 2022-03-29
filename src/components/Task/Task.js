import "./Task.css";
import React from "react";

function Task({ task, deleteOneTask }) {
  const [dateTask, setDateTask] = React.useState(task.date);

  const _isPastDate = () => {
    if (new Date(dateTask).getTime() < new Date().getTime()) return true;
    return false;
  };

  const elementItemText = `taskItem__text ${
    _isPastDate() && "taskItem__text_past"
  }`;

  const elementItemDate = `taskItem__date ${
    _isPastDate() && "taskItem__date_past"
  }`;

  const handleItemDtlete = () => {
    deleteOneTask(task._id);
  };

  return (
    <article className="taskItem">
      <span className={elementItemText}>{task.text}</span>
      <input
        className={elementItemDate}
        type="date"
        value={dateTask}
        onChange={(e) => setDateTask(e.target.value)}
      />
      <button type="submit" onClick={handleItemDtlete}>
        Delete
      </button>
    </article>
  );
}

export default Task;
