import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useWebRegister } from '../../query/hooks/AuthHooks'
const Register = () => {
  const {
    mutate: appRegister,
    data: appRegisterResponse,
    isLoading: appLoading
  } = useWebRegister()
const hanDler = (e)=>{
  e.preventDefault();
  const formData={
    email: "eve.holt@reqres.in",
    password: "pistol"
  }
  appRegister(formData, {
    onSuccess: (response) => {
      console.log('res',response)
    },
    onError: (error) => {
        console.log(error)
    }
});

}
  return (
    <div>
      <Container>
        <div className='d-flex flex-column justify-content-center align-items-center vh-100  ' >
      <Form className='color p-5 '>
        <h5 className='mb-3 text-white d-flex flex-row justify-content-center '>Sign-up</h5>
      <Form.Group className="mb-3 text-white" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
        
      </Form.Group>
      <Form.Group className="mb-3 text-white" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter phone number" />
       
      </Form.Group>
      <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className=" text-white">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button className='btn rounded-pill btn-primary me-3 ' type="submit" onClick={hanDler}>
        Submit
      </Button>
      <Link to='/login'>
      <Button className='btn rounded-pill btn-primary ' >Login</Button>
      </Link>
    </Form>
    </div>
      </Container>
    </div>
  )
}

export default Register