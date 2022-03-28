import React from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom";
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
            <TodoStart onStart={handleStartSubmit} />
          </Route>
          <Route path="/list">
            <TodoList />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
