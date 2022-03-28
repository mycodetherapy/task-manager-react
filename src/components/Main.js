import React from "react";
import Task from "./Task";

function Main({ tasks, addOneTask, deleteTasks }) {
  const [taskText, setTaskText] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTask();
  }

  function handleDelete(e) {
    e.preventDefault();
    deleteTasks();
  }

  const addTask = () => {
    let newTask = {
      _id: tasks.length + 1,
      text: taskText
    } 
     channgeTask(newTask);
  };

  function channgeTask(newTask) {
    addOneTask(newTask);
  }

  // React.useEffect(() => {
  //   setTaskText("");
  // });

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
        <button className="taskForm__delete" onClick={handleDelete}>
          Удалить
        </button>
      </form>
      <section className="taskItems">
        <ul className="taskItems__container">
          {tasks.map((task) => (
            <Task key={task._id} text={task.text} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
