import React from "react";
import "./CancelBookingModule.css";
import pagecar from "../image/pagecar.png";
// import { Link } from "react-router-dom";
import Nav from '../Navbar/Nav';
import { useBooking } from '../BookingContext/BookingContext';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';



export default function TaxiBooking(){
    const { arrival, destination, members, contact, vehicle, date, time } = useBooking();
    const navigate = useNavigate(); 

    const handleHomeclick = () => {
        
        navigate("/Home"); 
    };
    return (
        <div>
           
           <div><Nav/></div>

            

            <div className="CancelTable">
              <Table responsive="xl">
                <tbody>
                  <tr>
                    <td>{arrival}</td>
                    <td>To</td>
                    <td>{destination}</td>
                    <td>{contact}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td><Button variant="primary" type="submit" className="cancel-button-cancel" > Cancel </Button></td>
                  </tr>
                  
                </tbody>
              </Table>
            </div>

            
            <Button
              variant="primary"
              type="submit"
              className="custom-button-clancelBooking"
              onClick={handleHomeclick}
            >
              Home
            </Button>
           

        </div>
    


    );
}
