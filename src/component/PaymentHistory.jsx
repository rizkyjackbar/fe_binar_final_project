import { Component } from "react";
import {
  CardCourse,
  ButtonPaid,
  ButtonPaidFailed,
  ButtonPaidWaiting,
} from "../component";

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

    fetch(`https://befinalprojectbinar-production.up.railway.app/api/orders`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Complete API Response:", data);

        if (data.status === "OK") {
          const paymentHistory = data.data;

          this.setState({ paymentHistory });
        } else {
          console.error("API request failed. Status:", data.status);
        }
      })
      .catch((error) => {
        console.error("Error fetching payment history:", error);
      });
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
                <div key={index} className="mb-3">
                  <CardCourse
                    img={payment.course.category.image}
                    idCourse={payment.course.id}
                    classCategory={payment.course.category.category}
                    classesName={payment.course.name}
                    rating={payment.course.rating}
                    classMentor={payment.course.mentor}
                    level={payment.course.level}
                    moduls={payment.course.moduls}
                    times={payment.course.times}
                  >
                    {payment.status === "SUDAH BAYAR" && <ButtonPaid />}
                    {payment.status === "BELUM BAYAR" && <ButtonPaidFailed />}
                    {payment.status === "MENUNGGU PEMBAYARAN" && (
                      <ButtonPaidWaiting />
                    )}
                  </CardCourse>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PaymentHistory;
