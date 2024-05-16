import React from 'react'
import './login.scss';

const Login = () => {
  return (
    <section>
        <div className="login-container">
            <h1 className="container-heading">
                Sign In
            </h1>
            <input type="text" className="user-email" id="user-email" placeholder='Email ...' />

            <input type="text" className="user-password" id="user-password" placeholder='Email Password...' />
            
            <div className='button-container'>
            <button>
                Login to clocking
            </button>
            </div>
            
        </div>
    </section>
  )
}

export default Login;
