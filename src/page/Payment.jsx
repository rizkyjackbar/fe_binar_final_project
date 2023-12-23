import { Link, useLocation } from "react-router-dom";
import { payment_option } from "../assets";
import Card from "../component/Card";
import { Navbar } from "./../component";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

const Payment = () => {
  const token = localStorage.getItem("accessToken");

  const location = useLocation();
  const [course, setCourse] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  const [bankTransferData, setBankTransferData] = useState({
    accountNumber: "",
    accountName: "",
    bankName: "",
    totalTransfer: "",
  });

  const [creditCardData, setCreditCardData] = useState({
    cardNumber: "",
    cardHolderName: "",
    cvv: "",
    expiryDate: "",
  });

  const validatePaymentMethod = () => {
    const { accountNumber, accountName, bankName, totalTransfer } =
      bankTransferData;
    const { cardNumber, cardHolderName, cvv, expiryDate } = creditCardData;

    if (accountNumber || accountName || bankName || totalTransfer) {
      setPaymentMethod("Bank Transfer");
    } else if (cardNumber || cardHolderName || cvv || expiryDate) {
      setPaymentMethod("Credit Card");
    } else console.error("belum diisi");
  };

  const calculateTotalPrice = () => {
    return (11 / 100) * course.price + course.price;
  };
  const calculatePPN = () => {
    return (11 / 100) * course.price;
  };

  const handlePaymentButtonClick = () => {
    validatePaymentMethod();
    if (paymentMethod == "Bank Transfer") {
      sendUpdatePayment(orderId, paymentMethod);
    } else if (paymentMethod == "Credit Card") {
      sendUpdatePayment(orderId, paymentMethod);
    }
  };

  const sendUpdatePayment = async (orderId, paymentMetode) => {
    try {
      if (paymentMethod != "") {
        const updateResponse = await fetch(
          `https://befinalprojectbinar-production.up.railway.app/api/orders/${orderId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              course_id: location.state.id,
              order_method: paymentMetode,
            }),
          }
        );
        if (updateResponse.ok) {
          console.log(`Order ID ${orderId} berhasil diupdate`);
        } else {
          console.error(
            `Error updating order ${orderId}:`,
            updateResponse.status,
            updateResponse.statusText
          );
        }
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      if (location?.state?.id) {
        try {
          const response = await fetch(
            `https://befinalprojectbinar-production.up.railway.app/api/courses/${location.state.id}`
          );

          if (response.ok) {
            const { data } = await response.json();
            setCourse(data);
          } else {
            console.error(
              "Error fetching data:",
              response.status,
              response.statusText
            );
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    const fetchOrder = async () => {
      try {
        const response = await fetch(
          "https://befinalprojectbinar-production.up.railway.app/api/orders",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const { data } = await response.json();
          const filteredOrders = data.filter(
            (data) =>
              data.course.id === location.state.id &&
              data.status === "BELUM BAYAR"
          );

          const orderId = filteredOrders.map((order) => order.id);

          console.log("Order IDs yang belum bayar:", orderId);
          setOrderId(orderId);
        } else {
          console.error(
            "Error fetching data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCourse();
    fetchOrder();
  }, [location.state.id]);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="">
        <div className="bg-[#EBF3FC] h-12 lg:h-[7rem] p-4">
          <div className="lg:mt-2 ms-8 lg:ms-36">
            <Link
              className="text-black text-[0.625rem] lg:text-sm font-bold flex items-center"
              //   onClick={handleGoBack}
              to="/"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              <p>Kembali</p>
            </Link>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="flex justify-center items-center w-[26rem] h-6 lg:w-[45rem] lg:h-[2.75rem] bg-[#FF0000] rounded-2xl mt-2 text-white font-bold text-[0.625rem] lg:text-sm">
              <p>Selesaikan Pembayaran sampai 10 Maret 2023 12:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start">
        <div className="flex lg:hidden justify-center items-center m-4">
          <button className="w-[20rem] h-10 bg-[#FF0000] text-white font-bold text-middle text-xs rounded-3xl p-1 px-4">
            <a href="/paymentsuccess">Bayar dan Ikuti Kelas Selamanya</a>
          </button>
        </div>
        <div>
          <div className="m-4">
            <details className="w-[20rem] md:w-[30rem] lg:w-[32rem] bg-[#3C3C3C] text-white p-2 rounded-xl shadow-md group mx-auto overflow-hidden max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500 ">
              <summary className="text-sm outline-none cursor-pointer font-semibold marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center ">
                Bank Transfer
              </summary>

              <hr className="my-2 scale-x-150" />

              <div className="flex flex-col items-center justify-center text-[0.625rem] lg:text-xs text-black -m-4 -mt-2 p-4 bg-gray-50">
                <div className=" ">
                  <div className="flex flex-col my-4 ">
                    <label htmlFor="name" className="font-bold text-black">
                      Account Number
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="4480 0000 0000 0000"
                      className="flex py-1 bg-transparent border-b-2 border-gray-400 focus:border-black text-gray-600 placeholder-gray-400 outline-none"
                      value={bankTransferData.accountNumber}
                      onChange={(e) => {
                        setBankTransferData({
                          ...bankTransferData,
                          accountNumber: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-col my-4">
                    <label htmlFor="name" className=" font-bold text-black">
                      Account Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="flex py-2 bg-transparent border-b-2 border-gray-400 focus:border-black text-gray-600 placeholder-gray-400 outline-none"
                      value={bankTransferData.accountName}
                      onChange={(e) => {
                        setBankTransferData({
                          ...bankTransferData,
                          accountName: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-row my-4 gap-4">
                    <div className="">
                      <label htmlFor="name" className=" font-bold text-black">
                        Bank Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Binar Bank"
                        className="flex py-2 bg-transparent border-b-2 border-gray-400 focus:border-black text-gray-600 placeholder-gray-400 outline-none"
                        value={bankTransferData.bankName}
                        onChange={(e) => {
                          setBankTransferData({
                            ...bankTransferData,
                            bankName: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="">
                      <label htmlFor="name" className=" font-bold text-black">
                        Total Transfer
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="123,456"
                        className="flex py-2 bg-transparent border-b-2 border-gray-400 focus:border-black text-gray-600 placeholder-gray-400 outline-none"
                        value={bankTransferData.totalTransfer}
                        onChange={(e) => {
                          setBankTransferData({
                            ...bankTransferData,
                            totalTransfer: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
          <div className="m-4">
            <details className="w-[20rem] md:w-[30rem] lg:w-[32rem] bg-[#6148FF] text-white p-2 rounded-xl shadow-md group mx-auto overflow-hidden max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500 ">
              <summary className="text-sm outline-none cursor-pointer font-semibold marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center ">
                Credit Card
              </summary>

              <hr className="my-2 scale-x-150" />

              <div className="flex flex-col items-center justify-center text-[0.625rem] lg:text-xs text-black -m-4 -mt-2 p-4 bg-gray-50">
                <img src={payment_option} alt="" />

                <div className=" mt-4  ">
                  <div className="flex flex-col my-4 ">
                    <label htmlFor="name" className="font-bold text-black">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="4480 0000 0000 0000"
                      className="flex py-1 bg-transparent border-b-2 border-gray-400 focus:border-black text-gray-600 placeholder-gray-400 outline-none"
                      value={creditCardData.cardNumber}
                      onChange={(e) => {
                        setCreditCardData({
                          ...creditCardData,
                          cardNumber: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-col my-4">
                    <label htmlFor="name" className=" font-bold text-black">
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="flex py-2 bg-transparent border-b-2 border-gray-400 focus:border-black text-gray-600 placeholder-gray-400 outline-none"
                      value={creditCardData.cardHolderName}
                      onChange={(e) => {
                        setCreditCardData({
                          ...creditCardData,
                          cardHolderName: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-row my-4 gap-4">
                    <div className="">
                      <label htmlFor="name" className=" font-bold text-black">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="000"
                        className="flex py-2 bg-transparent border-b-2 border-gray-400 focus:border-black text-gray-600 placeholder-gray-400 outline-none"
                        value={creditCardData.cvv}
                        onChange={(e) => {
                          setCreditCardData({
                            ...creditCardData,
                            cvv: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="">
                      <label htmlFor="name" className=" font-bold text-black">
                        Expiry date
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="07/24"
                        className="flex py-2 bg-transparent border-b-2 border-gray-400 focus:border-black text-gray-600 placeholder-gray-400 outline-none"
                        value={creditCardData.expiryDate}
                        onChange={(e) => {
                          setCreditCardData({
                            ...creditCardData,
                            expiryDate: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>

        <div className="flex flex-col p-6 m-4 bg-white lg:w-[25rem] lg:h-[20rem] mt-4 rounded-2xl border border-[#6148FF] shadow-lg">
          <div className="text-xs md:text-xs lg:text-sm font-bold mb-4">
            <p>Pembayaran Kelas</p>
          </div>
          <div>
            {course && Object.keys(course).length > 0 && (
              <Card
                img={course.category.image}
                classCategory={course.category.category}
                classesName={course.name}
                classMentor={course.facilitator}
              />
            )}
          </div>
          <div className="flex flex-row justify-between gap-6 mt-4 mx-4 text-xs ">
            <div>
              <p className="font-bold mb-1">Harga</p>
              <p>Rp {course.price}</p>
            </div>
            <div>
              <p className="font-bold mb-1">PPN 11%</p>
              <p>Rp {calculatePPN().toLocaleString()}</p>
            </div>
            <div>
              <p className="font-bold mb-1">Total Bayar</p>
              <p className="font-bold text-[#6148FF]">
                Rp {calculateTotalPrice().toLocaleString()}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center m-4">
            <button
              className="lg:w-72 lg:h-8 bg-[#FF0000] text-white text-middle font-bold text-[0.625rem] lg:text-xs rounded-2xl p-1 px-2"
              type="submit"
              onClick={handlePaymentButtonClick}
            >
              <Link to="/paymentsuccess" state={{ id: course.id }}>
                <p>Bayar dan Ikuti Kelas Selamanya</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
