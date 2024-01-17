import React, { useState } from "react";
import './CoustomerInput.css';
import pagecar from "../image/pagecar.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useBooking } from '../BookingContext/BookingContext';

export default function BookingDetails() {
  const [Arrival, setArrival] = useState("");
  const [Destination, setDestination] = useState("");
  const [Members, setMembers] = useState("");
  const [Contact, setContact] = useState("");
  const [Vehicle, setVehicle] = useState("");
  const navigate = useNavigate();
  const { setArrival: setBookingArrival, 
    setDestination: setBookingDestination, 
    setMembers: setBookingMembers,
    setContact: setBookingContact,
    setVehicle: setBookingVehicle } = useBooking();

  const handleNextClick = () => {
    
    setBookingArrival(Arrival);
    setBookingDestination(Destination);
    setBookingMembers(Members)
    setBookingContact(Contact)
    setBookingVehicle(Vehicle)
    navigate("../SetTime");
  };

  return (
    <div>
      <div className="PageCar">
        <div className="formBody">
          <div className="InputTable">
            <Table responsive="xl">
              <tbody>
                <tr>
                  <td>Arrival</td>
                  <td>:<input type="text" onChange={(e) => setArrival(e.target.value)} /></td>
                </tr>
                <tr>
                  <td>Destination</td>
                  <td>:<input type="text" onChange={(e) => setDestination(e.target.value)} /></td>
                </tr>
                <tr>
                  <td>Members</td>
                  <td>:<input type="text" onChange={(e) => setMembers(e.target.value)} /></td>
                </tr>
                <tr>
                  <td>Contact Num</td>
                  <td>:<input type="text" onChange={(e) => setContact(e.target.value)} /></td>
                </tr>
                <tr>
                  <td>Vehicle Category</td>
                  <td>: <Dropdown as={ButtonGroup}>
                    <Button variant="">Select Vehicle</Button>
                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                    <Dropdown.Menu onSelect={(eventKey) => setVehicle(eventKey)}>
                      <Dropdown.Item eventKey="Car">Car</Dropdown.Item>
                      <Dropdown.Item eventKey="Bus">Bus</Dropdown.Item>
                      <Dropdown.Item eventKey="Van">Van</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <Form>
            <Button onClick={handleNextClick} variant="primary" type="button" className="custom-button">
              Next
            </Button>
          </Form>
        </div>
       
      </div>
    </div>
  );
}
