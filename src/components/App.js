import "../App.css";
import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { arrTasks, updateDate } from "../utils/constants";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  const [tasks, setTasks] = React.useState(arrTasks);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTasks = () => {
    setTasks([]);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((item) => item._id !== taskId);
    setTasks(newTasks);
  };

  return (
    <div className="page">
      <Header />
      <Switch>
        <Route exact path="/">
          <Link className="goTo" to="/list">
            Add a task
          </Link>
        </Route>
        <Route path="/list">
          <Main
            tasks={tasks}
            addOneTask={handleAddTask}
            updateDate={updateDate}
            deleteOneTask={handleDeleteTask}
          />
        </Route>
      </Switch>
      <Footer deleteTasks={handleDeleteTasks} />
    </div>
  );
}

export default App;
