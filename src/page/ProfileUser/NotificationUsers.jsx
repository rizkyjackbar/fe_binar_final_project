import { useEffect, useState } from "react";
import { Navbar } from "../../component";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import IsiCard from "../../component/InNotifCard";

const NotificationUser = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(
          "https://befinalprojectbinar-production.up.railway.app/api/notifications",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch notifications");
        }

        const data = await response.json();
        setNotifications(data.data || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="">
      <header>
        <Navbar />
      </header>

      <div className="bg-[#EBF3FC] h-40 p-4 mb-8">
        <div className="mt-6 mx-4 md:mx-52">
          {" "}
          <a className="text-indigo-600 font-bold flex items-center" href="/">
            <ArrowLeftIcon className="w-6 h-6 mr-2" />
            <p>Kembali Ke Beranda</p>
          </a>
        </div>

        <div className="flex items-center justify-center">
          <div className="card bg-white shadow-md mt-12 w-full md:w-2/3 h-auto border border-indigo-600 rounded-2xl mb-10">
            {" "}
            <h2 className="bg-indigo-600 flex items-center justify-center text-sm font-bold text-white rounded-t-2xl h-12">
              Notifikasi
            </h2>
            {isLoading ? (
              <p className="text-center mt-4 text-gray-800 mb-10">
                Tunggu Sebentar...
              </p>
            ) : notifications.length === 0 ? (
              <p className="text-center mt-4 text-gray-800">
                Tidak Ada Pemberitahuan
              </p>
            ) : (
              notifications.map((notification) => (
                <IsiCard
                  key={notification.id}
                  data={notification}
                  createdAt={new Date(notification.createdAt).toLocaleString()}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationUser;
