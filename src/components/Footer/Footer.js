import "./Footer.css";
import React from "react";
import { Link, Route } from "react-router-dom";

function Footer({ deleteTasks }) {
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTasks();
  };

  return (
    <footer className="footer">
      <Route exact path="/">
        <p className="footer__copyright">
          &#169; {`${new Date().getFullYear()} Maksim Ovchinnikov`}
        </p>
      </Route>

      <Route path="/list">
        <button className="footer__removeItems" onClick={handleDelete}>
          Delete all tasks
        </button>
        <Link className="footer__goBack" to="/">
          Go back to the main page
        </Link>
        <p className="footer__copyright">
          &#169; {`${new Date().getFullYear()} Maksim Ovchinnikov`}
        </p>
      </Route>
    </footer>
  );
}

export default Footer;
