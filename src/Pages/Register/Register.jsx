import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Providers/AuthProvider';

const Register = () => {

  const {user,creatUser} = useContext(AuthContex)

  const handelReg =event=>{
    event.preventDefault();
    const form =event.target;
    const name =form.name.value; 
    const photo =form.photo.value;
    const email =form.email.value;
    const password =form.password.value;
    console.log(name,photo, email,password)
    creatUser(email,password)
    .then(rusult=>{
      const loguser =rusult.user
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
            <Form onSubmit={handelReg}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URl</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Enter Your Photo Url" />
      </Form.Group>

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
        <Form.Check type="checkbox" label="Accept Privacy Policy" />
      </Form.Group>
      <p> Already have an account please login <Link to='/login'> Login</Link></p>
      <Button variant="primary" type="submit">
      Register
      </Button>
    </Form>
            </Container>
            
        </div>
    );
};

export default Register;