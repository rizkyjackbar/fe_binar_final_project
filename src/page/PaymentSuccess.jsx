import { Link, useLocation } from "react-router-dom";
import { cart_shopping } from "../assets";
import { Navbar } from "./../component";

const PaymentSuccess = () => {
  // const token = localStorage.getItem("accessToken");
  const location = useLocation();
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="">
        <div className="hidden lg:flex flex-col justify-center items-center bg-[#EBF3FC] h-[7rem] p-4">
          <div className="flex justify-center items-center w-[45rem] h-[2.75rem] bg-[#73CA5C] rounded-2xl mt-4 ">
            <div className="text-white font-bold text-[0.625rem] text-sm">
              <p>Terimakasih atas pembayaran transaksi</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-20 lg:mt-2">
          <div className="text-[#6148ff] text-lg lg:text-2xl font-bold m-4">
            <p>Selamat!</p>
          </div>

          <img src={cart_shopping} alt="cart" />
          <div className="text-center text-black text-[0.625rem] lg:text-sm m-4">
            <p className="font-bold">
              Transaksi pembayaran kelas premium berhasil!
            </p>
            <p> E-receipt telah dikirim ke email</p>
          </div>

          <Link to="/detailclass" state={{ id: location.state.id }}>
            <button
              type="button"
              className="w-40 h-8 lg:w-72 lg:h-8 bg-[#6148ff] text-white font-bold text-[0.625rem] lg:text-sm rounded-2xl p-1 px-4"
              onClick={handleMulai}
            >
              Mulai Belajar
            </button>
          </Link>
          <Link to="/">
            <button className="w-40 h-8 lg:w-72 lg:h-8 bg-white text-[#489CFF] font-bold text-[0.625rem] lg:text-sm rounded-2xl p-1 px-4">
              Kembali ke Beranda
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
