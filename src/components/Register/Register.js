import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Register: Create Account</h2>
            <form onSubmit="">
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="password" name="" id="" placeholder='Your Re-enter Password' />
                <br />
                <input type="submit" value="Submit" />
                <br />

            </form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>

            <div>---------or-----------</div>
            <button className='button-regular'>Google Sign In</button>
        </div>
    );
};

export default Register;