import React, { useState } from 'react';
import loginApi from '../../api/LoginApi'; // Sử dụng loginApi thay vì AxiosClient trực tiếp
import '../../Component/Login/Login.css';
import { MdEmail, MdLock, MdArrowForward } from "react-icons/md";
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginApi.login({ email, password });

            setSuccess("Login successful");
            setError('');
            localStorage.setItem('token', response.Token); // Lưu token vào Local Storage
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data);
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="Login-app">
            <header>
                <div className='container1'>
                    <form className='Login-form' onSubmit={handleSubmit}>
                        <div className="div">
                            <div className="div-2">
                                <div className="div-3">
                                    <div className="div-4">Login</div>
                                </div>

                                <div className="div-5"><MdEmail />Email</div>
                                <input type="email" className="div-6" placeholder='Email' required
                                    value={email} onChange={(e) => setEmail(e.target.value)} />

                                <div className="div-7"><MdLock />Password</div>
                                <input type="password" className="div-8" placeholder='Password' required
                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className='div-9'>
                                    <Link to='/forgot'>Forgot Password</Link>
                                </div>
                                <button type="submit" className="div-13">Login</button>
                                <br />
                                <div className='div-14'>Have no account?
                                    <Link to='/signup' className="div-15">Sign Up</Link>
                                </div>
                                <div className='back'>
                                    Return to homepage <MdArrowForward />
                                    <Link to='/' className='back-to-home'>  Home</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                </div>
            </header>
        </div>
    );
}

export default Login;
