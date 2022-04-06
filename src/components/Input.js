import React from "react";
import "../css/SleepCycle.css";

export default function Input(props) {
  const { label, setState } = props;
  return (
    <>
      <label className="label">{label}</label>
      <input
        className="form-control mb-4"
        type="text"
        name="bedTime"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </>
  );
}
