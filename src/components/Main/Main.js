import "./Main.css";
import React from "react";
import Task from "../Task/Task";
//import { Link } from "react-router-dom";

function Main({
  tasks,
  addOneTask,
  updateDate,
  deleteOneTask,
  idRandom,
}) {

  const [taskText, setTaskText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
    setTaskText("");
  }

  function handleChange(e) {
    setTaskText(e.target.value);
  }

  const addTask = () => {
    let newTask = {
      _id: idRandom(),
      text: taskText,
      date: updateDate(),
    };
    addOneTask(newTask);
  };

  return (
    <main>
      <form className="taskForm">
        <input
          className="taskForm__input"
          type="text"
          onChange={handleChange}
          value={taskText || ""}
          maxLength="240"
         
        />
        <button
          className="taskForm__submit"
          type="submit"
          onClick={handleSubmit}
        >
          Добавить
        </button>
      </form>
      <section className="taskItems">
        <ul className="taskItems__container">
          {tasks.map((task) => (
            <Task
              key={task._id}
              task={task}
              deleteOneTask={deleteOneTask}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
