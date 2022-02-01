// React Redux
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/** counting example
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  console.log(count, action);
  switch (action.type) {
    case ADD:
      return count++;
    case MINUS:
      return count--;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const addHandler = () => {
  countStore.dispatch({ type: ADD });
};

const minusHandler = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", addHandler);
minus.addEventListener("click", minusHandler);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange); */

/**  todo list example 
import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text) => {
  return { type: ADD, text };
};

const deleteTodo = (id) => {
  return { type: DELETE, id };
};

// redux에서 state를 mutated를 하면 안 됨. ex) state.push('1');
// mutated는 직접적으로 데이터를 입력하는 행위
// mutated를 하면 안 되는 이유는 redux는 항상 readonly기 때문(?)
// 따라서, 정상적으로 사용하기 위해서는 새로운 array를 만들어야함
const reducer = (state = [], action) => {
  const text = action.text;
  const id = action.id;

  switch (action.type) {
    case ADD:
      const newToDo = { text, id: Date.now() };
      return [newToDo, ...state];
    case DELETE:
      const cleanToDo = state.filter((toDo) => toDo.id !== id);
      return cleanToDo;
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
};

const paintTodo = () => {
  const toDos = store.getState();
  ul.innerText = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    li.innerText = toDo.text;
    li.id = toDo.id;
    ul.appendChild(li);
    const btn = document.createElement("button");
    li.appendChild(btn);
    btn.innerText = DELETE;
    btn.addEventListener("click", dispatchDeleteTodo);
  });
};

store.subscribe(paintTodo);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
};

form.addEventListener("submit", onSubmit);
 */
