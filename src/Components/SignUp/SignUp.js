import React from "react";
// import { useNavigate } from "react-router-dom";
import './SignUpModule.css';
import pagecar from "../image/pagecar.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp =() => {

  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const signIn = async() =>{
    try {
    await createUserWithEmailAndPassword(auth, email,password);
    } catch (err){
      console.error(err);
    }
  };


  return (
    <div>
      <div className="SignUpPageCar">
        <div className="SignUpformBody">
          
          <Form>
          <h2>SignUp</h2>
            <Form.Group className="mb-3" controlId="formFName">
              <Form.Control type="text" placeholder="First Name" 
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLName">
              <Form.Control type="text" placeholder="Last Name"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" 
              onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password"  
              onChange={(e)=> setPassword(e.target.value)}/>
            </Form.Group>
            
            <h6><Link to="/LogIn">Alrady I have account</Link></h6>
            
            <Button onClick={signIn}  variant="" type="button" className="SignUp-custom-button">
              SignUp
            </Button>
          </Form>
        </div>

      </div>
    </div>
  );
};
