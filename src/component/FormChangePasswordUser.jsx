import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const FormChangePasswordUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="FormChangePasswordUser p-4">
      <div className="mb-4 text-center">
        <h1 className="font-bold">Ubah Password</h1>
      </div>

      <div className="mb-4 w-full">
        <div className="flex justify-between items-center mb-2 w-full">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Masukkan Password Lama
          </label>
        </div>
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="mt-1 p-3 w-full border rounded-md pr-10 pl-3"
            style={{
              borderRadius: "16px",
            }}
            placeholder="**********"
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
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Masukkan Password Baru
          </label>
        </div>
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="mt-1 p-3 w-full border rounded-md pr-10 pl-3"
            style={{
              borderRadius: "16px",
            }}
            placeholder="**********"
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
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Ulangi Password Baru
          </label>
        </div>
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="mt-1 p-3 w-full border rounded-md pr-10 pl-3"
            style={{
              borderRadius: "16px",
            }}
            placeholder="**********"
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
        className="w-full py-2 px-4 mb-5 font-bold bg-indigo-600 text-white rounded hover:bg-indigo-600"
        style={{ borderRadius: "16px" }}
      >
        Ubah Password
      </button>
    </div>
  );
};

export default FormChangePasswordUser;
