import React from 'react';
import '../../Component/Login/Login.css';
import { MdEmail, MdLock,MdArrowForward} from "react-icons/md";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Login-app">
      <header>
        <div className='container1'>
          <form className='Login-form'>
            <div className="div">
              <div className="div-2">
                <div className="div-3">
                  <div className="div-4">Login</div>
                </div>

                <div className="div-5"><MdEmail />Email</div>
                <input type="email" className="div-6" placeholder='Email'required />

                <div className="div-7"><MdLock />Password</div>
                <input type="password" className="div-8" placeholder='Password'required />

                <div className="div-9">
                  <div className="div-10">
                    <Link to='/forgot' className="div-12">Forgot Password?</Link>
                  </div>
                </div>
                <button type="submit" className="div-13">Login</button>
                <br />
                <div className='div-14'>Have no account?
                  <Link to='/signup' className="div-15">Sign Up</Link>
                </div>
                <div className='back'>
                  Return to homepage <MdArrowForward/>
                  <Link to='/' className='back-to-home'>  Home</Link>

                </div>
              </div>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Login;
