import React from "react";
import "./HomeModule.css";
import { Link } from "react-router-dom";
import Nav from '../Navbar/Nav';

export default function TaxiBooking(){
    return (
        <div>
            <div><Nav/></div>

            <div className="welcome">
                <h1><Link to="/CoustomerInput">Book Now</Link></h1>
            </div>

            

        </div>
    


    );
}
