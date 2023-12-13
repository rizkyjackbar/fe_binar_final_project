import { mainlogo } from "../assets";
import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleResetPassword = async () => {
    try {
      const response = await fetch(
        "https://befinalprojectbinar-production.up.railway.app/api/reset/password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );

      if (response.ok) {
        const successData = await response.json();
        setSuccess(successData.message);
        setTimeout(() => setSuccess(null), 5000);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        setTimeout(() => setError(null), 5000);
      }
    } catch (error) {
      console.error("Error resetting password:", error.message);
      setError("An error occurred while resetting the password");
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="p-10 flex items-center justify-center ml-16 mx-9 bg-white">
        <form className="w-full lg:w-80 flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-6 text-indigo-600 self-start">
            Lupa Password
          </h2>
          {success && (
            <div className="text-green-500 bg-green-100 p-2 rounded-md">
              {success}
            </div>
          )}
          {error && (
            <div className="text-red-500 bg-red-100 p-2 rounded-md">
              {error}
            </div>
          )}
          <div className="mb-4 mt-4 w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email/No Telepon
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-3 w-full border rounded-md pl-3 pr-3 mb-3"
              style={{
                borderRadius: "16px",
              }}
              placeholder="Contoh: johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="w-full py-2 px-4 mb-5 bg-indigo-600 text-white rounded hover:bg-indigo-600"
            style={{ borderRadius: "16px" }}
            onClick={handleResetPassword}
          >
            Kirim Tautan Reset Password
          </button>

          <p className="mt-4 text-gray-600 flex items-center justify-center w-full">
            Belum punya akun?&nbsp;
            <a href="/register" className="text-indigo-600">
              Daftar disini
            </a>
          </p>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden ms-24 lg:flex bg-[#6148FF] items-center justify-center text-white">
        <img src={mainlogo} alt="Logo" className="text-3xl font-semibold" />
      </div>
    </div>
  );
};

export default ForgetPassword;
