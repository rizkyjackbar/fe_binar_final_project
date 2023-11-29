import { mainlogo } from "../assets";

const ForgetPassword = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="p-10 flex items-center justify-center ml-16 mx-9 bg-white">
        <form className="w-full lg:w-80 flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-6 text-indigo-600 self-start">
            Lupa Password
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
              className="mt-1 p-3 w-full border rounded-md pl-3 pr-3 mb-3"
              style={{
                borderRadius: "16px",
              }}
              placeholder="Contoh: johndoe@gmail.com"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 mb-5 bg-indigo-600 text-white rounded hover:bg-indigo-600"
            style={{ borderRadius: "16px" }}
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
