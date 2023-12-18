import { useState, useEffect } from "react";

const EditDetailAccount = () => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [alert, setAlert] = useState(null);

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
    const userData = JSON.parse(userDataString);
    setPhoto(userData.photo || "");
    setName(userData.name || "");
    setEmail(userData.email || "");
    setphone_number(userData.phone_number || "");
    setCountry(userData.country || "");
    setCity(userData.city || "");
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
        // localStorage.setItem("userData", JSON.stringify(userData));
        setPhoto(userData.photo || "");
        setName(userData.name || "");
        setEmail(userData.email || "");
        setphone_number(userData.phone_number || "");
        setCountry(userData.country || "");
        setCity(userData.city || "");
        console.log(userData);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const storedPhoto = localStorage.getItem("userPhoto");
    if (storedPhoto) {
      setPhoto(storedPhoto);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        localStorage.setItem("userPhoto", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://befinalprojectbinar-production.up.railway.app/api/user",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({
            name,
            email,
            phone_number,
            country,
            city,
            photo,
          }),
        }
      );

      if (response.ok) {
        const userData = {
          name,
          email,
          phone_number,
          country,
          city,
          photo,
        };
        localStorage.setItem("userData", JSON.stringify(userData));

        setAlert({
          type: "success",
          message: "Profil berhasil diperbarui!",
        });

        console.log("Profil berhasil diperbarui!", userData);
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      } else {
        setAlert({
          type: "error",
          message: "Gagal memperbarui profil",
        });
        console.error("Gagal memperbarui profil");
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      }
    } catch (error) {
      setAlert({
        type: "error",
        message: "Kesalahan selama pembaruan profil",
      });
      console.error("Kesalahan selama pembaruan profil:", error);
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
              src={photo}
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
            htmlFor="phone_number"
            className="block text-sm font-medium text-gray-600"
          >
            Nomor Telepon
          </label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={phone_number}
            onChange={(e) => setphone_number(e.target.value)}
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
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
