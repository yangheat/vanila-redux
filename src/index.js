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

countStore.subscribe(onChange);
