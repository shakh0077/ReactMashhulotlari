// import { BrowserRouter, Route, Routes, } from "react-router-dom"
// import Home from "./Crud/Home"
// import Create from "./Crud/Create"
// import Update from "./Crud/Update"
// import Read from "./Crud/Read"

// import Mui from "./AntDesign/Mui"

import { useContext } from "react"
import RouterFig from "./RouterFigma/RouterFig"
import { ThemeContext } from "./Context/GlobalContext";


function App() {
  const {theme,setTheme, lang, setLang} = useContext(ThemeContext);
  console.log(theme,lang)
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create" element={<Create />}/>
      <Route path="/update/:id" element={<Update />}/>
      <Route path="/read/:id" element={<Read />}/>
    </Routes>
    </BrowserRouter> */}

    {/* <UseMemo/> */}
    <RouterFig/>
    {/* <Mui/> */}
   
    </>
  )
}

export default App

