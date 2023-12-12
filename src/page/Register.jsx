import { mainlogo } from "../assets";
import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState(null);
  const [notification, setNotification] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber || !password) {
      setNotification({
        type: "error",
        message: "Harap lengkapi semua field formulir.",
      });
      return;
    }

    if (password.length < 8) {
      setNotification({
        type: "error",
        message: "Password harus memiliki setidaknya 8 karakter.",
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
            phone_number: phoneNumber,
            password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        console.log(data);

        localStorage.setItem("accessToken", data.data.accessToken);

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
      <div className="p-10 flex items-center justify-center ml-16 mx-9 bg-white">
        <form className="w-full lg:w-80 flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-6 text-indigo-600 self-start">
            Daftar
          </h2>

          {notification && (
            <div
              className={`mb-4 p-4 ${
                notification.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              } border-l-4 ${
                notification.type === "success"
                  ? "border-green-500"
                  : "border-red-500"
              }`}
            >
              {notification.message}
            </div>
          )}

          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md pl-3 pr-3"
              style={{
                borderRadius: "16px",
              }}
              placeholder="Nama Lengkap"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md pl-3 pr-3"
              style={{
                borderRadius: "16px",
              }}
              placeholder="Contoh: johndoe@gmail.com"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Nomor Telepon
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md pl-3 pr-3"
              style={{
                borderRadius: "16px",
              }}
              placeholder="+62."
            />
          </div>

          <div className="mb-4 w-full">
            <div className="flex justify-between items-center w-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
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
                className="mt-1 p-3 w-full border rounded-md pr-10 pl-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder="Buat Password"
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
            onClick={handleRegister}
            className="w-full py-2 px-4 mb-5 bg-indigo-600 text-white rounded hover:bg-indigo-600"
            style={{ borderRadius: "16px" }}
          >
            Daftar
          </button>

          <p className="mt-4 text-gray-600 flex items-center justify-center w-full">
            Sudah punya akun ?&nbsp;
            <Link to="/login" className="text-indigo-600">
              Masuk disini
            </Link>
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

export default Register;
