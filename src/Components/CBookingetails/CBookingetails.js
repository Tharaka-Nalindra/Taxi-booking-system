import React from "react";
import "./CBookingetailsModeule.css";
import pagecar from "../image/pagecar.png";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useBooking } from '../BookingContext/BookingContext';
import { useNavigate } from "react-router-dom";

export default function TaxiBooking(){
    const { arrival, destination, members, contact, vehicle, date, time } = useBooking();
    const navigate = useNavigate(); // Get the navigate function

    const handleConfirmClick = () => {
        // You can perform any necessary actions here before navigating
        navigate("../CancelBooking"); // Navigate to the Home.js page
    };
    return (
        <div>
            <div className="PageCar">
             
            </div>

            <div className="InputTableContainer">
              <Table responsive="xl">
                <thead>
                  <tr>
                    <td>Arrival</td>
                    <td>: {arrival}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Destination</td>
                    <td>: {destination}</td>
                  </tr>
                  <tr>
                    <td>Members</td>
                    <td>: {members}</td>
                  </tr>
                  <tr>
                    <td>Contact Num</td>
                    <td>: {contact}</td>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td>:{date} </td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>: {time}</td>s
                  </tr>
                  <tr>
                    <td>Vehicle category</td>
                    <td>: {vehicle}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Form>
            <Button variant="primary" type="submit" className="custom-button-Input" onClick={handleConfirmClick}>
                      Confirm
            </Button>
            </Form>
        </div>
    );
}
