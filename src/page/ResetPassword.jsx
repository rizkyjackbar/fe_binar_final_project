import { mainlogo } from "../assets";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [new_password, setNewPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
    setPasswordMatchError(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatchError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (new_password !== confirm_password) {
      setPasswordMatchError(true);
      return;
    }

    try {
      const response = await fetch(
        "https://befinalprojectbinar-production.up.railway.app/api/reset/password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            new_password: new_password,
            confirm_password: confirm_password,
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
      setTimeout(() => setError(null), 5000);
    }
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="p-10 flex items-center justify-center ml-16 mx-9 bg-white">
        <form
          className="w-full lg:w-80 flex flex-col items-start"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold mb-6 text-indigo-600 self-start">
            Reset Password
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
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Masukkan Password Baru
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={new_password}
                onChange={handlePasswordChange}
                className="mt-1 p-3 w-full border rounded-md pl-3 pr-10 mb-3"
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

          <div className="mb-4 w-full">
            <div className="flex justify-between items-center mb-2 w-full">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Ulangi Password Baru
              </label>
            </div>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={confirm_password}
                onChange={handleConfirmPasswordChange}
                className="mt-1 p-3 w-full border rounded-md pr-10 pl-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder="Ulangi Password"
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
            {passwordMatchError && (
              <p className="text-red-500 text-sm mt-1">
                Password tidak sesuai.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 mb-5 bg-indigo-600 text-white rounded hover:bg-indigo-600"
            style={{ borderRadius: "16px" }}
          >
            Reset Password
          </button>

          <p className="mt-4 text-gray-600 flex items-center justify-center w-full">
            Belum punya akun?&nbsp;
            <Link to="/register" className="text-indigo-600">
              Daftar disini
            </Link>
          </p>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex bg-[#6148FF] items-center justify-center text-white w-full">
        <img src={mainlogo} alt="Logo" className="text-3xl font-semibold" />
      </div>
    </div>
  );
};

export default ResetPassword;
