import React, { useState } from "react";
import './SetTimeModule.css';
import pagecar from "../image/pagecar.png";
import { useNavigate } from "react-router-dom";
import { useBooking } from '../BookingContext/BookingContext';

export default function SetTime() {
  const [nextClicked, setNextClicked] = useState(false);
  const navigate = useNavigate();
  const { date, time, setSelectedDate, setSelectedTime } = useBooking();

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleNextClick = () => {
    setNextClicked(true);
    // You can perform further actions here when the "Next" button is clicked.
    navigate("../CBookingetails");
  };

  return (
    <div>
      <div className="PageCar">
        <div className="p-5">
        <h2>Set Time</h2>
          <div className="set">
            
            <div className="custom-input">
              <label>Date:</label>
              <input
                type="date"
                value={date}
                onChange={handleDateChange}
              />
            </div>
            <div className="custom-input" style={{ marginLeft: "20px" }}>
              <label>Time:</label>
              <input
                type="time"
                value={time}
                onChange={handleTimeChange}
              />
            </div>
          </div>
          <button onClick={handleNextClick} className="custom-button">
            Next
          </button>
          {nextClicked && (
            <p>You clicked "Next" with Date: {date} and Time: {time}</p>
          )}
        </div>
       
      </div>
    </div>
  );
}
