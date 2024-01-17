import React from "react";
import { Link } from "react-router-dom";

import "./TaxiBookingModule.css";
import pagecar from "../image/pagecar.png"
import logo from "../image/logo.png"
// import { Link } from "react-router-dom";

export default function TaxiBooking(){
    return (
        <div>
            <div className="Tlogo"><img src={logo} alt="car"></img></div>

            <div className="SLlink">
                <h2><Link to="/signup">Registration</Link></h2>
                <h2><Link to="/LogIn">LogIn</Link></h2>
            </div>


            <div className="welcome">
                <h1>Welcome!</h1>
            </div>

            

        </div>
    


    );
}
