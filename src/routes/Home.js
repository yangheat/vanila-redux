import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h2>To Do</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <Todo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// mapStateToProps()를 이용하여 store.getState()를 구현
function mapStateToProps(state) {
  return { toDos: state };
}

// mapDispatchToProps()를 이용하여 store.dispatch()를 구현
function mapDispatchToProps(dispatch) {
  return { addToDo: (text) => dispatch(actionCreators.addTodo(text)) };
}

// 둘 다 사용하는 경우
export default connect(mapStateToProps, mapDispatchToProps)(Home);

// 하나만 사용하는 경우
// export default connect(null, mapDispatchToProps)(Home);
