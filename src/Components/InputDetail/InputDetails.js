import React, { useState } from "react";
import "./InputDetailsModule.css";
import pagecar from "../image/pagecar.png";
// import Nav from '../Navbar/Nav';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function TaxiBooking(){
  

    return (
        <div>
            <div className="PageCar">
                <img src={pagecar} alt="car" ></img>
            </div>

            <div className="TableContainer">
              <Table responsive="xl">
                <thead>
                  <tr>
                    <td>Arrival</td>
                    <td>:</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Destination</td>
                    <td>: </td>
                  </tr>
                  <tr>
                    <td>Members</td>
                    <td>: </td>
                  </tr>
                  <tr>
                    <td>Contact Num</td>
                    <td>: </td>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td>: </td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>:</td>
                  </tr>
                  <tr>
                    <td>Vehicle category</td>
                    <td>:</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Form>
            <Button variant="primary" type="submit" className="custom-button-confirm">
                      Confirm
            </Button>
            </Form>



        </div>
    );
}
