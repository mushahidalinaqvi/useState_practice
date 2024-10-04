import { BrowserRouter, Routes, Route } from "react-router-dom"
// import NewFile from './NewFile'

// import NewFile from "./components/NewFile"
import Home from "./pages/Home"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
