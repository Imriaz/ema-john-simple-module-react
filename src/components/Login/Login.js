import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    console.log('came from', location.state?.from);

    return (
        <div className='login-form'>
            <h2>Login</h2>
            <br />
            <form onSubmit=''>
                <input type="email" name='email' placeholder='Your Email' />
                <br />
                <input type="password" name='password' />
                <br />
                <input type="submit" value="Submit" />
                <br />
            </form>
            <br />
            <p>new to ema-john <Link to='/register'> Create Account
            </Link></p>
            <br />

            <div>---------or-----------</div>
            <button className='button-regular'
                onClick={signInUsingGoogle}>Google Sign In</button>



        </div>
    );
};

export default Login;