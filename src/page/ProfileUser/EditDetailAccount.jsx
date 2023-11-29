import { Navbar } from "../../component";
import { ArrowLeftIcon } from "@heroicons/react/solid";

const EditDetailAccount = () => {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>

      <div className="bg-[#EBF3FC] h-40 p-4 mb-8">
        <div className="mt-6 ms-52">
          <a className="text-indigo-600 font-bold flex items-center" href="/">
            <ArrowLeftIcon className="w-6 h-6 mr-2" />
            <p>Kembali Ke Beranda</p>
          </a>
        </div>

        <div className="flex items-center justify-center">
          <div className="card bg-white shadow-md mt-12 w-2/3 h-auto border border-indigo-600 rounded-2xl">
            <h2 className="bg-indigo-600 flex items-center justify-center text-sm font-bold text-white rounded-t-2xl h-12">
              Akun
            </h2>
            <div className="EditDetailAccount p-4">
              <div className="mb-4 text-center">
                <label className="block text-gray-700 font-bold mb-2">
                  Foto Profil
                </label>
                <img
                  src="url_foto_profil"
                  alt="Foto Profil"
                  className="w-16 h-16 object-cover rounded-full mx-auto"
                />
                <button className="mt-2 bg-indigo-500 text-white py-1 px-2 rounded">
                  Ganti Foto Profil
                </button>
              </div>

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
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Negara
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    id="country"
                    type="text"
                    name="country"
                    className="mt-1 p-3 w-full border rounded-md pr-10 pl-3"
                    style={{
                      borderRadius: "16px",
                    }}
                    placeholder="Masukkan Negara Tempat Tinggal"
                  />
                </div>
              </div>

              <div className="mb-4 w-full">
                <div className="flex justify-between items-center w-full">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Kota
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    id="city"
                    type="text"
                    name="city"
                    className="mt-1 p-3 w-full border rounded-md pr-10 pl-3"
                    style={{
                      borderRadius: "16px",
                    }}
                    placeholder="Masukkan Kota Tempat Tinggal"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 mb-5 font-bold bg-indigo-600 text-white rounded hover:bg-indigo-600"
                style={{ borderRadius: "16px" }}
              >
                Simpan Profil Saya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDetailAccount;
