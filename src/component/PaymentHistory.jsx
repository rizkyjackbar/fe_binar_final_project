import React from "react";
import {
  MainNavbar,
  CardCategory,
  CardCourse,
  ButtonBuy,
  Button,
} from "../component";
import { hero, PM, UIUX, WEB, AND, DS, IOS } from "../assets";

const PaymentHistory = () => {
  return (
    <div className="PaymentHistory p-4">
      <div className="mb-4 text-center">
        <h1 className="font-bold">Riwayat Pembayaran</h1>
      </div>

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
        <ButtonBuy price={"20000"} />
      </CardCourse>
    </div>
  );
};

export default PaymentHistory;
