import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const FormChangePasswordUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleChangePassword = async () => {
    try {
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
        // Password changed successfully
        // You may want to handle this based on your application's needs
        console.log("Password changed successfully");
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Error changing password:", error.message);
      setError("An error occurred while changing the password");
    }
  };

  return (
    <div className="FormChangePasswordUser p-4">
      <div className="mb-4 text-center">
        <h1 className="font-bold">Ubah Password</h1>
        {error && (
        <div className="text-red-500 bg-red-100 p-2 rounded-md">
          {error}
        </div>
      )}
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
        <div className="relative w-full">
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
            htmlFor="new_password"
            className="block text-sm font-medium text-gray-600"
          >
            Masukkan Password Baru
          </label>
        </div>
        <div className="relative w-full">
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
            htmlFor="confirm_password"
            className="block text-sm font-medium text-gray-600"
          >
            Ulangi Password Baru
          </label>
        </div>
        <div className="relative w-full">
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
        type="button"
        className="w-full py-2 px-4 mb-5 font-bold bg-indigo-600 text-white rounded hover:bg-indigo-600"
        style={{ borderRadius: "16px" }}
        onClick={handleChangePassword}
      >
        Ubah Password
      </button>

      
    </div>
  );
};

export default FormChangePasswordUser;
