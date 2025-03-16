import { useReducer } from "react"
function redus(state,action) {
    switch (action.type) {
        case "QOSHISH":
            return {count:state.count + 1};
        case "AYIRISH":
            return {count:state.count - 1};
        case "RES":
                return {count:0};
        default:
            return state;
    }
}
const App = () => {

const [state, dispatch] = useReducer(redus, {count:0})
  return (
    <div>
        <h1>Counter:{state.count}</h1>
        <button onClick={()=>dispatch({type: "AYIRISH"})}>Ayirish</button>
        <button onClick={()=>dispatch({type:"RES"})}>RESET</button>
        <button onClick={()=>dispatch({type:"QOSHISH"})}>QOshish</button>
    </div>
  )
}

export default App