import { mainlogo } from "../assets";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const WebLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="p-10 flex items-center justify-center ml-16 mx-9 bg-white">
        <form className="w-full lg:w-80 flex flex-col items-start">
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
              className="mt-1 p-3 w-full border rounded-md pl-3 pr-3"
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
                <a href="/lupa-kata-sandi" className="text-indigo-600">
                  Lupa kata sandi?
                </a>
              </p>
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

export { WebLogin };
