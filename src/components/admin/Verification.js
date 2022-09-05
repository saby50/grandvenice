import React,{useState,useEffect} from "react";
import {Row,Form, FormGroup, Button} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";

const Verify = () => {
  let history = useHistory();
  const [userData, setuserData] = useState({username: '',password: ''});

  function handleInputChange(e){
      setuserData({
        ...userData,
        [e.target.name]: e.target.value,

      })



  }

  function HandleSubmit(e){
      e.preventDefault();
          if((userData.username === "") && (userData.password === "")){
                alert("enter username and password ");
          }

      else if((userData.username === "admin") && (userData.password === "admin")){
        localStorage.setItem("isAuthenticated","true");
        history.push("/admin");

      }
      else{
        alert("Invalid username or password");

      }

  }


  return (
           <div className="Login">
               <Row>
                   <Form onSubmit={HandleSubmit}>
                       <Form.Group controlId="email">
                           <Form.Label>Email</Form.Label>
                           <Form.Control type="text" name="username" placeholder="Enter your username" onChange={handleInputChange} />
                       </Form.Group>

                       <Form.Group controlId="password">
                           <Form.Label>Password</Form.Label>
                           <Form.Control type="password" name="password" placeholder="Enter your password" onChange={handleInputChange} />
                        </Form.Group>
                       <Button type="submit" bsStyle="primary">Sign-In</Button>
                   </Form>
               </Row>
           </div>
       )

}

export default Verify;
