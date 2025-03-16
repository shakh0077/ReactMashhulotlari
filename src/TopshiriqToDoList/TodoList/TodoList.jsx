import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DEC_COUNTER":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const TodoList = () => {
  // useReducer hookiga to‘g‘ri boshlang‘ich qiymat beramiz
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div>
      <h1>Counter: {state.counter}</h1>
      <button onClick={() => dispatch({ type: "INC_COUNTER" })}>Inc</button>
      <button onClick={() => dispatch({ type: "DEC_COUNTER" })}>Dec</button>
    </div>
  );
};

export default TodoList;
