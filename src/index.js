import { createStore } from "redux";

/* // counting example

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

// todo list example
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const ADD = "ADD";
const DELETE = "DELETE";

// redux에서 state를 mutated를 하면 안 됨. ex) state.push('1');
// mutated는 직접적으로 데이터를 입력하는 행위
// mutated를 하면 안 되는 이유는 redux는 항상 readonly기 때문(?)
// 따라서, 정상적으로 사용하기 위해서는 새로운 array를 만들어야함
const reducer = (state = [], action) => {
  const text = action.text;
  switch (action.type) {
    case ADD:
      return [...state, { text, id: Date.now() }];
    case DELETE:
      return [];
    default:
      console.log("default");
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = "";
  store.dispatch({ type: ADD, text });
};

form.addEventListener("submit", onSubmit);

const createTodo = () => {
  const list = store.getState();
  for (let i = 0; list.length; i++) {
    const li = document.createElement("li");
    li.innerText = list[i];
    ul.appendChild(li);
  }
};

// store.subscribe(createTodo);
