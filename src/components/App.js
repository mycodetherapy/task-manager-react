import React from "react";
import "../App.css";
import { Link, Switch, Route } from "react-router-dom";
import arrTasks from "../utils/constants";
import Main from "./Main";

function App() {
  const [tasks, setTasks] = React.useState(arrTasks);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTasks = () => {
    setTasks([]);
  };

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
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
