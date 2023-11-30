import { DummyProfile } from "../assets";

const EditDetailAccount = () => {
  return (
    <div className="EditDetailAccount p-4">
      <div className="mb-4 text-center">
        <img
          src={DummyProfile}
          alt=""
          className="w-24 h-24 object-cover rounded-full mx-auto"
        />
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
  );
};

export default EditDetailAccount;
