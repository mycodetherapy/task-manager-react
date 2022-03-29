import React from "react";
import "../App.css";
import { Link, Switch, Route } from "react-router-dom";
import { arrTasks, updateDate, idRandom } from "../utils/constants";
import Main from "./Main/Main";

function App() {
  const [tasks, setTasks] = React.useState(arrTasks);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTasks = () => {
    setTasks([]);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter(item => item._id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Link to="/list">Запланировать событие</Link>
          {/* <TodoStart onStart={handleStartSubmit} /> */}
        </Route>
        <Route path="/list">
          <Main
            tasks={tasks}
            addOneTask={handleAddTask}
            deleteTasks={handleDeleteTasks}
            updateDate={updateDate}
            deleteOneTask={handleDeleteTask}
            idRandom={idRandom}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
