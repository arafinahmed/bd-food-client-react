import React, { useState } from 'react';
import { signInWithEmailAndPassword } from './fireBaseManager';
import './LoginArea.css';
import Button from 'react-bootstrap/Button';
const LoginArea = ({ updateLoginInfo }) => {
  const [emailNotValid, setEmailNotValid] = useState(false);
  const [passwordNotValid, setPasswordNotValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    let re = /\S+@\S+\.\S+/;
    setEmailNotValid(!re.test(email));
    setPasswordNotValid(!(password.length > 6 && /\d{1}/.test(password)));
    if(!emailNotValid && !passwordNotValid){
      signInWithEmailAndPassword(email, password)
      .then(res => {
        if(res.errorMessage){
          setErrorMessage(res.errorMessage);
        }
        else{
          setErrorMessage("");
          updateLoginInfo(res, true);
        }
      })
    }
    e.preventDefault();
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="login-area">
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="email">Email</label>
        <input className="form-control" type="text" name="email" placeholder="Your Email" required />
        {
          emailNotValid && <> <small style={{ color: "red" }}>Email is not valid</small></>
        }
        <br />
        <label htmlFor="password">Password</label>
        <input className="form-control" type="password" name="password" id="" placeholder="Your password" required />
        
        {
          passwordNotValid && <> <small style={{ color: "red" }}>Password length must be greater than 6 and contains digit</small></>

        }
        {
          errorMessage && <> <small style={{ color: "red" }}>{errorMessage}</small></>

        }
        <br/>
        <p className="d-flex justify-content-between">
        <span><input type="checkbox" id="check1"/> <label htmlFor="check1">Stay logged in</label></span>
        
        <a href="/login">Forgot Password</a>
        </p>
        
        <Button className="form-control"  type="submit">Login</Button>
      </form>
      </div>
    </div>
  );
};

export default LoginArea;