// import { BrowserRouter, Route, Routes, } from "react-router-dom"
// import Home from "./Crud/Home"
// import Create from "./Crud/Create"
// import Update from "./Crud/Update"
// import Read from "./Crud/Read"

// import Mui from "./AntDesign/Mui"

import RouterFig from "./RouterFigma/RouterFig"
import i18n from "./i18n/i18n"


function App() {
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

