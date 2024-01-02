import { logo } from "../assets";
import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [password, setPassword] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState(null);
  const [notification, setNotification] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone_number || !password) {
      setNotification({
        type: "error",
        message: "Harap lengkapi semua field formulir.",
      });
      return;
    }

    if (password.length < 8) {
      setNotification({
        type: "error",
        message: "Password harus minimal 8 karakter.",
      });
      return;
    }

    try {
      const response = await fetch(
        "https://befinalprojectbinar-production.up.railway.app/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone_number: phone_number,
            password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            data: {
              name,
              email,
              phone_number,
            },
          })
        );

        setRegistrationMessage(
          "Registrasi berhasil! Anda dapat login sekarang."
        );
        setNotification({
          type: "success",
          message: "Registrasi berhasil! Anda dapat login sekarang.",
        });

        setEmail(email);

        navigate("/otp", { state: { email, data } });
      } else {
        const data = await response.json();
        setRegistrationMessage(
          data.error || "Registrasi gagal. Silakan coba lagi."
        );

        if (response.status === 400 && data.error.includes("email")) {
          setNotification({
            type: "error",
            message: "Email sudah terdaftar. Gunakan email lain.",
          });
        } else if (data.error && data.error.includes("validation")) {
          setNotification({
            type: "error",
            message: "Pastikan semua input terisi dengan benar.",
          });
        }
      }
    } catch (error) {
      setNotification({
        type: "error",
        message:
          "Email yang Anda gunakan sudah terpakai, silakan gunakan email lain.",
      });
      console.error("Error during registration:", error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotification(null);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [registrationMessage, notification]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="p-4 lg:p-10 flex items-center justify-center mx-4 lg:mx-9 mb-5 bg-white">
        <form className="w-full lg:w-80 flex flex-col items-start">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-indigo-600 self-start">
            Daftar
          </h2>

          <div className="mb-2 lg:mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-sm lg:text-base font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 lg:p-3 w-full border rounded-md pl-2 lg:pl-3 pr-2 lg:pr-3 text-sm lg:text-base"
              style={{
                borderRadius: "12px",
              }}
              placeholder="Nama Lengkap"
            />
          </div>
          <div className="mb-2 lg:mb-4 w-full">
            <label
              htmlFor="email"
              className="block text-sm lg:text-base font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 lg:p-3 w-full border rounded-md pl-2 lg:pl-3 pr-2 lg:pr-3 text-sm lg:text-base"
              style={{
                borderRadius: "12px",
              }}
              placeholder="Contoh: johndoe@gmail.com"
            />
          </div>

          <div className="mb-2 lg:mb-4 w-full relative">
            <label
              htmlFor="phone_number"
              className="block text-sm lg:text-base font-medium text-gray-600"
            >
              Nomor Telepon
            </label>
            <div className="flex items-center">
              <span className="absolute left-2 lg:left-3 flex items-center text-sm lg:text-base">
                +62
              </span>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={phone_number}
                onChange={(e) => setphone_number(e.target.value)}
                className="pl-10 lg:pl-12 mt-1 p-2 lg:p-3 w-full border rounded-md text-sm lg:text-base my-1"
                style={{
                  borderRadius: "12px",
                }}
                placeholder="81234567890"
              />
            </div>
          </div>

          <div className="mb-2 lg:mb-4 w-full">
            <div className="flex justify-between items-center w-full">
              <label
                htmlFor="password"
                className="block text-sm lg:text-base font-medium text-gray-600"
              >
                Buat Password
              </label>
            </div>

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 lg:p-3 w-full border rounded-md pr-8 lg:pr-10 pl-2 lg:pl-3 text-sm lg:text-base"
                style={{
                  borderRadius: "12px",
                }}
                placeholder="Buat Password"
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
            type="button"
            onClick={handleRegister}
            className="w-full py-2 lg:py-3 px-4 lg:px-6 mb-5 lg:mb-0 bg-indigo-600 text-white rounded hover:bg-indigo-600"
            style={{ borderRadius: "12px" }}
          >
            Daftar
          </button>

          <p className="mt-2 lg:mt-4 text-gray-600 flex items-center justify-center w-full text-sm lg:text-base">
            Sudah punya akun ?&nbsp;
            <Link to="/login" className="text-indigo-600">
              Masuk disini
            </Link>
          </p>

          <div className="lg:hidden fixed bottom-0 left-0 text-xs right-0 mx-10 flex items-center justify-center mb-4">
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

export default Register;
