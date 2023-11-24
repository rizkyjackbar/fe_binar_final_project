import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Register } from "./page"
import { WebLogin } from "./page/WebLogin"
import Home from "./page/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<WebLogin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
