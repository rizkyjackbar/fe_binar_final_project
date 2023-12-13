import { mainlogo } from "../assets";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Otp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";
  const emailParts = email.split("@");
  const hiddenEmail =
    emailParts.length === 2
      ? `${emailParts[0].charAt(0)}${"*".repeat(
          emailParts[0].length - 2
        )}${emailParts[0].charAt(emailParts[0].length - 1)}@${emailParts[1]}`
      : email;
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(300);
  const [otp, setOtp] = useState("");
  const [accessToken, setAccessToken] = useState(
    location.state?.accessToken || localStorage.getItem("accessToken") || ""
  );

  useEffect(() => {
    // console.log(location.state);
    const storedToken =
      location.state?.accessToken || localStorage.getItem("accessToken");

    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, [location.state]);

  useEffect(() => {
    let timer;

    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      setResendDisabled(false);
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [countdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://befinalprojectbinar-production.up.railway.app/api/otp",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code1: otp[0],
            code2: otp[1],
            code3: otp[2],
            code4: otp[3],
            code5: otp[4],
            code6: otp[5],
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();

        if (responseData.status === "OK") {
          console.log("OTP verification successful");
          console.log(responseData.message);

          navigate("/myClass");
        } else {
          console.error("OTP verification failed");
          console.error(responseData.message);
        }
      } else {
        const errorData = await response.json();
        console.error("Error during OTP verification:", errorData.message);
      }
    } catch (error) {
      console.error("Error during OTP verification:", error.message);
    }
  };

  const handleResend = async () => {
    try {
      setResendDisabled(true);
      setCountdown(300);

      const storedToken = localStorage.getItem("accessToken");

      if (!storedToken) {
        console.error("Access token not found");
        setResendDisabled(false);
        return;
      }

      const response = await fetch(
        "https://befinalprojectbinar-production.up.railway.app/api/otp",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${storedToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("OTP resent successfully");

        const newToken = response.headers.get("new_access_token");
        if (newToken) {
          localStorage.setItem("accessToken", newToken);
          setAccessToken(newToken);
        }
      } else {
        console.error("Failed to resend OTP");
        setResendDisabled(false);
      }
    } catch (error) {
      console.error("Error while resending OTP", error);
      setResendDisabled(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="p-10 flex items-center justify-center ml-16 mx-9 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-indigo-600">
            Masukkan OTP
          </h2>
          <p className="text-gray-600 mb-4">
            Ketik 6 digit kode yang dikirimkan ke {hiddenEmail}
          </p>
          <form className="space-y-4">
            <div className="flex items-center space-x-4 justify-center mt-16 mb-11">
              <input
                type="text"
                className="p-3 h-11 w-11 border rounded-md pl-3 pr-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder="8"
                maxLength="1"
                value={otp[0] || ""}
                onChange={(e) =>
                  setOtp((prev) => [
                    e.target.value,
                    prev[1],
                    prev[2],
                    prev[3],
                    prev[4],
                    prev[5],
                  ])
                }
              />
              <input
                type="text"
                className="p-3 h-11 w-11 border rounded-md pl-3 pr-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder="5"
                maxLength="1"
                value={otp[1] || ""}
                onChange={(e) =>
                  setOtp((prev) => [
                    prev[0],
                    e.target.value,
                    prev[2],
                    prev[3],
                    prev[4],
                    prev[5],
                  ])
                }
              />
              <input
                type="text"
                className="p-3 h-11 w-11 border rounded-md pl-3 pr-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder=""
                maxLength="1"
                value={otp[2] || ""}
                onChange={(e) =>
                  setOtp((prev) => [
                    prev[0],
                    prev[1],
                    e.target.value,
                    prev[3],
                    prev[4],
                    prev[5],
                  ])
                }
              />
              <input
                type="text"
                className="p-3 h-11 w-11 border rounded-md pl-3 pr-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder=""
                maxLength="1"
                value={otp[3] || ""}
                onChange={(e) =>
                  setOtp((prev) => [
                    prev[0],
                    prev[1],
                    prev[2],
                    e.target.value,
                    prev[4],
                    prev[5],
                  ])
                }
              />
              <input
                type="text"
                className="p-3 h-11 w-11 border rounded-md pl-3 pr-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder=""
                maxLength="1"
                value={otp[4] || ""}
                onChange={(e) =>
                  setOtp((prev) => [
                    prev[0],
                    prev[1],
                    prev[2],
                    prev[3],
                    e.target.value,
                    prev[5],
                  ])
                }
              />
              <input
                type="text"
                className="p-3 h-11 w-11 border rounded-md pl-3 pr-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder=""
                maxLength="1"
                value={otp[5] || ""}
                onChange={(e) =>
                  setOtp((prev) => [
                    prev[0],
                    prev[1],
                    prev[2],
                    prev[3],
                    prev[4],
                    e.target.value,
                  ])
                }
              />
            </div>

            <div className="flex justify-center items-center text-gray-600 mb-12">
              <p>
                Kirim Ulang OTP dalam {Math.floor(countdown / 60)} menit{" "}
                {countdown % 60} detik
              </p>
              <button
                type="button"
                onClick={handleResend}
                disabled={resendDisabled}
                className="ml-2 text-indigo-600"
              >
                Kirim Ulang
              </button>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-600"
              style={{ borderRadius: "16px" }}
            >
              Simpan
            </button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden ms-24 lg:flex bg-[#6148FF] items-center justify-center text-white">
        <img src={mainlogo} alt="Logo" className="text-3xl font-semibold" />
      </div>
    </div>
  );
};

export default Otp;
