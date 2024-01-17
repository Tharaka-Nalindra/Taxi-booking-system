import React from "react";
import "./AdminAddDrivesModule.css";
import logo from '../image/logo.png'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";



export default function TaxiBooking(){
    return (
        <div>
            <div className="logo"><img src={logo} alt="logo"></img></div>
            <div className="AdminAddDrivesDashBody">
                <h2>Drives</h2>
                <Button variant="">Add Drivers</Button>

            <div className="AdminAddDrivesTableContainer">
              <Table responsive="xl">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Contact No</th>
                    <th>Age</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Sanjaya Nuwan</td>
                    <td>0771491815</td>
                    <td>25</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Sanjaya Nuwan</td>
                    <td>0771491815</td>
                    <td>25</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sanjaya Nuwan</td>
                    <td>0771491815</td>
                    <td>25</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Sanjaya Nuwan</td>
                    <td>0771491815</td>
                    <td>25</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Sanjaya Nuwan</td>
                    <td>0771491815</td>
                    <td>25</td>
                    <td><Button variant="primary">Remove</Button></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Sanjaya Nuwan</td>
                    <td>0771491815</td>
                    <td>25</td>
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
