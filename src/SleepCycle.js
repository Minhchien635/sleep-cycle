import React, { useState } from "react";
import "./SleepCycle.css";
import Input from "./components/Input";

export default function App() {
  const [bedTime, setBedTime] = useState("");
  const [minuteBedTime, setMinuteBedTime] = useState("");
  const [numHour, setNumHour] = useState("");
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();

  const handleClick = () => {
    console.log(bedTime, minuteBedTime, numHour);
    if (
      bedTime.length === 0 ||
      numHour.length === 0 ||
      minuteBedTime.length === 0
    ) {
      alert("Các trường không được để trống");
      return;
    }

    if (
      !bedTime.match(/^[0-9]+$/) ||
      !minuteBedTime.match(/^[0-9]+$/) ||
      !numHour.match(/^[0-9]+$/)
    ) {
      alert("Các trường nhập phải là số nguyên");
      return;
    }

    let hou =
      parseInt(bedTime) +
      parseInt(minuteBedTime) / 60 +
      parseInt(numHour) * 1.5 +
      0.233333;
    console.log(parseFloat(hou));
    if (!parseFloat(hou)) return;
    let min;
    console.log(hou);
    if (hou > 24) {
      hou = hou - 24 * Math.floor(hou / 24);
    }
    min = (hou - Math.floor(hou)) * 60;
    setHour(Math.floor(hou) + " giờ ");
    setMinute(min.toFixed() + " phút");
  };

  return (
    <>
      <h2 className="title">Chu kỳ giấc ngủ</h2>
      <div className="form">
        <h4 className="mb-4">
          Thời gian thức giấc: {hour} {minute}
        </h4>
        <Input label="Giờ bắt đầu ngủ" setState={setBedTime} />
        <Input label="Phút bắt đầu ngủ" setState={setMinuteBedTime} />
        <Input
          label="Số chu kỳ giấc ngủ (từ 3 -> 6 chu kỳ là tốt nhất)"
          setState={setNumHour}
        />
        <button
          className="form-control btn btn-primary mb-3 mt-3"
          onClick={handleClick}
        >
          Tính
        </button>
      </div>
    </>
  );
}
