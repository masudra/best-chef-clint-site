import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  { AuthContex } from '../../Providers/AuthProvider';
import { FaGoogle,FaGithub} from 'react-icons/fa';
import { getAuth, signInWithPopup, GoogleAuthProvider, ProviderId, GithubAuthProvider } from "firebase/auth";
import app from '../../Firebase/firebase.config';



const Login = () => {
// google and github login 

const auth = getAuth(app);
const  googleProvider =new GoogleAuthProvider();
const  gitHubProvider =new GithubAuthProvider();

 
  const handelGoogle= ()=>{
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const logingGoogle =result.user
    })
    .catch(error =>{
      alert(error.message)
    })
  }

  const handelGithub= ()=>{
    signInWithPopup(auth, gitHubProvider)
    .then(result => {
      const logingGithub =result.user
    })
    .catch(error =>{
      alert(error.message)
    })
  }

// email password login
  const{loginUser}=useContext(AuthContex)
  const naveget =useNavigate()
  const loction =useLocation()
  // console.log('login page',loction)
  const from =loction?.state?.from?.pathname  ||'/login'


  const handelLogin =event=>{
    event.preventDefault();
    const form =event.target;
    const email =form.email.value;
    const password =form.password.value;
    // console.log(email,password)
    loginUser(email,password)
    .then(rusult=>{
      const loguser =rusult.user
      naveget(from,{replace: true})
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
     
      <p>You dont have acount register Now<Link to='/register'> Register</Link><br/></p>
      
      <Button variant="primary" type="submit">Login</Button>
      <br/>
      <Button onClick={handelGoogle}  variant="outline-primary mb-2 mt-3"><FaGoogle className='me-2'/>Login With Google</Button>
            <br/>
      <Button onClick={handelGithub} variant="outline-primary"><FaGithub  className='me-2'/>Login With GitHub</Button>

    </Form>
            </Container>
            
        </div>
    );
};

export default Login;