import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Providers/AuthProvider';

const Login = () => {
  const{loginUser}=useContext(AuthContex)
  const loction =useLocation()
  const naveget =useNavigate()

  const handelLogin =event=>{
    event.preventDefault();
    const form =event.target;
    const email =form.email.value;
    const password =form.password.value;
    console.log(email,password)
    loginUser(email,password)
    .then(rusult=>{
      const loguser =rusult.user
      naveget(`/recepis`)
      console.log(loguser)
      form.reset('')
    })
    .catch(error=>{
      alert(error.message)
    })


  }
    return (
        <div>
            <Container className='w-25 mx-auto mt-5'>
            <Form onSubmit={handelLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label=" Accept Privacy Policy" required />
      </Form.Group>
      <p>You dont have acount register Now<Link to='/register'> Register</Link><br/></p>
      
      <Button variant="primary" type="submit">Login</Button>
    </Form>
            </Container>
            
        </div>
    );
};

export default Login;