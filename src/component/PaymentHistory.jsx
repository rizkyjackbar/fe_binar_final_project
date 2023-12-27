import { Component } from "react";
import {
  CardCourse,
  ButtonPaid,
  ButtonPaidFailed,
  ButtonPaidWaiting,
} from "../component";
import { hero, PM, UIUX, WEB, AND, DS, IOS } from "../assets";

class PaymentHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentHistory: [],
    };
  }

  componentDidMount() {
    this.fetchPaymentHistory();
  }

  fetchPaymentHistory() {
    const token = localStorage.getItem("accessToken");

    // Memeriksa apakah ada data pembayaran
    if (this.state.paymentHistory.length > 0) {
      // Mengambil courseId dari data pembayaran yang pertama
      const courseId = this.state.paymentHistory[0].course_id;

      console.log("Course ID from payment history:", courseId);

      fetch(
        `https://befinalprojectbinar-production.up.railway.app/api/orders?course_id=${courseId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("API Response:", data);

          if (Array.isArray(data)) {
            // Menampilkan orderId jika tersedia
            if (data.length > 0 && data[0].orderId) {
              console.log("Order ID:", data[0].orderId);
            } else {
              console.error("No orderId found in the API response.");
            }

            // Memperbarui state dengan data pembayaran
            this.setState({ paymentHistory: data });
          } else {
            console.error(
              "Format data from API is not valid. Expected an array."
            );
          }
        })
        .catch((error) => {
          console.error("Error fetching payment history:", error);
        });
    } else {
      console.error("No payment data available to fetch courseId.");
    }
  }

  render() {
    const { paymentHistory } = this.state;

    return (
      <div className="PaymentHistory p-4 d-flex flex-column align-items-center">
        <div className="mb-4 text-center">
          <h1 className="font-bold">Riwayat Pembayaran</h1>
        </div>

        <div className="d-flex justify-content-center flex-grow-1">
          {paymentHistory.length === 0 ? (
            <div className="text-center my-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 mx-16 rounded-lg shadow-lg">
              <p className="text-xl font-bold">Tidak Ada Pembayaran</p>
            </div>
          ) : (
            <div>
              {paymentHistory.map((payment, index) => (
                <CardCourse
                  key={index}
                  img={
                    payment.category === "UI/UX"
                      ? UIUX
                      : payment.category === "AND"
                      ? AND
                      : WEB
                  }
                  classCategory={payment.category}
                  classesName={payment.className}
                  rating={payment.rating}
                  classMentor={payment.mentor}
                  level={payment.level}
                  moduls={payment.moduls}
                  times={payment.times}
                >
                  {payment.status === "success" && <ButtonPaid />}
                  {payment.status === "failed" && <ButtonPaidFailed />}
                  {payment.status === "waiting" && <ButtonPaidWaiting />}
                </CardCourse>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PaymentHistory;
