import React from "react";
import "./AddvehicleModule.css";
import logo from '../image/logo.png'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';



export default function TaxiBooking(){
    return (
        <div>
            <div className="logo"><img src={logo} alt="logo"></img></div>
            <div className="AddVehiclesDashBody">
                <h2>Vehicles</h2>
                <Button variant="primary">Add Vehicles</Button>

            <div className="AddVehiclesTableContainer">
              <Table responsive="xl">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Vehicle No</th>
                    <th>Category</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CAU-3546</td>
                    <td>Car</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>CAU-3546</td>
                    <td>Car</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>CAU-3546</td>
                    <td>Car</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>CAU-3546</td>
                    <td>Car</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>CAU-3546</td>
                    <td>Car</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>CAU-3546</td>
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
