import React from "react";
import Habit from "./components/Habit";
import SleepCycle from "./SleepCycle";

export default function App() {
  return (
    <>
      <div className="row">
        <SleepCycle className="col"/>
        <Habit className="col"/>
      </div>
    </>
  );
}
