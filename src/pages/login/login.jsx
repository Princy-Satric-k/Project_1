import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useWeblogin } from "../../query/hooks/AuthHooks";
const Login = () => {
  const [user,setUser]=useState({
    email:"",
    password:""
  });
  const {
    mutate: appLogin,
    data: appLoginResponse,
    isLoading: appLoading
  } = useWeblogin()

  const createHandler = (e) =>{
    e.preventDefault()

    console.log(user);
    // setUser({  email: "", password: "" });
    
//    const formData = {
//      email: "eve.holt@reqres.in",
//     password: "cityslicka"

//  }

 appLogin(user, {
      onSuccess: (response) => {
        console.log('res',response)
      },
      onError: (error) => {
          console.log(error)
      }
 });


  }
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  // if(appLoading)
  // return <h2>loading............</h2>
  return (
    <div className="">
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <Form className="color p-5">
            <Link to='/home' className="text-decoration-none">
            <h5 className="mb-4 text-white">Login Form</h5>
            </Link>
            <Form.Group className="mb-3 text-white " >
              <Form.Label >Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" value={user.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3 text-white" >
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" value={user.password} onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit" className="me-3" onClick={createHandler}>
              Login
            </Button>
            <Link to='/register'>
            <Button variant="primary" type="submit">
              Sign-up
            </Button>
            </Link>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
