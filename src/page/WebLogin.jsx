import { logo } from "../assets";
import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";

const WebLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://befinalprojectbinar-production.up.railway.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setNotification({
          type: "success",
          message: responseData.message,
        });
        localStorage.setItem("accessToken", responseData.data.accessToken);
        navigate("/");
      } else {
        const errorData = await response.json();
        setNotification({
          type: "error",
          message: errorData.message,
        });
        console.error("Login failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      setNotification({
        type: "error",
        message: "An error occurred during login",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotification(null);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [notification]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="p-4 lg:p-10 flex items-center justify-center mx-4 lg:mx-9 bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-80 flex flex-col items-start"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-indigo-600 self-start">
            Masuk
          </h2>

          <div className="mb-2 lg:mb-4 w-full">
            <label
              htmlFor="emailOrPhone"
              className="block text-sm lg:text-base font-medium text-gray-600"
            >
              Email/No Telepon
            </label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              className="mt-1 p-2 lg:p-3 w-full border rounded-md pl-2 lg:pl-3 pr-2 lg:pr-3 text-sm lg:text-base"
              style={{
                borderRadius: "12px",
              }}
              placeholder="Contoh: johndoe@gmail.com"
            />
          </div>

          <div className="mb-2 lg:mb-4 w-full">
            <div className="flex justify-between items-center mb-2 w-full">
              <label
                htmlFor="password"
                className="block text-sm lg:text-base font-medium text-gray-600"
              >
                Password
              </label>
              <p className="text-gray-600">
                <Link to="/forgetPassword" className="text-indigo-600">
                  Lupa kata sandi?
                </Link>
              </p>
            </div>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 lg:p-3 w-full border rounded-md pr-8 lg:pr-10 pl-2 lg:pl-3 text-sm lg:text-base"
                style={{
                  borderRadius: "12px",
                }}
                placeholder="Masukkan Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-2 lg:pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 lg:h-6 w-5 lg:w-6 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 lg:h-6 w-5 lg:w-6 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 lg:py-3 px-4 lg:px-6 mb-5 lg:mb-0 bg-indigo-600 text-white rounded hover:bg-indigo-600"
            style={{ borderRadius: "12px" }}
          >
            Masuk
          </button>

          <p className="mt-2 lg:mt-4 text-gray-600 flex items-center justify-center w-full text-sm lg:text-base">
            Belum punya akun ?&nbsp;
            <Link to="/register" className="text-indigo-600">
              Daftar disini
            </Link>
          </p>
          <div className="lg:hidden fixed bottom-0 left-0 right-0 flex items-center justify-center mb-4">
            {notification && (
              <div
                className={`text-${
                  notification.type === "success" ? "green" : "red"
                }-500 bg-${
                  notification.type === "success" ? "green" : "red"
                }-100 p-2 rounded-xl`}
              >
                {notification.message}
              </div>
            )}
          </div>
          <div className="hidden lg:flex items-center justify-center mx-2 lg:mx-40">
            {notification && (
              <div
                className={`text-${
                  notification.type === "success" ? "green" : "red"
                }-500 bg-${
                  notification.type === "success" ? "green" : "red"
                }-100 p-1 lg:p-2 rounded-xl absolute bottom-0 mb-2 lg:mb-4`}
              >
                {notification.message}
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex bg-[#6148FF] items-center justify-center text-white">
        <img
          src={logo}
          alt="Logo"
          className="text-2xl lg:text-3xl font-semibold"
          style={{ width: "400px" }}
        />
      </div>
    </div>
  );
};

export default WebLogin;
