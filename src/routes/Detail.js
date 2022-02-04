import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Delete from "../components/Delete";

function Detail({ toDos }) {
  const id = parseInt(useParams().id);
  const toDo = toDos.find((e) => e.id === id);

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
      <Link to="/">
        <Delete id={toDo?.id} />
      </Link>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

function mapDispatchtoProps(dispatch) {}

export default connect(mapStateToProps)(Detail);
