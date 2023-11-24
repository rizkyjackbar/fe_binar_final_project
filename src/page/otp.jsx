import { mainlogo } from "../assets";

const Otp = () => {
  const email = "john.doe@gmail.com";

  const hiddenEmail = email.replace(/(?<=.{1}).(?=[^@]*?.@)/g, "*");

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
              />
              <input
                type="text"
                className="p-3 h-11 w-11 border rounded-md pl-3 pr-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder="5"
                maxLength="1"
              />
              <input
                type="text"
                className="p-3 h-11 w-11 border rounded-md pl-3 pr-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder=""
                maxLength="1"
              />
              <input
                type="text"
                className="p-3 h-11 w-11 border rounded-md pl-3 pr-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder=""
                maxLength="1"
              />
              <input
                type="text"
                className="p-3 h-11 w-11 border rounded-md pl-3 pr-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder=""
                maxLength="1"
              />
              <input
                type="text"
                className="p-3 h-11 w-11 border rounded-md pl-3 pr-3"
                style={{
                  borderRadius: "16px",
                }}
                placeholder=""
                maxLength="1"
              />
            </div>
            <div className="flex justify-center items-center text-gray-600 mb-12">
              <p>Kirim Ulang OTP dalam 60 detik</p>
            </div>
            <button
              type="submit"
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
