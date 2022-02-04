import React from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";

function Todo({ text, id, onBtnClick }) {
  return (
    <li>
      <Link to={`${id}`}>{text}</Link>
      <Delete id={id} />
    </li>
  );
}

export default Todo;
