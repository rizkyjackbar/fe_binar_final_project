import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const FormChangePasswordUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleChangePassword = async () => {
    try {
      if (!oldPassword || !newPassword || !confirmPassword) {
        setError("Semua kolom password harus diisi");
        setTimeout(() => {
          setError(null);
          setButtonDisabled(false);
        }, 5000);
        return;
      }

      if (newPassword !== confirmPassword) {
        setError("Password baru dan konfirmasi password harus sama");
        setTimeout(() => {
          setError(null);
          setButtonDisabled(false);
        }, 5000);
        return;
      }

      // Menetapkan setButtonDisabled ke true saat ada alert
      setButtonDisabled(true);

      const response = await fetch(
        "https://befinalprojectbinar-production.up.railway.app/api/user/password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({
            old_password: oldPassword,
            new_password: newPassword,
            confirm_password: confirmPassword,
          }),
        }
      );

      if (response.ok) {
        console.log("Password changed successfully");
        setSuccessMessage("Update password success");
        setTimeout(() => {
          setSuccessMessage(null);
          setButtonDisabled(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        setTimeout(() => {
          setError(null);
          setButtonDisabled(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error changing password:", error.message);
      setError("An error occurred while changing the password");
      setButtonDisabled(true);

      setTimeout(() => {
        setError(null);
        setButtonDisabled(false);
      }, 5000);
    }
  };

  return (
    <div className="FormChangePasswordUser p-4">
      <div className="mb-4 text-center">
        <h1 className="font-bold">Ubah Password</h1>
      </div>

      <div className="mb-4 w-full">
        <div className="flex justify-between items-center mb-2 w-full">
          <label
            htmlFor="old_password"
            className="block text-sm font-medium text-gray-600"
          >
            Masukkan Password Lama
          </label>
        </div>
        <div className="flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            id="old_password"
            name="old_password"
            className="mt-1 p-3 w-full border rounded-md pr-10 pl-3"
            style={{
              borderRadius: "16px",
            }}
            placeholder="**********"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <div className="relative">
            <button
              type="button"
              className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
                isButtonDisabled ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isButtonDisabled}
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
      </div>

      <div className="mb-4 w-full">
        <div className="flex justify-between items-center mb-2 w-full">
          <label
            htmlFor="new_password"
            className="block text-sm font-medium text-gray-600"
          >
            Masukkan Password Baru
          </label>
        </div>
        <div className="flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            id="new_password"
            name="new_password"
            className="mt-1 p-3 w-full border rounded-md pr-10 pl-3"
            style={{
              borderRadius: "16px",
            }}
            placeholder="**********"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div className="relative">
            <button
              type="button"
              className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
                isButtonDisabled ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isButtonDisabled}
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
      </div>

      <div className="mb-4 w-full">
        <div className="flex justify-between items-center mb-2 w-full">
          <label
            htmlFor="confirm_password"
            className="block text-sm font-medium text-gray-600"
          >
            Ulangi Password Baru
          </label>
        </div>
        <div className="flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            id="confirm_password"
            name="confirm_password"
            className="mt-1 p-3 w-full border rounded-md pr-10 pl-3"
            style={{
              borderRadius: "16px",
            }}
            placeholder="**********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="relative">
            <button
              type="button"
              className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
                isButtonDisabled ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isButtonDisabled}
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
      </div>

      <button
        type="button"
        className={`w-full py-2 px-4 mb-5 font-bold bg-indigo-600 text-white rounded hover:bg-indigo-600 ${
          isButtonDisabled ? "cursor-not-allowed opacity-50" : ""
        }`}
        style={{ borderRadius: "16px" }}
        onClick={handleChangePassword}
        disabled={isButtonDisabled}
      >
        Ubah Password
      </button>
      {successMessage && (
        <div className="flex justify-center items-center text-green-500 bg-green-100 p-2 rounded-md">
          {successMessage}
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center text-red-500 bg-red-100 p-2 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default FormChangePasswordUser;
