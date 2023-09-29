import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './App.css';


const Signup = () => {

    const history=useNavigate()
    const [data,setData]=useState({
        Name:'',
        Email:'',
        password:'',
})
const changehandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
}
const submithandle=e=>{
    e.preventDefault(); 
    fetch('https://my-new-project-23d1a-default-rtdb.firebaseio.com/data.json', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    .then((res) => {
        if (res.ok && data.password.length>=8) {
            console.log(data)
            alert("Data Submited Succesfully");
            console.log("data submitted successfully");
            history('/weather')
                }
                 else {
            alert('Error posting data');
        }
    })
    .catch((err) => console.log(err));
}

  return (
    <div>
      <center>
        <form onSubmit={submithandle}>
        <label className='label'>Name:</label><br />
            <input type="text" name="name" onChange={changehandler}/><br />
            <label className='label'>Email:</label><br />
            <input type="email" name="Email" onChange={changehandler}/><br />
            <label className='label'>Password:</label><br />
            <input type='password' name='password' onChange={changehandler}/><br />
            <input type='submit' value="Register"/>

        </form><br/>
        <Link to='/login'>Already have account</Link><br/><br/>
        <Link to='/'>Back to home</Link>
      </center>
     
    </div>
  )
}

export default Signup;