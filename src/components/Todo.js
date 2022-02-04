import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
import Delete from "./Delete";

function Todo({ text, id, onBtnClick }) {
  return (
    <li>
      <Link to={`${id}`}>{text}</Link>
      {/* <button onClick={onBtnClick}>DEL</button> */}
      <Delete id={id} />
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  // 해당 위치에 함수를 추가하게 되면 props에 추가됨.
  return { onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)) };
}

export default connect(null, mapDispatchToProps)(Todo);
