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
import ChangePasswordUser from "./page/ProfileUser/ChangePassword";
import PaymentHistory from "./page/ProfileUser/PaymentHistory";
import Class from "./page/Class";
import DetailClass from "./page/DetailClass";
import PaymentSuccess from "./page/PaymentSuccess";
import Payment from "./page/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<WebLogin />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset/password/:tokenResetPassword" element={<ResetPassword />} />
        <Route path="/myclass" element={<MyClass />} />
        <Route path="/class" element={<Class />} />
        <Route path="/detailclass" element={<DetailClass />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/notification" element={<NotificationUser />} />
        <Route path="/editdetailaccount" element={<EditDetailAccount />} />
        <Route path="/changepassword" element={<ChangePasswordUser />} />
        <Route path="/paymenthistory" element={<PaymentHistory />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

// komen
