import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./page/Register";
import WebLogin from "./page/WebLogin";
import Otp from "./page/otp";
import ResetPassword from "./page/ResetPassword";
import ForgetPassword from "./page/ForgetPassword";
import Home from "./page/Home";
import NotificationUser from "./page/ProfileUser/NotificationUsers";
import MyClass from "./page/MyClass";
import EditDetailAccount from "./page/ProfileUser/EditDetailAccount";

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
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/notification" element={<NotificationUser />} />
        <Route path="/editdetailaccount" element={<EditDetailAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
