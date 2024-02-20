import { useState } from 'react'
import './App.css'

function App() {

  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
    confirm_pass: ""
  });

  const input = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormdata((prev) => {
      return { ...prev, [name]: value };
    });
  };


  return (
    <div className="main">
      <div className="container">
        <h1>Registration Form</h1>
        <br />
        <input value={formdata.username} onChange={input} name="username" autoComplete='off' type="text" placeholder='Name ' className='name' />
        <br />
        <input value={formdata.email} onChange={input} name="email" type="email" placeholder='Email ' className='name' />
        <br />
        <input value={formdata.password} onChange={input} name="password" type="password" placeholder='Password ' className='name' />
        <br />
        <input value={formdata.confirm_pass} onChange={input} name="confirm_pass" type="text" placeholder='Confirm Password ' className='name' />
        <br />
        <button>Register Account</button>
        <br />
        <br />
        <br />
        <br />
        <p>{`My name is ${formdata.username} and my email id is ${formdata.email}`}</p>
      </div>
    </div>
  )
}

export default App
