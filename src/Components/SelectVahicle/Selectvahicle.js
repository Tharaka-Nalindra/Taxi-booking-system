import React from "react";
import "./SelectvahicleModule.css";
import pagecar from "../image/pagecar.png";
import logo from "../image/logo.png";
import car from "../image/car.png";
import van from "../image/van.jpg";
import bus from "../image/bus.jpeg";
import Button from "react-bootstrap/Button";

export default function SelectVehicle() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="car" />
      </div>

      <div className="PageCar">
        <div className="SelectVehicleForm">
          <form>
            <h2>Select Vehicle</h2>
            <input
              type="radio"
              id="html"
              name="fav_vehicle"
              value="Car"
            />
            <label htmlFor="html">
              <img className="catagory" src={car} alt="car" />
            </label>


            <input
              type="radio"
              id="css"
              name="fav_vehicle"
              value="Van"
            />
            <label htmlFor="css">
              <img className="catagory" src={van} alt="van" />
            </label>


            <input
              type="radio"
              id="javascript"
              name="fav_vehicle"
              value="Bus"
            />
            <label htmlFor="javascript">
              <img className="catagory" src={bus} alt="bus" />
            </label>

            <div className="next">
            <Button
              variant="primary"
              type="submit"
              className="custom-button"
            >
              Next
            </Button>
            </div>
          </form>
        </div>
        <img src={pagecar} alt="car" />
      </div>
    </div>
  );
}
