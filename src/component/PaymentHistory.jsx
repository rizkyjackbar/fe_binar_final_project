import React from "react";
import {
  CardCourse,
  ButtonPaid,
  ButtonPaidFailed,
  ButtonPaidWaiting,
} from "../component";
import { hero, PM, UIUX, WEB, AND, DS, IOS } from "../assets";

const PaymentHistory = () => {
  return (
    <div className="PaymentHistory p-4">
      <div className="mb-4 text-center">
        <h1 className="font-bold">Riwayat Pembayaran</h1>
      </div>

      <div>
        <CardCourse
          img={UIUX}
          classCategory={"UI/UX"}
          classesName={"Belajar Web Designer dengan Figma"}
          rating={4.5}
          classMentor={"Angela Doe"}
          level={"Intermediate Level"}
          moduls={10}
          times={120}
        >
          <ButtonPaid />
        </CardCourse>

        <div className="my-3"></div>

        <CardCourse
          img={AND}
          classCategory={"AND"}
          classesName={"Belajar Basic Android Studio"}
          rating={4.5}
          classMentor={"Angela Doe"}
          level={"Intermediate Level"}
          moduls={10}
          times={120}
        >
          <ButtonPaidFailed />
        </CardCourse>

        <div className="my-3"></div>

        <CardCourse
          img={WEB}
          classCategory={"WEB"}
          classesName={"Belajar Web Designer"}
          rating={4.5}
          classMentor={"Angela Doe"}
          level={"Intermediate Level"}
          moduls={10}
          times={120}
        >
          <ButtonPaidWaiting />
        </CardCourse>
      </div>
    </div>
  );
};

export default PaymentHistory;
