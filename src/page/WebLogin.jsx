import { mainlogo } from "../assets";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";

const WebLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

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
        setSuccess(responseData.message);
        setTimeout(() => setSuccess(null), 5000);
        localStorage.setItem("accessToken", `${responseData.data.accessToken}`);

        console.log("Login successful", responseData);

        navigate("/");
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        setTimeout(() => setError(null), 5000);
        console.error("Login failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      setError("An error occurred during login");
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="p-10 flex items-center justify-center ml-16 mx-9 bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-80 flex flex-col items-start"
        >
          <h2 className="text-3xl font-bold mb-6 text-indigo-600 self-start">
            Masuk
          </h2>

          <div className="mb-4 w-full">
            <label
              htmlFor="emailOrPhone"
              className="block text-sm font-medium text-gray-600"
            >
              Email/No Telepon
            </label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md pl-3 pr-3 mb-3"
              style={{
                borderRadius: "16px",
              }}
              placeholder="Contoh: johndoe@gmail.com"
            />
          </div>

          <div className="mb-4 w-full">
            <div className="flex justify-between items-center mb-2 w-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
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
                className="mt-1 p-3 w-full border rounded-md pr-10 pl-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder="Masukkan Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-6 w-6 text-gray-400" />
                ) : (
                  <EyeIcon className="h-6 w-6 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 mb-5 bg-indigo-600 text-white rounded hover:bg-indigo-600"
            style={{ borderRadius: "16px" }}
          >
            Masuk
          </button>

          <p className="mt-4 text-gray-600 flex items-center justify-center w-full">
            Belum punya akun?&nbsp;
            <Link to="/register" className="text-indigo-600">
              Daftar disini
            </Link>
          </p>
          <div className="flex items-center justify-center mx-40">
            {success && (
              <div className="text-green-500 bg-green-100 p-2 rounded-md absolute bottom-0 mb-4">
                {success}
              </div>
            )}
            {error && (
              <div className="text-red-500 bg-red-100 p-2 rounded-xl absolute bottom-0 mb-4">
                {error}
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden ms-24 lg:flex bg-[#6148FF] items-center justify-center text-white">
        <img src={mainlogo} alt="Logo" className="text-3xl font-semibold" />
      </div>
    </div>
  );
};

export default WebLogin;
