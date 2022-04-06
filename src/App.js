import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [bedTime, setBedTime] = useState();
  const [numHour, setNumHour] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();

  const handleClick = () => {
    let hour = parseFloat(bedTime) + parseFloat(numHour) * 1.5 + 0.233333;
    let minute;
    console.log(hour);
    if (hour > 24) {
      hour = hour - 24 * Math.floor(hour / 24);
    }
    minute = (hour - Math.floor(hour)) * 60;
    setHour(Math.floor(hour));
    setMinute(minute.toFixed(2));
  };

  return (
    <>
      <form className="form">
        <h1>Giờ đi ngủ</h1>
        <input
          onChange={(e) => {
            setBedTime(e.target.value);
          }}
          className="form-control"
          type="text"
          name="bedTime"
        />

        <h1>Số chu kỳ giấc ngủ (từ 3 -{">"} 6 chu kỳ là tốt nhất)</h1>
        <input
          onChange={(e) => setNumHour(e.target.value)}
          className="form-control"
          type="text"
          name="numHour"
        />

        <button className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>

        <h1>
          Thời gian thức giấc: {hour} giờ {minute} phút
        </h1>
      </form>
    </>
  );
}
