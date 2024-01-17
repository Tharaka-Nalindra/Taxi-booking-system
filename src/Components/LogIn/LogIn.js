import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import './LogInModule.css';
import pagecar from "../image/pagecar.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/CoustomerInput");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="LogInPageCar">
        <div className="LogInformBody">
          
          <Form onSubmit={signIn}>
          <h2>LogIn</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="LogIn-custom-button">
              LogIn
            </Button>
          </Form>
          {error && <p>{error}</p>}
          <p>
            Don't have an account? <Link to="/SignUp">Sign up here</Link>
          </p>
        </div>
        
      </div>
    </div>
  );
}
