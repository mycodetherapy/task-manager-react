import React from "react";
import "../App.css";
import { Link, Switch, Route } from "react-router-dom";
import TodoStart from "./TodoStart";
import TodoList from "./TodoList";

function handleStartSubmit() {
  console.log("Start");
}

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Link to="/list">
          Запланировать событие
          </Link>
          {/* <TodoStart onStart={handleStartSubmit} /> */}
        </Route>
        <Route path="/list">
          <TodoList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
