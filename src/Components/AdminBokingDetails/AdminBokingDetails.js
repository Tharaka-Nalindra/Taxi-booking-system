import React from "react";
import "./AdminBokingDetailsModule.css";
// import pagecar from "../image/pagecar.png";
import logo from '../image/logo.png'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';



export default function TaxiBooking(){
    return (
        <div>
            <div className="logo"><img src={logo} alt="logo"></img></div>
            <div className="AddClientDashBody">
                <h2>Clients</h2>
                <Button variant="primary">Add Client</Button>

            <div className="AddClientTableContainer">
              <Table responsive="xl">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Arrival</th>
                    <th>Destination</th>
                    <th>Members</th>
                    <th>Contact No</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Vahicle Category</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>1</td>
                    <td>matara</td>
                    <td>Colombo</td>
                    <td>03</td>
                    <td>0771491815</td>
                    <td>09/07/2023</td>
                    <td>12/30 PM</td>
                    <td>Car</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                  <td>1</td>
                    <td>matara</td>
                    <td>Colombo</td>
                    <td>03</td>
                    <td>0771491815</td>
                    <td>09/07/2023</td>
                    <td>12/30 PM</td>
                    <td>Car</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                  <td>1</td>
                    <td>matara</td>
                    <td>Colombo</td>
                    <td>03</td>
                    <td>0771491815</td>
                    <td>09/07/2023</td>
                    <td>12/30 PM</td>
                    <td>Car</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                  <td>1</td>
                    <td>matara</td>
                    <td>Colombo</td>
                    <td>03</td>
                    <td>0771491815</td>
                    <td>09/07/2023</td>
                    <td>12/30 PM</td>
                    <td>Car</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                  <td>1</td>
                    <td>matara</td>
                    <td>Colombo</td>
                    <td>03</td>
                    <td>0771491815</td>
                    <td>09/07/2023</td>
                    <td>12/30 PM</td>
                    <td>Car</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                  <td>1</td>
                    <td>matara</td>
                    <td>Colombo</td>
                    <td>03</td>
                    <td>0771491815</td>
                    <td>09/07/2023</td>
                    <td>12/30 PM</td>
                    <td>Car</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                </tbody>
              </Table>
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