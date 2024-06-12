import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { MdEmail, MdLock, MdArrowForward } from "react-icons/md";
import { Link } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3002/signup', {
                email: email,
                password: password
            });

            if (response.status === 200) {
                setSuccess("Registration successful");
                setError('');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data);
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="signup-container">
            <header>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    
                    <div className="form-group">
                        <label htmlFor="email"><MdEmail /> Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><MdLock /> Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password"><MdLock /> Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="signup-button">Create Account</button>
                    <div className='div-14'>
                        Already have account? <Link to='/login' className="div-15">Login</Link>
                    </div>
                    <div className='back'>
                        Return to homepage <MdArrowForward />
                        <Link to='/' className='back-to-home'>   Home</Link>
                    </div>
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                </form>
            </header>
        </div>
    );
}

export default Signup;
