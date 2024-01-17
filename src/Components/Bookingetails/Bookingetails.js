import React, { useState } from "react";
import { Link } from "react-router-dom";
import './BookingetailsModule.css';
import pagecar from "../image/pagecar.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function BookingDetails(){
  const [Arrival,setArrval] = useState("")
  const [Destination,setDestination] = useState("")
  const [Members,setMembers] = useState("")
  const [Contact,setContact] = useState("")
    return(
        <div>
            <div className="PageCar">
                <div className="formBody">
                  <Form>
                    <div className="form-row">
                      <div className="col">
                        <h3>Arrival</h3>
                        <Form.Control type="text" placeholder="" controlId="Arrival" 
                         onChange={(e) => setArrval(e.target.value)}
                         />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="col">
                        <h3>Destination</h3>
                        <Form.Control type="text" placeholder="" controlId="Destination" 
                        onChange={(e) => setDestination(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="col">
                        <h3>Members</h3>
                        <Form.Control type="text" placeholder="" controlId="Members" 
                        onChange={(e) => setMembers(e.target.value)}/>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="col">
                        <h3>Contact Num</h3>
                        <Form.Control type="text" placeholder="" controlId="ContactNum" 
                        onChange={(e) => setContact(e.target.value)}/>
                      </div>
                    </div>

                    <Button variant="primary" type="submit" className="custom-button">
                      Next
                    </Button>
                  </Form>
                </div>
                <img src={pagecar} alt="car"></img>
            </div>
        </div>
    );
}
