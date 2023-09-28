import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { database } from './Firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'

import './App.css';

const Login = () => {

    const history=useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const email=e.target.email.value
    const password=e.target.password.value

    createUserWithEmailAndPassword(database,email,password).then(data =>{
        console.log(data,"authData")
        history('/weather')
    })

  }
   

  return (
    <div>
      <center>
        <form onSubmit={submitHandler} className='Login'>
          <label className='label'>Email</label> <br />
          <input type="email" name="email"  /><br/>
          <label className='label'>Password</label> <br />
          <input type="password" name="password"  /><br/>
          <input type='submit' value="Login" /><br /><br />
        </form>
        <Link to='/'>Back to home</Link>
      </center>
    </div>
  );
};

export default Login;
