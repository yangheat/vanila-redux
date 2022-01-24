import { createStore } from "redux";

const add = document.getElementById("add");
const minis = document.getElementById("minus");
const number = document.querySelector("span");

// 데이터 수정을 위해서는 반드시 counterModifier(reducer)를 통해야한다.
// action의 도움을 받아 reducer를 수정할 수 있따
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
// countStore(store)를 만들면 countModifier(reducer)를 inital state로 불러온다.
const countStore = createStore(countModifier);
// dispatch를 이용해서 countModifier(reducer)로 메시지를 보낸다.
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });
console.log(countStore.getState());
