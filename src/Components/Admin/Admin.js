import React from "react";
import "./AdminModule.css";
import logo from '../image/logo.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import vehicleimg from '../image/vahicle.jpg';
import driver from '../image/driver.jpg';
import booking from '../image/booking.jpg';
import client from '../image/client.jpg';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function TaxiBooking() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    // Navigate to the Booking component
    navigate("../AdminAddVehical");
  };

  const handleClientsClick = () => {
    // Navigate to the Clients component
    navigate("../AdminAddClients");
  };

  const handleVehicleClick = () => {
    // Navigate to the Vehicle component
    navigate("../AdminAddVehical");
  };

  const handleDriversClick = () => {
    // Navigate to the Drivers component
    navigate("../AdminAddDrives");
  };

  return (
    <div>
      <div className="logo"><img src={logo} alt="logo" /></div>
      <div className="DashBody">
        <div className="col1">
          <div className="card1">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={vehicleimg} />
              <Card.Body>
                <Button variant="primary" onClick={handleVehicleClick}>Vehicle</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="card1">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={client} />
              <Card.Body>
                <Button variant="primary" onClick={handleClientsClick}>Clients</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="cl2">
          <div className="card1">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={driver} />
              <Card.Body>
                <Button variant="primary" onClick={handleDriversClick}>Drivers</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="card1">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={booking} />
              <Card.Body>
                <Button variant="primary" onClick={handleBookingClick}>Booking</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="DashLink">
        <h3><Link to="/Admin">Dashboard</Link></h3>
        <h3><Link to="/Addvehicle">Vehicle</Link></h3>
        <h3><Link to="/AdminAddDrives">Drivers</Link></h3>
        <h3><Link to="/AdminAddClients">Clients</Link></h3>
        <h3><Link to="/AdminBokingDetails">Booking</Link></h3>
        <h3><Link to="/">LogOut</Link></h3>
      </div>
    </div>
  );
}
