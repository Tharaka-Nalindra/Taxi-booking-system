import React from "react";
import "./AdminDashModule.css";
import logo from '../image/logo.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function TaxiBooking(){
    return (
        <div>
            <div className="logo"><img src={logo} alt="logo"></img></div>
            <div className="DashBody">
                <h2>aaaaaaaaaaa</h2>
                <div className="col1">
                    <div className="card1">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Vehicle</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="card1">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Clients</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="cl2">
                    <div className="card1">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Drivers</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="card1">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Booking</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="DashLink">
                <h3>Dashboard</h3>
                <h3>Vahicle</h3>
                <h3>Drivers</h3>
                <h3>Clients</h3>
                <h3>Booking</h3>
                <h3>LogOut</h3>
                {/* <ul>
                    <li>Dashboard</li>
                    <li>Vahicle</li>
                    <li>Drivers</li>
                    <li>Clients</li>
                    <li>Booking</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>LogOut</li>
                </ul> */}
            </div>
 
        </div>
    


    );
}
