import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Providers/AuthProvider';

const Register = () => {
  const naveget =useNavigate()
  const loction =useLocation()
  const from =loction?.state?.from?.pathname  ||'/'

  const {user,creatUser} = useContext(AuthContex)

  const handelReg =event=>{
    event.preventDefault();
    const form =event.target;
    const name =form.name.value; 
    const photo =form.photo.value;
    const email =form.email.value;
    const password =form.password.value;
    console.log(name,photo, email,password)

    if(!/(?=.*[!@#$%^&*])/.test(password)){
      alert('plese add some creset')
      return
  }
  else if(!/(?=.*[0-9])/.test(password)){
      alert('add some number')
      return
  }
  else if(!/(?=.*[A-Z])/.test(password)){
      alert('add some A-Z capital leter')
      return
  }
  else if(password.length<8){
      alert('munimum 8 leter add plese')
      return
  }
    creatUser(email,password)
    .then(rusult=>{
      const loguser =rusult.user
      naveget(from,{replace: true})
      form.reset('')
      alert(' Register successfully')
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
        <Form.Control type="text" name='photo' placeholder="Enter Your Photo Url"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password"  required/>
        <Form.Text className="text-muted">
        Password requirements (“2TrI:tU&h$;&Ins@tU”.)
        </Form.Text>
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