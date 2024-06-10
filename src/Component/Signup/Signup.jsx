import React from 'react';
import './Signup.css'; // Tạo file CSS tương ứng nếu cần thiết
import { MdPerson, MdEmail, MdLock ,MdArrowForward} from "react-icons/md";
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="signup-container">
      <header>
      <form className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="email"><MdEmail /> Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password"><MdLock /> Password</label>
          <input type="password" id="password" name="password" placeholder="Password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password"><MdLock /> Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm password" required />
        </div>

        <button type="submit" className="signup-button">Create Account</button>
        <div className='div-14'>Already have account?
          <Link to='/login' className="div-15">Login</Link>
          
        </div>
        <div className='back'>
          Return to homepage <MdArrowForward/>   
          <Link to='/' className='back-to-home'>   Home</Link> 

        </div>
      </form>
      </header>
    </div>
  );
}

export default Signup;
