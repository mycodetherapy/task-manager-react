import React from "react";
import "../App.css";
import { Link, Switch, Route } from "react-router-dom";
import { arrTasks, updateDate } from "../utils/constants";
import Main from "./Main/Main";

function App() {
  const [tasks, setTasks] = React.useState(arrTasks);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTasks = () => {
    setTasks([]);
  };

  const handleDeleteTask = (index) => {
    
    const x = index - 1;
    setTasks(tasks.splice(x, 1));
    console.log(tasks);
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
            deleteOnTask={handleDeleteTask}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
