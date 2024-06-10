import React from 'react';
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Forgot.css';

function Forgot() {
  return (
    <div className="Forgot-app">
      <header>
        <div className='container'>
          <form className='Forgot-form'>
            <div className="forgot-div">
              <div className="div">
                <div className="div2">
                  <div className="div3">Forgot Password</div>
                </div>

                <div className="email"><MdEmail />Email</div>
                <input type="email" className="div4" placeholder='Email' required/>

                <button type="submit" className="div5">Send Reset Link</button>
                <br />
                <div className='password'>Remember your password?
                  <Link to='/login' className="div6">Login</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Forgot;
