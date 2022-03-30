import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

function Footer({ deleteTasks }) {
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTasks();
  };

  return (
    <footer className="footer">
      <button className="footer__removeItems" onClick={handleDelete}>
        Удалить
      </button>
      <Link className="footer__goBack" to="/">
        Вернуться на главную
      </Link>
    </footer>
  );
}

export default Footer;
