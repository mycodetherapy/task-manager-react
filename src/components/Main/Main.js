import "./Main.css";
import React from "react";
import Task from "../Task/Task";

function Main({ tasks, addOneTask, updateDate, deleteOneTask }) {
  const [taskText, setTaskText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
    setTaskText("");
  };

  function handleChange(e) {
    setTaskText(e.target.value);
  }

  const _idRandom = () => {
    return Math.random().toString(16).slice(2);
  };

  const addTask = () => {
    let newTask = {
      _id: _idRandom(),
      text: taskText,
      date: updateDate(),
    };
    addOneTask(newTask);
  };

  return (
    <main className="main">
      <form className="taskForm">
        <textarea
          className="taskForm__input"
          type="text"
          onChange={handleChange}
          value={taskText}
          maxLength="240"
        />
        <button
          className={`taskForm__submit ${
            !taskText && "taskForm__submit_inactive"
          }`}
          type="submit"
          onClick={handleSubmit}
        >
          Save
        </button>
      </form>
      <section className="taskItems">
        <ul className="taskItems__container">
          {tasks.map((task) => (
            <Task key={task._id} task={task} deleteOneTask={deleteOneTask} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
