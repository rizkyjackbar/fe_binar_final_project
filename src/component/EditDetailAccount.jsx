import { useState, useEffect } from "react";
import { DummyProfile } from "../assets";

const EditDetailAccount = () => {
  const [alert, setAlert] = useState(null);
  const [userData, setUserData] = useState({
    photo: "",
    name: "",
    email: "",
    phone_number: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataString = localStorage.getItem("userData");

        if (userDataString) {
          setInitialUserDataFromLocalStorage(userDataString);
        } else {
          await fetchUserDataFromApi();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const setInitialUserDataFromLocalStorage = (userDataString) => {
    try {
      const userData = JSON.parse(userDataString);
      setUserData(userData.data ?? {});
    } catch (error) {
      console.error("Error parsing data from Local Storage:", error);
    }
  };

  const fetchUserDataFromApi = async () => {
    try {
      const response = await fetch(
        "https://befinalprojectbinar-production.up.railway.app/api/user",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();

        setUserData(userData.data ?? {});
        localStorage.setItem("userData", JSON.stringify(userData));
        const userPhoto =
          userData.data.photo || localStorage.getItem("userPhoto");

        if (userPhoto) {
          setUserData((prevData) => ({ ...prevData, photo: userPhoto }));
          localStorage.setItem("userPhoto", userPhoto);
        } else {
          setUserData((prevData) => ({ ...prevData, photo: DummyProfile }));
          localStorage.setItem("userPhoto", DummyProfile);
        }
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedPhoto = reader.result;

        setUserData((prevData) => ({ ...prevData, photo: updatedPhoto }));

        localStorage.setItem("userPhoto", updatedPhoto);

        fetchUserDataFromApi();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      const fileInput = document.getElementById("photo");
      const file = fileInput.files[0];

      if (file) {
        formData.append("photo", file);
      }

      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("phone_number", userData.phone_number);
      formData.append("country", userData.country);
      formData.append("city", userData.city);

      const response = await fetch(
        "https://befinalprojectbinar-production.up.railway.app/api/user",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const responseData = await response.json();

        localStorage.setItem("userData", JSON.stringify(responseData.data));

        setAlert({
          type: "success",
          message: "Profil berhasil diperbarui!",
        });

        setTimeout(() => {
          setAlert(null);
        }, 3000);
      } else {
        setAlert({
          type: "error",
          message: "Gagal memperbarui profil",
        });

        setTimeout(() => {
          setAlert(null);
        }, 3000);
      }
    } catch (error) {
      setAlert({
        type: "error",
        message: "Kesalahan selama pembaruan profil",
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  };

  return (
    <div className="EditDetailAccount p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-center">
          <label htmlFor="photo" className="cursor-pointer">
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <img
              src={userData?.photo ?? DummyProfile}
              alt=""
              className="w-24 h-24 object-cover rounded-full mx-auto cursor-pointer"
            />
          </label>
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={(e) =>
              setUserData((prevData) => ({ ...prevData, name: e.target.value }))
            }
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
            value={userData.email}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }))
            }
            className="mt-1 p-3 w-full border rounded-md pl-3 pr-3"
            style={{
              borderRadius: "16px",
            }}
            placeholder="Contoh: johndoe@gmail.com"
          />
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="phone_number"
            className="block text-sm font-medium text-gray-600"
          >
            Nomor Telepon
          </label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={userData.phone_number}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                phone_number: e.target.value,
              }))
            }
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
              value={userData.country}
              onChange={(e) =>
                setUserData((prevData) => ({
                  ...prevData,
                  country: e.target.value,
                }))
              }
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
              value={userData.city}
              onChange={(e) =>
                setUserData((prevData) => ({
                  ...prevData,
                  city: e.target.value,
                }))
              }
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
        <div className="flex items-center justify-center">
          {alert && (
            <div
              className={`text-${
                alert.type === "success" ? "green" : "red"
              }-500 bg-${
                alert.type === "success" ? "green" : "red"
              }-100 p-2 rounded-xl`}
            >
              {alert.message}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditDetailAccount;
