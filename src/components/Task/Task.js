import "./Task.css";
import React from "react";

function Task({ task }) {
  const [dateTask, setDateTask] = React.useState(task.date);

   //console.log(new Date(date).getTime());
   //console.log(new Date().getTime());
  const itemText = `taskItem__text ${
    new Date(dateTask).getTime() < new Date().getTime() && "taskItem__text_past"
  }`;

  const itemDate = `taskItem__date ${
    new Date(dateTask).getTime() < new Date().getTime() && "taskItem__date_past"
  }`;
  
  return (
    <article className="taskItem">
      <span className={itemText}>{task.text}</span>
      <input className={itemDate} type="date" value={dateTask} onChange={(e) => setDateTask(e.target.value)} />
      {/* <button></button> */}
    </article>
  );
}

export default Task;
