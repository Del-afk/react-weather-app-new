import React, { useState } from "react";
import "./styles.css";
import "./searchbar";
import Searchbar from "./searchbar";
import TodayPart from "./today-part";

export default function App() {
  return (
    <div className="App">
      <Searchbar />
      <TodayPart />
    </div>
  );
}
