import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./page/Register";
import WebLogin from "./page/WebLogin";
import Otp from "./page/otp";
import ResetPassword from "./page/ResetPassword";
import Home from "./page/Home";
import MyClass from "./page/MyClass";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<WebLogin />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/myclass" element={<MyClass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
