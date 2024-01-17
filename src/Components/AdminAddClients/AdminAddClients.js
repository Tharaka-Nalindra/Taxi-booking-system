import React from "react";
import "./AdminAddClientsModule.css";
// import pagecar from "../image/pagecar.png";
import logo from '../image/logo.png'
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";



export default function TaxiBooking(){
    return (
        <div>
            <div className="logo"><img src={logo} alt="logo"></img></div>
              <div className="AddclientDashBody">
                  <h2>Clients</h2>
                  <Button variant="primary">Add Client</Button>

                  <div className="AddclientTableContainer">
                    <Table responsive="xl">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Contact No</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Sanjaya Nuwan</td>
                          <td>sanjayanuwan@gmail.com</td>
                          <td>0771491815</td>
                          <td><Button variant="primary">Remove</Button></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Sanjaya Nuwan</td>
                          <td>sanjayanuwan@gmail.com</td>
                          <td>0771491815</td>
                          <td><Button variant="primary">Remove</Button></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Sanjaya Nuwan</td>
                          <td>sanjayanuwan@gmail.com</td>
                          <td>0771491815</td>
                          <td><Button variant="primary">Remove</Button></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Sanjaya Nuwan</td>
                          <td>sanjayanuwan@gmail.com</td>
                          <td>0771491815</td>
                          <td><Button variant="primary">Remove</Button></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Sanjaya Nuwan</td>
                          <td>sanjayanuwan@gmail.com</td>
                          <td>0771491815</td>
                          <td><Button variant="primary">Remove</Button></td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Sanjaya Nuwan</td>
                          <td>sanjayanuwan@gmail.com</td>
                          <td>0771491815</td>
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