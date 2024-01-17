import React, { useState } from "react";
import './SetTimeModule.css';
import pagecar from "../image/pagecar.png";

export default function BookingDetails() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [nextClicked, setNextClicked] = useState(false);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleNextClick = () => {
    setNextClicked(true);
   
  };

  return (
    <div>
      <div className="PageCar">
        <div className="p-5">
          <h2>Set Time</h2>
          <div className="custom-input">
            <label>Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="custom-input" style={{ marginLeft: "20px" }}>
            <label>Time:</label>
            <input
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
            />
          </div>
          <button onClick={handleNextClick} className="custom-button">
            Next
          </button>
          {nextClicked && (
            <p>You clicked "Next" with Date: {selectedDate} and Time: {selectedTime}</p>
          )}
        </div>
        <img src={pagecar} alt="car" />
      </div>
    </div>
  );
}
