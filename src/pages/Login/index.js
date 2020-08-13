import React from 'react';
import './styles.css';
import logo from '../../assets/t.png';
import { Link } from 'react-router-dom';

function Login() {
    return(
        <div className='main'>
            <div className='center'>
                <img src={logo} alt='Logo' />
                <input placeholder='Digite seu e-mail...' />
                <Link to="/dashboard" className='loginButton'>
                     Acessar
                </Link>
            </div> {/* center */}
        </div>/* main */
    )
}

export default Login;