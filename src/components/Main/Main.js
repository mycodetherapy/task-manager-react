import React from "react";
import Task from "../Task/Task";
import { Link } from "react-router-dom";

function Main({
  tasks,
  addOneTask,
  deleteTasks,
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

  const handleDelete = (e) => {
    e.preventDefault();
    deleteTasks();
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
          required
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
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
      <button className="taskForm__delete" onClick={handleDelete}>
          Удалить
        </button>
      <Link className="goBack" to="/">
        Вернуться на главную
      </Link>
    </main>
  );
}

export default Main;
