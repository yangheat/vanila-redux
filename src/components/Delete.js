import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Delete({ onBtnClick }) {
  return <button onClick={onBtnClick}>Delete</button>;
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => {
      dispatch(actionCreators.deleteTodo(ownProps.id));
    },
  };
}

export default connect(null, mapDispatchToProps)(Delete);
